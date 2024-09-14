---
author: theapache64
pubDatetime: 2024-09-14T00:00:00+05:30
modDatetime: 2024-09-14T00:00:00+05:30
title: How to protect your Ktor Slack bot
slug: 
    how-to-protect-your-ktor-slack-bot
featured: true
draft: false
description: 
    A how-to guide on how to protect HTTP-based Ktor Slack bot (HMAC)
tags:
    - ktor
    - slack-bot
    - oauth
---

## Problem Statement
While writing the backend for an HTTP-based Slack bot, you might want to verify that the request comes from Slack and not from somebody trying to spam your service. To do this, we can use the `X-Slack-Signature` header that comes with the POST request, using the Ktor authentication plugin.

- Versions we are using

```kotlin
kotlin("jvm") version "2.0.20"
id("io.ktor.plugin") version "3.0.0-rc-1"
id("org.jetbrains.kotlin.plugin.serialization") version "2.0.20"
```

## Step 1 : Add auth module


- first add these deps to your build.gradle.kts

```kotlin
implementation("io.ktor:ktor-server-auth") // auth plugin
implementation("io.ktor:ktor-server-double-receive") // to read request body multipe times
```

- add custom auth class

```kotlin
import io.ktor.http.*
import io.ktor.server.auth.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec


fun AuthenticationConfig.slackRequestAuth(
    name: String? = null,
    configure: SlackRequestAuthConfig.() -> Unit
) {
    val provider = SlackRequestAuthentication(
        SlackRequestAuthConfig(name).apply(configure)
    )
    register(provider)
}

class SlackRequestAuthConfig internal constructor(name: String?) : AuthenticationProvider.Config(name) {
    var signingKey: String = ""
    var ohUnauthorizedFunction: suspend (Throwable) -> Unit = { }

    fun onUnauthorized(body: suspend (Throwable) -> Unit) {
        ohUnauthorizedFunction = body
    }
}

class SignatureVerificationFailedException(msg: String) : Exception(msg)

private const val HmacSha256AuthKey = "HmacSha256"

private class SlackRequestAuthentication(
    config: SlackRequestAuthConfig
) : AuthenticationProvider(config) {
    private val signingKey = config.signingKey
    private val onUnauthorized = config.ohUnauthorizedFunction

    override suspend fun onAuthenticate(context: AuthenticationContext) {
        val call = context.call
        val incomingSignature = call.request.header("X-Slack-Signature")
        val timestamp = call.request.header("X-Slack-Request-Timestamp")?.toLong()
        val data = "v0:$timestamp:${call.receiveText()}"
        val cause = when (incomingSignature) {
            null -> Pair(
                AuthenticationFailedCause.NoCredentials,
                SignatureVerificationFailedException("signature was missing or empty")
            )

            else -> verifySignature(data.toByteArray(), signingKey, incomingSignature).fold(
                { null },
                {
                    Pair(AuthenticationFailedCause.InvalidCredentials, it)
                }
            )
        }

        if (cause != null) {
            context.challenge(HmacSha256AuthKey, cause.first) { challenge, _ ->
                call.respond(HttpStatusCode.Unauthorized)
                onUnauthorized(cause.second)
                challenge.complete()
            }
        }
    }

    private fun verifySignature(
        data: ByteArray,
        signingKey: String,
        incomingSignature: String,
    ): Result<Unit> = runCatching {
        val calculatedSignature = "v0=${hmacEncode(signingKey, data)}"
        if (incomingSignature != calculatedSignature) {
            throw SignatureVerificationFailedException("Incoming: $incomingSignature, Calculated: $calculatedSignature")
        }
    }

    @OptIn(ExperimentalStdlibApi::class)
    private fun hmacEncode(key: String, data: ByteArray): String {
        val algorithm = "HmacSHA256"
        val mac = Mac.getInstance(algorithm)
        val secretKey = SecretKeySpec(key.toByteArray(Charsets.UTF_8), algorithm)
        mac.init(secretKey)
        return mac.doFinal(data).toHexString()
    }
}
```

## Step 2: Install the module

You can learn how to get your `SLACK_SIGNING_SECRET` from [here](https://api.slack.com/authentication/verifying-requests-from-slack#validating-a-request)

```kotlin
import io.ktor.server.application.*
import io.ktor.server.auth.*

fun Application.configureAuth() {
    install(Authentication) {
        slackRequestAuth("slack-request-auth") {
            signingKey = System.getenv("SLACK_SIGNING_SECRET") ?: error("SLACK_SIGNING_SECRET is missing")
            onUnauthorized {
                println("Unauthorized: $it")
            }
        }
    }
}
```

- install `DoubleReceive` plugin

```kotlin
fun Application.module() {
    install(DoubleReceive)
    configureAuth()
    ...
}
```

## Step 3: Wrap your route with the auth module

```
fun Application.configureRouting() {
    routing {
        authenticate("slack-request-auth") {
            post("/hello-bot") {
                // ... your secure bot logic
            }
        }
    }
}
```
and thats it

### Credits

- Thanks to Chris for [HMAC auth sample](https://github.com/chrsblck/ktor-hmac-auth)

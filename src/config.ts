import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";

export const SITE: Site = {
  website: "https://theapache64.github.io", // replace this with your deployed domain
  author: "theapache64",
  profile: "https://github.com/theapache64",
  desc: "Story of my stupid tools and libraries",
  title: "theapache64",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/theapache64",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/theapache64",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://x.com/theapache64",
    linkTitle: `${SITE.title} on Xitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/theapache64",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@theapache64",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/theapache64/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/theapache64",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:theapache64@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const GISCUS: GiscusProps = {
  repo: "theapache64/theapache64.github.io",
  repoId: "R_kgDOMiH9Cw",
  category: "General",
  categoryId: "DIC_kwDOMiH9C84Chi9Y",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
};
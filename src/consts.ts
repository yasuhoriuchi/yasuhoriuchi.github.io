import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Horiuchi.Page",
  DESCRIPTION: "Horiuchi.Page",
  EMAIL: "yasuhiro@horiuchi.page",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Horiuchi.page",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "ブログです。",
};


export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "情報処理安全確保支援士 検索サービス",
    HREF: "https://riss.ipa.go.jp/r?r=017691",
  }
];

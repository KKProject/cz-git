import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/guide/": [
    {
      text: "Guide",
      children: ["/guide/README.md", "/guide/getting-started.md", "/guide/configuration.md"]
    },
    {
      text: "Options",
      // collapsible: true,
      children: ["/guide/options-show.md", "/guide/option-engineer.md"]
    },
    "/guide/recipes.md",
    "/guide/faq.md"
  ]
};

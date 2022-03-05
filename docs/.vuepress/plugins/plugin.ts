import type { SearchConsolePluginOptions } from 'vuepress-plugin-china-search-console'
import type { ClipboardOptions } from 'vuepress-plugin-clipboard'
import type { PluginConfig } from "vuepress";

/**
 * @description: Code Copy Plugin
 */
export const codeCopyPlugin: PluginConfig = [
  "vuepress-plugin-clipboard",
  {
    staticIcon: true,
    align: "top",
    delay: 500
  } as ClipboardOptions
];

/**
 * @description: Baidu Analytics | 360,baidu,byteDance Autopush
 */
export const chinaSEOPlugin: PluginConfig = [
  "vuepress-plugin-china-search-console",
  {
    baiduId: "bf054898b9d0571dbc66734813899364",
    autoPush360Switch: false
  } as SearchConsolePluginOptions
];

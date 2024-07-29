import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧭 CotM",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "grooling.github.io",
    ignorePatterns: ["private", "_assets/templates/", ".obsidian", "zone/"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merriweather",
        body: "Jost",
        code: "Edu AU VIC WA NT Hand",
      },
      colors: {
        lightMode: {
          light: "#fff7e8",
          lightgray: "#eadec7",
          gray: "#7c483c",
          darkgray: "#19150c",
          dark: "#78603e",
          secondary: "#926c33",
          tertiary: "#481e1d",
          highlight: "rgba(70, 131, 142, 0.15)",
          textHighlight: "rgba(218, 176, 37, 0.48)",
        },
        darkMode: {
          light: "#19150c",
          lightgray: "#2d1d17",
          gray: "#9e6a42",
          darkgray: "#fff7e8",
          dark: "#8f6d54",
          secondary: "#7a563b",
          tertiary: "#653f31",
          highlight: "rgba(54, 80, 85, 0.2)",
          textHighlight: "rgba(150, 123, 34, 0.48)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "solarized-light",
          dark: "houston",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

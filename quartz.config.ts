import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { RemoveDMOnly } from "./quartz/plugins/filters/removeDMOnly"

/**
 * The Candlekeep Vault — Quartz v4 Configuration
 *
 * IMPORTANT: Replace YOUR-GITHUB-USERNAME with your actual GitHub username
 * before pushing to GitHub.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "The Candlekeep Vault",
    pageTitleSuffix: " | The Candlekeep Vault",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",

    // Replace YOUR-GITHUB-USERNAME with your actual GitHub username
    baseUrl: "ngois791-sys.github.io/candlekeep-vault",

    // These folders inside your vault will be completely ignored by the wiki
    ignorePatterns: [
      "z_Templates",
      ".obsidian",
      "private",
    ],

    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Crimson Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // Light mode — parchment feel for anyone who prefers it
        lightMode: {
          light: "#F4EAD3",       // Warm parchment background
          lightgray: "#e0d5c0",   // Subtle borders
          gray: "#8a8070",        // Muted text / metadata
          darkgray: "#2e2e3e",    // Body text
          dark: "#1a1a2e",        // Headings
          secondary: "#4a7a5a",   // Links / accent (darker sage for light bg)
          tertiary: "#7EAB8A",    // Hover states
          highlight: "rgba(126, 171, 138, 0.15)",
          textHighlight: "rgba(126, 171, 138, 0.3)",
        },
        // Dark mode — the Candlekeep Vault design
        darkMode: {
          light: "#222848",       // Main background
          lightgray: "#2e3460",   // Sidebar / borders
          gray: "#7a7fa8",        // Muted text / metadata
          darkgray: "#EAE1C9",    // Body text (antique cream)
          dark: "#F4EAD3",        // Headings (warm parchment)
          secondary: "#7EAB8A",   // Links / accent (sage green)
          tertiary: "#9ECBAA",    // Hover states (lighter sage)
          highlight: "rgba(126, 171, 138, 0.15)",
          textHighlight: "rgba(126, 171, 138, 0.3)",
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
          light: "github-light",
          dark: "one-dark-pro",
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

    filters: [
      // Removes any page with draft: true in frontmatter
      Plugin.RemoveDrafts(),
            RemoveDMOnly(),
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

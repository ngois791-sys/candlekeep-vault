// ============================================================
// The Candlekeep Vault — Site Configuration
// Edit this file to customize your wiki
// ============================================================

module.exports = {

  // ── Site Identity ─────────────────────────────────────────
  site: {
    title:      "The Candlekeep Vault",
    emoji:      "🕯",
    footer:     "What is written endures. What is forgotten, dies.",
    baseUrl:    "/candlekeep-vault",   // Must match your GitHub repo name
  },

  // ── Design Tokens ─────────────────────────────────────────
  // Change colors here — all values are CSS hex colors
  colors: {
    bg:           "#222848",   // Main page background
    sidebarBg:    "#13172b",   // Sidebar and topbar background
    border:       "#2e3460",   // Borders and dividers
    text:         "#EAE1C9",   // Body text (antique cream)
    heading:      "#F4EAD3",   // Heading text (warm parchment)
    muted:        "#7a7fa8",   // Muted / metadata text
    accent:       "#7EAB8A",   // Sage green — links, nav, accents
    accentHover:  "#9ECBAA",   // Lighter sage — hover states
    purple:       "#7A2076",   // Imperial purple — [!important] callouts
    purpleLight:  "#c084d4",   // Light purple — callout titles
    warning:      "#b8860b",   // Amber — [!warning] callouts
    warningLight: "#c9a84c",   // Light amber — warning titles
  },

  // ── Folders to completely hide from players ───────────────
  // Add any folder name here to exclude ALL files inside it
  ignoredFolders: [
    ".obsidian",
    "z_Templates",
    "z_HomeBrewed_By_Nico",
    "Extra Information",
    "Player Trackers",
    "R-Cane",
    "Keepers of the Forbidden Lore",
    "Mechanics",
    "Adventures",
  ],

  // ── DM-Only Tag ───────────────────────────────────────────
  // Any file with this tag in its frontmatter will be hidden
  dmOnlyTag: "dm-only",

  // ── Navigation Structure ──────────────────────────────────
  // Explore section — maps nav labels to vault folders
  // To add a section: { label: "My Section", folder: "My Folder" }
  // To remove a section: delete the line
  explore: [
    { label: "Characters",  folder: "Campaign Notes/NPCs"       },
    { label: "Locations",   folder: "Campaign Notes/Locations"  },
    { label: "Factions",    folder: "Campaign Notes/Factions"   },
    { label: "Lore",        folder: "Lore"                      },
    { label: "Candlekeep",  folder: "CandleKeep"                },
  ],

  // Sessions section — auto-populated from this folder
  sessionsFolder: "Campaign Notes/Sessions",

}

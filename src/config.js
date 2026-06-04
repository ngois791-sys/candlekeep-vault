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

  // ── DM-Only Section Marker ────────────────────────────────
  // Any HEADING whose text contains this word hides that whole
  // section (the heading + everything under it) from players,
  // up to the next heading at the same or higher level.
  // Public content resumes after it. Change the word if you like.
  dmOnlySectionMarker: "DM-only",

  // ── DM-Only Callout Types ─────────────────────────────────
  // Callouts of these types are removed entirely from the player
  // site (and search). In Obsidian they still show, so you see them.
  // Usage in a note:
  //   > [!secret]
  //   > Only the DM should ever read this.
  dmOnlyCalloutTypes: ["secret", "dm"],

  // ── Navigation Structure ──────────────────────────────────
  // Explore section — maps nav labels to vault folders
  // To add a section: { label: "My Section", folder: "My Folder" }
  // To remove a section: delete the line
  // The optional `description` shows on the home-page section cards.
  explore: [
    { label: "Characters",  folder: "Campaign Notes/NPCs",      description: "The allies, rivals, and strange folk the party has met." },
    { label: "Locations",   folder: "Campaign Notes/Locations", description: "Places the company has traveled and the maps they've drawn." },
    { label: "Factions",    folder: "Campaign Notes/Factions",  description: "The orders and powers vying for influence across the realm." },
    { label: "Lore",        folder: "Lore",                     description: "Histories, legends, and the deeper truths of the world." },
    { label: "Candlekeep",  folder: "CandleKeep",               description: "The great fortress-library and its many secret doors." },
  ],

  // Sessions section — auto-populated from this folder
  sessionsFolder: "Campaign Notes/Sessions",
  sessionsDescription: "A session-by-session chronicle of the adventure so far.",

}

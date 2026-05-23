import { QuartzFilterPlugin } from "../types"

/**
 * RemoveDMOnly — The Candlekeep Vault
 *
 * Excludes any page that has "DM-Only" in its frontmatter tags
 * from the public wiki build. These pages remain fully visible
 * in Obsidian on your local machine.
 *
 * Usage in quartz.config.ts:
 *   import { RemoveDMOnly } from "./quartz/plugins/filters/removeDMOnly"
 *   ...
 *   filters: [Plugin.RemoveDrafts(), RemoveDMOnly()],
 */
export const RemoveDMOnly: QuartzFilterPlugin = () => ({
  name: "RemoveDMOnly",
  shouldPublish(_ctx, [_tree, vfile]) {
    const frontmatter = vfile.data?.frontmatter
    if (!frontmatter) return true

    const tags: string[] = Array.isArray(frontmatter.tags)
      ? frontmatter.tags
      : typeof frontmatter.tags === "string"
      ? [frontmatter.tags]
      : []

    // Normalise to lowercase for comparison so "DM-Only", "dm-only",
    // and "Dm-Only" are all caught
    const normalisedTags = tags.map((t) => t.toLowerCase())
    return !normalisedTags.includes("dm-only")
  },
})

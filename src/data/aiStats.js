// AI-assisted development stats. Cursor values come from the Cursor profile/stats
// page (see the portfolio-sync skill). Never invent values: leave a field null and
// its stat tile stays hidden.

export const aiStats = {
  cursor: {
    profileUrl: "https://cursor.com/@rithvikbuilds4u",
    asOf: "2026-10-11", // date the numbers were read
    tokens: 95500000,
    agents: 5,
    longestRunningAgent: "7.5h",
    models: ["Grok 4.6", "Claude Opus 5.5"]
  },

  workflow: [
    {
      tool: "Cursor",
      text: "Project rules and skills in .cursor/ guide agent work on this repo."
    },
    {
      tool: "Claude Code",
      text: "Reads the same skills through .claude/skills symlinks, with CLAUDE.md pointing at the shared project docs."
    },
    {
      tool: "Shared memory",
      text: "Both tools read and log to one project memory file, so either developer can pick up where the other left off."
    }
  ]
};

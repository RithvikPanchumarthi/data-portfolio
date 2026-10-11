// AI-assisted development stats. Cursor values come from the Cursor profile/stats
// page (see the portfolio-sync skill). Never invent values: leave a field null and
// its stat tile stays hidden.

export const aiStats = {
  cursor: {
    profileUrl: "https://cursor.com/@rithvikbuilds4u",
    asOf: null, // "YYYY-MM-DD" the numbers were read
    tokens: null, // e.g. "1.2B"
    agents: null, // e.g. 340
    longestRunningAgent: null // e.g. "3h 12m"
  },

  workflow: [
    {
      tool: "Cursor",
      text: "Agent-driven feature work with project rules and skills in .cursor/."
    },
    {
      tool: "Claude Code",
      text: "Planning, reviews and multi-step changes, reading the same skills through .claude/skills symlinks."
    },
    {
      tool: "Shared memory",
      text: "Both tools read and log to one project memory file, so either developer can pick up where the other left off."
    }
  ]
};

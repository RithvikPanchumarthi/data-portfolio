/**
 * Theme Configuration Object
 * 
 * Provides consistent styling mappings between Light and Dark modes
 * Maintains design language coherence with accent color families:
 * - Emerald: Cloud/Infrastructure
 * - Cyan: Data Engineering  
 * - Violet: Analytics/Programming
 * - Amber: Visualization/BI
 */

export const themeConfig = {
  light: {
    // Section backgrounds with soft gradients
    backgroundProjects: "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100",
    backgroundAbout: "bg-gradient-to-br from-teal-50 via-blue-50 to-teal-100",
    backgroundNeutral: "bg-gradient-to-br from-gray-50 via-white to-gray-100",
    
    // Card styling - clean white cards with soft shadows
    card: "bg-white border border-gray-200 shadow-md hover:shadow-lg",
    cardSkill: "bg-white border border-gray-200 shadow-md hover:shadow-lg",
    
    // Gradient headings for visual consistency
    headingProjects: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600",
    headingAbout: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600",
    headingTech: "text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600",
    
    // Typography hierarchy
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    textTertiary: "text-gray-500",
    
    // Accent colors for different categories
    accentEmerald: "text-emerald-600",
    accentCyan: "text-cyan-600", 
    accentViolet: "text-violet-600",
    accentAmber: "text-amber-600",
    
    // Interactive elements
    filterActive: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg",
    filterInactive: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
    
    // Technology tags with soft accent backgrounds
    tagEmerald: "bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100",
    tagCyan: "bg-cyan-50 border border-cyan-200 text-cyan-700 hover:bg-cyan-100", 
    tagViolet: "bg-violet-50 border border-violet-200 text-violet-700 hover:bg-violet-100",
    tagAmber: "bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100",
    
    // Buttons
    buttonPrimary: "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white shadow-lg hover:shadow-xl",
    buttonSecondary: "bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg",
    buttonDemo: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg hover:shadow-xl",
    
    // Achievement/skill icons
    iconEmerald: "bg-emerald-50 border border-emerald-200 text-emerald-600",
    iconCyan: "bg-cyan-50 border border-cyan-200 text-cyan-600",
    iconViolet: "bg-violet-50 border border-violet-200 text-violet-600", 
    iconAmber: "bg-amber-50 border border-amber-200 text-amber-600",
    
    // Progress bars
    progressEmerald: "bg-gradient-to-r from-emerald-500 to-teal-500",
    progressCyan: "bg-gradient-to-r from-cyan-500 to-blue-500",
    progressViolet: "bg-gradient-to-r from-violet-500 to-purple-500",
    progressAmber: "bg-gradient-to-r from-amber-500 to-orange-500",
    progressRose: "bg-gradient-to-r from-rose-500 to-pink-500",
    progressBg: "bg-gray-200",

    // Modal, dividers and timeline rail
    modal: "bg-white border border-gray-200 shadow-2xl",
    divider: "border-gray-200",
    timelineRail: "bg-gray-300",
    timelineDot: "bg-white border-2 border-cyan-500"
  },
  
  dark: {
    // Section backgrounds with dramatic gradients
    backgroundProjects: "bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800",
    backgroundAbout: "bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800",
    backgroundNeutral: "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800",
    
    // Glass-morphism cards with glow effects
    card: "bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 shadow-2xl shadow-purple-900/20 hover:shadow-purple-800/30",
    cardSkill: "bg-gray-800/40 backdrop-blur-sm border shadow-2xl hover:shadow-xl",
    
    // Bright gradient headings for dark backgrounds
    headingProjects: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400",
    headingAbout: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400", 
    headingTech: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400",
    
    // High contrast typography
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textTertiary: "text-gray-400",
    
    // Bright accent colors for visibility
    accentEmerald: "text-emerald-400",
    accentCyan: "text-cyan-400",
    accentViolet: "text-violet-400", 
    accentAmber: "text-amber-400",
    
    // Interactive elements with glow
    filterActive: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25",
    filterInactive: "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/70 hover:border-cyan-500/50",
    
    // Technology tags with accent backgrounds and borders
    tagEmerald: "bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/30",
    tagCyan: "bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30",
    tagViolet: "bg-violet-500/20 border border-violet-400/30 text-violet-300 hover:bg-violet-500/30", 
    tagAmber: "bg-amber-500/20 border border-amber-400/30 text-amber-300 hover:bg-amber-500/30",
    
    // Buttons with gradients and glow
    buttonPrimary: "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white shadow-lg shadow-violet-500/25",
    buttonSecondary: "bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg shadow-gray-500/25",
    buttonDemo: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25",
    
    // Achievement/skill icons with accent styling
    iconEmerald: "bg-emerald-500/20 border border-emerald-400/30 text-emerald-400",
    iconCyan: "bg-cyan-500/20 border border-cyan-400/30 text-cyan-400",
    iconViolet: "bg-violet-500/20 border border-violet-400/30 text-violet-400",
    iconAmber: "bg-amber-500/20 border border-amber-400/30 text-amber-400",
    
    // Progress bars with gradients
    progressEmerald: "bg-gradient-to-r from-emerald-500 to-teal-500",
    progressCyan: "bg-gradient-to-r from-cyan-500 to-blue-500", 
    progressViolet: "bg-gradient-to-r from-violet-500 to-purple-500",
    progressAmber: "bg-gradient-to-r from-amber-500 to-orange-500",
    progressRose: "bg-gradient-to-r from-rose-500 to-pink-500",
    progressBg: "bg-gray-700",

    // Modal, dividers and timeline rail
    modal: "bg-gray-900 border border-gray-700 shadow-2xl shadow-black/50",
    divider: "border-gray-700",
    timelineRail: "bg-gray-700",
    timelineDot: "bg-gray-900 border-2 border-cyan-400"
  }
};

/**
 * Helper function to get theme-specific classes
 * @param {string} theme - 'light' or 'dark'
 * @param {string} key - The style key from themeConfig
 * @returns {string} - The corresponding CSS classes
 */
export const getThemeClass = (theme, key) => {
  return themeConfig[theme]?.[key] || '';
};

/**
 * Accent color mappings for consistent theming
 */
export const accentMapping = {
  cloud: 'Emerald',      // Cloud & Infrastructure
  engineering: 'Cyan',   // Data Engineering
  analytics: 'Violet',   // Analytics & Programming  
  visualization: 'Amber' // Visualization & BI
};

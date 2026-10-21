
// # list of supported navigation variants
export const NAV_VARIANTS = [ "default", "transparent", "dark" ] as const;

// # union type based on NAV_VARIANTS
export type NavVariant = (typeof NAV_VARIANTS)[number];

// # shared base styling for navigation items
export const NAV_ITEM_BASE_CLASS = " inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ";

// # styling for navigation items based on variant
export const NAV_ITEM_VARIANT_CLASS = {
    default: " text-gray-700 hover:bg-gray-100 hover:text-gray-950",
    transparent: "text-gray-700 hover:bg-gray-100/70 hover:text-gray-950",
    dark: "text-gray-300 hover:bg-gray-800 hover:text-white"
} as const satisfies Record<NavVariant, string>;

// # styling for active navigation links
export const NAV_ITEM_ACTIVE_CLASS = {
    default: "bg-gray-100 text-gray-950",
    transparent: "bg-gray-100/70 text-gray-950",
    dark: "bg-gray-800 text-white"
} as const satisfies Record<NavVariant, string>;

// # styling for the navbar container
export const NAVBAR_VARIANT_CLASS = {
    default: "border-b border-gray-200 bg-white text-gray-950",
    transparent: "bg-transparent text-gray-950",
    dark: "border-b border-gray-800 bg-gray-950 text-white"
} as const satisfies Record<NavVariant, string>;

// # styling for the sidebar
export const NAV_SIDEBAR_VARIANT_CLASS = {
    default: "bg-white text-gray-950",
    transparent: "bg-white text-gray-950",
    dark: "bg-gray-950 text-white"
} as const satisfies Record<NavVariant, string>;

// # styling for the dropdown panel
export const NAV_DROPDOWN_VARIANT_CLASS = {
    default: "border-gray-200 bg-white shadow-lg",
    transparent: "border-gray-200 bg-white shadow-lg",
    dark: "border-gray-800 bg-gray-950 shadow-lg"
} as const satisfies Record<NavVariant, string>;
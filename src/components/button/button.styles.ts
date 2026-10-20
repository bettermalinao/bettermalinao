
// # list of supported button variants
export const BUTTON_VARIANTS = [
    "solid", "outline", "ghost"
] as const;

// # creates a union type from BUTTON_VARIANTS
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

// # list of supported button colors
export const BUTTON_COLORS = [
    "primary", "gray", "green", "red"
] as const;

// # union type of based on BUTTON_COLORS
export type ButtonColor = (typeof BUTTON_COLORS)[number];

// # list of supported button sizes
export const BUTTON_SIZES = [
    "sm", "md", "lg"
] as const;

// # union type of button sizes based on BUTTON_SIZES
export type ButtonSize = (typeof BUTTON_SIZES)[number];

// # based class of every button
export const BUTTON_BASE_CLASS = `
    inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors cursor-pointer
    disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 `;


// # lookup table for button sizes
export const BUTTON_SIZE_CLASS = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base"
} as const satisfies Record<ButtonSize, string>;

// # lookup table for icon-only button sizes
export const BUTTON_ICON_SIZE_CLASS = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12"
} as const satisfies Record<ButtonSize, string>;

// # lookup table for solid buttons
export const BUTTON_SOLID_CLASS = {
    primary: "bg-[#0032A0] text-white hover:bg-[#0032A0]/80 focus:ring-blue-500",
    gray: "bg-[#181717] text-white hover:bg-[#181717]/80 focus:ring-gray-500",
    green: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    red: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
} as const satisfies Record<ButtonColor, string>;

// # lookup table for outline buttons
export const BUTTON_OUTLINE_CLASS = {
    primary: "border border-2 border-[#0032A0] text-[#0032A0] hover:bg-blue-50 focus:ring-blue-500",
    gray: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
    green: "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500",
    red: "border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500"
} as const satisfies Record<ButtonColor, string>;

// # lookup table for ghost buttons
export const BUTTON_GHOST_CLASS = {
    primary: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    gray: "text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    green: "text-green-600 hover:bg-green-50 focus:ring-green-500",
    red: "text-red-600 hover:bg-red-50 focus:ring-red-500"
} as const satisfies Record<ButtonColor, string>;

// # maps every button variant to its corresponding color lookup table
export const BUTTON_VARIANT_CLASS = {
    solid: BUTTON_SOLID_CLASS,
    outline: BUTTON_OUTLINE_CLASS,
    ghost: BUTTON_GHOST_CLASS
} as const satisfies Record<ButtonVariant, Record<ButtonColor, string>>;

import type { ReactNode } from "react";

// # represents an internal or external navigation link
export interface NavLinkItem {
    type: "link";
    label: string;
    href: string;
    external?: boolean;
    icon?: ReactNode;
}

// # represents a navigation button that performs an action
export interface NavButtonItem {
    type: "button";
    label: string;
    on_click: () => void;
    icon?: ReactNode;
}

// # represents a dropdown containing navigation links
export interface NavDropdownItem {
    type: "dropdown";
    label: string;
    icon?: ReactNode;
    children: NavLinkItem[];
}

// # supported navigation item types
export type NavigationItem = | NavLinkItem | NavButtonItem | NavDropdownItem;

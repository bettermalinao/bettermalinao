
import { NavLink } from "react-router-dom";

import type { NavLinkItem, NavButtonItem } from "./navigation";

import type { NavVariant } from "./navigation.styles";

import { NAV_ITEM_BASE_CLASS, NAV_ITEM_VARIANT_CLASS, NAV_ITEM_ACTIVE_CLASS } from "./navigation.styles";

interface NavItemProps {
    item: NavLinkItem | NavButtonItem;
    variant?: NavVariant;
    on_navigate?: () => void;
}

const NavItem = ({ item, variant = "default", on_navigate }: NavItemProps) => {

    // # shared navigation styling
    const base_class = ` ${NAV_ITEM_BASE_CLASS} ${NAV_ITEM_VARIANT_CLASS[variant]}`;

    // # renders a navigation button
    if (item.type === "button") {
        return (
            <button
                type="button"
                onClick={() => {
                    item.on_click();
                    on_navigate?.();
                }}
                className={base_class}
            >
                {item.icon}
                <span>{item.label}</span>
            </button>
        );
    }

    // # renders an external navigation link
    if (item.external) {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={on_navigate}
                className={base_class}
            >
                {item.icon}
                <span>{item.label}</span>
            </a>
        );
    }

    // # renders an internal navigation link
    return (
        <NavLink
            to={item.href}
            end={item.href === "/"}
            onClick={on_navigate}
            className={({ isActive }) => ` ${base_class} ${isActive ? NAV_ITEM_ACTIVE_CLASS[variant] : ''}`}
        >
            {item.icon}
            <span>{item.label}</span>
        </NavLink>
    );
};

export default NavItem;

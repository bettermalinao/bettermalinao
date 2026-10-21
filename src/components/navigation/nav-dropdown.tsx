
import { useEffect, useId, useRef } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import type { NavDropdownItem } from "./navigation";
import type { NavVariant } from "./navigation.styles";

import { NAV_ITEM_BASE_CLASS, NAV_ITEM_VARIANT_CLASS, NAV_DROPDOWN_VARIANT_CLASS } from "./navigation.styles";

import NavItem from "./nav-item";

interface NavDropdownProps {
    item: NavDropdownItem;
    variant?: NavVariant;
    mobile?: boolean;
    is_open: boolean;
    onNavigate?: () => void;
    onToggle: () => void;
    onClose: () => void;
}

const NavDropdown = ({ item, variant = "default", mobile = false, is_open, onNavigate, onToggle, onClose }: NavDropdownProps) => {

    // # reference to the dropdown container
    const dropdown_ref = useRef<HTMLDivElement>(null);

    // # unique id for the dropdown content
    const dropdown_id = useId();

    // # handles navigation when a dropdown link is clicked
    const handleNavigate = () => {
        onClose();
        onNavigate?.();
    };

    // # closes the dropdown when clicking outside or pressing Escape
    useEffect(() => {
        if(!is_open) return;

        // # checks if the clicked element is outside the dropdown
        const handlePointerDown = (event: PointerEvent) => {
            if(!dropdown_ref.current) return;

            const clicked_element = event.target as Node;

            if(!dropdown_ref.current.contains(clicked_element)) {
                onClose();
            }
        };

        // # closes the dropdown when Escape is pressed
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === "Escape") {
                onClose();
            }
        };

        // # registers event listeners
        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        // # removes event listeners when the dropdown closes
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [is_open, onClose]);

    return(
        <div
            ref={ dropdown_ref  }
            className={mobile ? "relative w-full" : "relative "}
        >
            {/* # dropdown trigger */}
            <button
                type="button"
                aria-expanded={ is_open }
                aria-controls={ dropdown_id}
                onClick={onToggle}
                className={` ${NAV_ITEM_BASE_CLASS} ${NAV_ITEM_VARIANT_CLASS[variant]} ${mobile ? "w-full justify-between" : ""} `}
            >
                <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                </span>

                <ChevronDownIcon className={`size-4 shrink-0 transition-transform duration-200 ${is_open ? "rotate-180" : ""} `}/>
            </button>

            {/* # dropdown content */}
            {is_open && (
                <div
                    id={dropdown_id}
                    className={`${mobile ? "mt-1 flex flex-col gap-1 pl-4" : ` absolute top-full  50 mt-2 min-w-52 flex flex-col gap-1 rounded-xl border p-2 ${NAV_DROPDOWN_VARIANT_CLASS[variant]}` }`}
                >
                    {item.children.map((child) => (
                        <NavItem
                            key={`${child.label}-${child.href}`}
                            item={child}
                            variant={variant}
                            on_navigate={handleNavigate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavDropdown;

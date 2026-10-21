
import { useCallback, useEffect, useId, useRef, useState} from "react";

import type { ReactNode } from "react";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

import type { NavigationItem } from "./navigation";
import type { NavVariant } from "./navigation.styles";

import { NAVBAR_VARIANT_CLASS, NAV_SIDEBAR_VARIANT_CLASS } from "./navigation.styles";

import NavItem from "./nav-item";
import NavDropdown from "./nav-dropdown";

interface NavbarProps {
    items: NavigationItem[];
    variant?: NavVariant;
    logo?: ReactNode;
}

const Navbar = ({
    items,
    variant = "default",
    logo
}: NavbarProps) => {

    // # manages the visibility of the sidebar
    const [sidebar_open, setSidebarOpen] = useState(false);

    // # stores the identifier of the currently opened dropdown
    const [active_dropdown, setActiveDropdown] = useState<string | null>(null);

    // # references to the sidebar and its menu button
    const sidebar_ref = useRef<HTMLElement>(null);
    const menu_button_ref = useRef<HTMLButtonElement>(null);

    // # unique identifier for the sidebar
    const sidebar_id = useId();

    // # closes the sidebar and any opened dropdown
    const closeNavigation = useCallback(() => {
        setSidebarOpen(false);
        setActiveDropdown(null);
    }, []);

    // # opens the sidebar and closes any opened dropdown
    const openSidebar = () => {
        setSidebarOpen(true);
        setActiveDropdown(null);
    };

    // # closes the currently opened dropdown
    const closeDropdown = useCallback(() => {
        setActiveDropdown(null);
    }, []);

    // # opens or closes the selected dropdown
    const toggleDropdown = (dropdown_id: string) => {
        setActiveDropdown((current_dropdown) => {
            if(current_dropdown === dropdown_id) {
                return null;
            }

            return dropdown_id;
        });
    };

    // # closes the sidebar when clicking outside or pressing Escape
    useEffect(() => {
        if(!sidebar_open) return;

        // # checks if the clicked element is outside the sidebar
        const handlePointerDown = (event: PointerEvent) => {
            const clicked_element = event.target as Node;

            // # ignores clicks inside the sidebar
            if(sidebar_ref.current?.contains(clicked_element)) {
                return;
            }

            // # ignores clicks on the menu button
            if(menu_button_ref.current?.contains(clicked_element)) {
                return;
            }

            closeNavigation();
        };

        // # closes the sidebar when Escape is pressed
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === "Escape") {
                closeNavigation();
            }
        };

        // # registers event listeners
        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        // # removes event listeners when the sidebar closes
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [sidebar_open, closeNavigation]);

    // # closes the sidebar when the screen reaches desktop size
    useEffect(() => {
        const media_query = window.matchMedia("(min-width: 1024px)");

        const handleResize = () => {
            if(media_query.matches) {
                closeNavigation();
            }
        };

        // # checks the initial screen size and listens for changes
        handleResize();
        media_query.addEventListener("change", handleResize);

        return () => {
            media_query.removeEventListener("change", handleResize);
        };

    }, [closeNavigation]);

    // # renders a navigation item based on its type
    const renderItem = (
        item: NavigationItem,
        index: number,
        mobile = false
    ) => {

        // # creates a separate identifier for desktop and mobile items
        const dropdown_id = `${mobile ? "mobile" : "desktop"}-${index}`;

        // # renders a dropdown navigation item
        if(item.type === "dropdown") {
            return(
                <NavDropdown
                    key={dropdown_id}
                    item={item}
                    variant={variant}
                    mobile={mobile}
                    is_open={active_dropdown === dropdown_id}
                    onToggle={() => toggleDropdown(dropdown_id)}
                    onClose={closeDropdown}
                    onNavigate={closeNavigation}
                />
            );
        }

        // # renders a button or link navigation item
        return(
            <NavItem
                key={dropdown_id}
                item={item}
                variant={variant}
                on_navigate={closeNavigation}
            />
        );
    };

    return(
        <>
            {/* # navigation header */}
            <header
                className={`
                    sticky top-0 z-40 w-full
                    ${NAVBAR_VARIANT_CLASS[variant]}
                `}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

                    {/* # navigation logo */}
                    <div className="flex shrink-0 items-center">
                        {logo}
                    </div>

                    {/* # desktop topbar */}
                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {items.map((item, index) => renderItem(item, index))}
                    </nav>

                    {/* # mobile menu button */}
                    <button
                        ref={menu_button_ref}
                        type="button"
                        aria-label="Open navigation"
                        aria-expanded={sidebar_open}
                        aria-controls={sidebar_id}
                        onClick={openSidebar}
                        className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
                    >
                        <Bars2Icon className="size-6" />
                    </button>
                </div>
            </header>

            {/* # sidebar backdrop */}
            {sidebar_open && (
                <div aria-hidden="true" className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
            )}

            {/* # mobile sidebar */}
            <aside
                id={sidebar_id}
                ref={sidebar_ref}
                aria-label="Mobile navigation"
                aria-hidden={!sidebar_open}
                inert={!sidebar_open}
                className={` fixed top-0 right-0 z-50 flex h-dvh w-72 max-w-[85vw] flex-col p-4 shadow-xl transition-transform duration-300 lg:hidden ${NAV_SIDEBAR_VARIANT_CLASS[variant]} ${sidebar_open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* # sidebar header */}
                <div className="mb-6 flex items-center justify-between gap-4">

                    {/* # sidebar logo */}
                    {logo}

                    {/* # close sidebar button */}
                    <button
                        type="button"
                        onClick={closeNavigation}
                        aria-label="Close navigation"
                        className="rounded-lg p-2 transition-colors hover:bg-gray-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <XMarkIcon className="size-6" />
                    </button>
                </div>

                {/* # sidebar navigation items */}
                <nav
                    aria-label="Mobile menu"
                    className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto"
                >
                    {items.map((item, index) => renderItem(item, index, true))}
                </nav>
            </aside>
        </>
    );
};

export default Navbar;

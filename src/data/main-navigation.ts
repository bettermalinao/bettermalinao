
import type { NavigationItem } from "../components/navigation";

export const MAIN_NAVIGATION: NavigationItem[] = [
    {
        type: "link",
        label: "Home",
        href: "/"
    },
    {
        type: "dropdown",
        label: "Explore",
        children: [
            {
                type: "link",
                label: "Government Services",
                href: "/government-services"
            },
            {
                type: "link",
                label: "Public Information",
                href: "/public-information"
            }
        ]
    },
    {
        type: "link",
        label: "About",
        href: "/aboutus"
    },
    {
        type: "link",
        label: "Contributing",
        href: "/contributing"
    }
];

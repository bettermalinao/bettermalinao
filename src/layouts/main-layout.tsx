
import type { ReactNode } from "react";

import { Link } from "react-router-dom";

import bettermalinao_logo from "../assets/logo/bettermalinao-logo-v1_06.png"

import Footer from "../components/footer/footer";

import { Navbar } from "../components/navigation";
import { MAIN_NAVIGATION } from "../data/main-navigation";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {

    return(
        <>
            <Navbar
                items={MAIN_NAVIGATION}
                variant="default"
                logo={
                    <Link
                        to="/"
                        className="text-lg font-bold flex items-center gap-x-2"
                    >
                        <img src={bettermalinao_logo} alt="BetterMalinao Logo" className="w-10" />
                        <span>BetterMalinao</span>
                    </Link>
                }
            />

            <main className="flex flex-col items-center px-4 pb-40">
                {children}
            </main>

            <Footer />
        </>
    );

}

export default MainLayout;
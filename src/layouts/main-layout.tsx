
import type { ReactNode } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {

    return(
        <>
            <Header />

            <main className="flex flex-col items-center px-4 pb-40">
                {children}
            </main>

            <Footer />
        </>
    );

}

export default MainLayout;
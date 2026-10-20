
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

            <main className="flex min-h-screen flex-col items-center px-4">
                {children}
            </main>

            <Footer />
        </>
    );

}

export default MainLayout;
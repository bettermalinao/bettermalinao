
import MainLayout from "../layouts/main-layout";
import { Button } from "../components/button";

import { openLink } from "../utilities/linkNavigation";

import { SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";

const LandingPage = () => {

    return(
        <MainLayout>
            <section className="pt-10 pb-6">
                <img src="src/assets/hero/bettermalinao-hero-v1_02.png" alt="Better Malinao Hero Image" className="w-80 md:w-100 lg:w-100" />
            </section>

            <article className="w-98 md:w-200 lg:w-200 flex flex-col items-center gap-y-4">
                <p className="text-center text-lg">
                    An open source, community driven civic intiative inspired by BetterGov.PH, making government services, public information, and community services more
                    accessible while promoting transparency and citizen participation.
                </p>

                <p className="text-sm text-gray-400 text-center font-medium">
                    Under development. Not an official municipal portal or website.
                </p>
            </article>

            <section className="pt-10 flex flex-col gap-y-2">
                <Button
                    color="gray"
                    className="flex justify-between"
                    left_icon={<SiGithub />}
                    onClick={() => openLink("https://github.com/bettermalinao/bettermalinao")}
                >
                    
                    Contribute on Github
                </Button>

                <Button
                    color="primary"
                    className="flex justify-between"
                    left_icon={<SiFacebook />}
                    onClick={() => openLink("https://www.facebook.com/bettermalinao.org")}
                >
                    
                    Follow on Facebook
                </Button>
            </section>
        </MainLayout>
    );

}

export default LandingPage;
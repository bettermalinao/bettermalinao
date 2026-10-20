
import better_malinao_logo from "../../assets/logo/bettermalinao-logo-v1_06.png"

const Footer = () => {

    return(
        <footer className="flex flex-col items-center bg-[#363636] w-full gap-y-6 pt-6 pb-10">
            <section className="flex gap-x-4 items-center">
                <img src={better_malinao_logo} alt="Better Malinao Logo Image" className="w-26 md:w-40 lg:w-40" />
                <section>
                    <h4 className="font-bold text-2xl text-white">BetterMalinao</h4>
                    <h6 className="font-medium text-gray-400">by <a>@bettermalinao</a></h6>
                </section>
            </section>

            <section>
                <p className="font-medium text-sm text-gray-400">
                    &copy;2026
                    <span className="text-white"> BetterMalinao</span>.
                    All rights reserved.
                </p>
            </section>
        </footer>
    );

}

export default Footer;
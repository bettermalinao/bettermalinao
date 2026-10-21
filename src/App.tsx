
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import AboutUsPage from "./pages/about-us-page";
import GovernmentServicesPage from "./pages/explore/government-services-page";
import PublicInformationPage from "./pages/explore/public-information-page";
import ContributingPage from "./pages/contributing-page";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/government-services" element={<GovernmentServicesPage />} />
                <Route path="/public-information" element={<PublicInformationPage />} />
                <Route path="/contributing" element={<ContributingPage />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;
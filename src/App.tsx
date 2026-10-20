
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import AboutUsPage from "./pages/about-us-page";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;
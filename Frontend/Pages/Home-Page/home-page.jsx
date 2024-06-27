import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Home from "../../Components/Home/home";
import Quotes from "../../Components/Quotes/quotes";
import About from "../../Components/About/about";
import Why from "../../Components/Why/why";
import Support from "../../Components/Support/support";
import Services from "../../Components/Services/services";
import Centres from "../../Components/Centres/centres";
import StartupProgram from "../../Components/StartupProgram/startup-program";
import Apply from "../../Components/Apply/apply";
import Know from "../../Components/Know/know";
import Footer from "../../Components/Footer/footer";
import SmallScreen from "../../Components/SmallScreen/small-screen";

import RoadMap from "../../Components/Roadmap/roadmap";

const HomePage = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session={"#home"} />
            <section id="home-page">
                <Home mobileMenu={mobileMenu} />
                <Quotes />
                <About />
                <Why />
                <Support />
                <Services />
                <Centres />
                <StartupProgram />
                <RoadMap />
                <Apply />
                <Know />
                <Footer />
                <SmallScreen />
            </section>
        </>
    );
};

export default HomePage;
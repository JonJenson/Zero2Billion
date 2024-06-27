import  { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import GetMakersTurn from "../../Components/GetMakersTurn/get-makers-turn";
import JoinMakersTurn from "../../Components/JoinMakersTurn/join-makers-turn";
import Footer from "../../Components/Footer/footer";
import SmallScreen from "../../Components/SmallScreen/small-screen";
import "./makers-turn-page.css";

const MakersTurnPage = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} Session={"#makers-turn"}/>
            <section id="makers-turn">
                <GetMakersTurn />
                <JoinMakersTurn />
            </section>
            <Footer />
            <SmallScreen />
        </>
    );
};

export default MakersTurnPage;
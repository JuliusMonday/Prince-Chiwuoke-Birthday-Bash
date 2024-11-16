import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/countDownTimer";
import EventDetails from "../components/eventDetails";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
const RSVP = ()=>{
    useEffect(() => {
        document.title = "Rsvp - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        <CountdownTimer />
        <EventDetails />
        <MapSection />
        <Footer />
        </>
    );
};
export default RSVP;
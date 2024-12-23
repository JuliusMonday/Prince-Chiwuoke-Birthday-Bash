import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/countdownTimer";
import EventDetails from "../components/EventDetails";
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
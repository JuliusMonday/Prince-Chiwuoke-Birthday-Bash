import { useEffect } from "react";
import Navbar from "../components/Navbar";

const RSVP = ()=>{
    useEffect(() => {
        document.title = "Rsvp - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        <h1 className="header">RSVP page</h1>
        </>
    );
};
export default RSVP;
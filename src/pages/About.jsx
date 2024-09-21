import { useEffect } from "react";
import Navbar from "../components/Navbar";

const About = ()=>{
    useEffect(() => {
        document.title = "About Sir Prince - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        <h1 className="header">About us page</h1>
        </>
    );
};

export default About;
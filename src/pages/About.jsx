import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./About.css"
const About = ()=>{
    useEffect(() => {
        document.title = "About Sir Prince - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        
        </>
    );
};

export default About;
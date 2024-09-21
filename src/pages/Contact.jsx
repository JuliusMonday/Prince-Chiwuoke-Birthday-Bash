import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Contact = ()=>{
    useEffect(() => {
        document.title = "Contact - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        <h1 className="header">Contact Us page</h1>
        </>
    );
};
export default Contact;
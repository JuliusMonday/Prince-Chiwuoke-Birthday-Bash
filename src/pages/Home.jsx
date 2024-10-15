import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroComponent from '../components/HeroComponent';
import EvenHighlightSection from '../components/EvenHighlightSection';
import InfoSection from "../components/InfoSection"
import Gallery from '../components/Gallery';
import Quote from '../components/Quote';
import GetIntouch from '../components/GetIntouch';
import Footer from '../components/Footer';
const Home = ()=>{
    const scrollRevealOption = {
        distance: '50px',
        duration: 1000,
    };
    
    useEffect(() => {
        const sr = ScrollReveal();
    
        // Reveal each element one by one
        sr.reveal('.hero-card', {
        ...scrollRevealOption,
        origin: 'right',
        delay: 100, // Delay for the first element
        });

    }, []);
    useEffect(() => {
        document.title = "Homepage - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        <HeroComponent className="containerWrapper"/>
        <EvenHighlightSection className="containerWrapper"/>
        <InfoSection className="containerWrapper"/>
        <Gallery/>
        <Quote/>
        <GetIntouch/>
        <Footer/>
        </>
    );
};
export default Home;
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroComponent from '../components/HeroComponent';

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
        document.title = "Home - PCBB '24";
      }, []);
    return(
        <>
        <Navbar/>
        <HeroComponent className="containerWrapper"/>
       
        
        </>
    );
};
export default Home;
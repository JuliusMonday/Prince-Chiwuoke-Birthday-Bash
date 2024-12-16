import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import "./About.css"
import AboutHero from "../components/AboutHero";
import AboutMe from "../components/AboutMe";
import MyStory from "../components/MyStory";
import EarlyYears from '../components/EarlyYears';
import CareerHighlights from '../components/CareerHighlights';
import FamilyMoments from '../components/FamilyMoments';
import TravelAdventures from '../components/TravelAdventures';
import HobbiesInterests from '../components/HobbiesInterests';
import CommunityImpact from '../components/CommunityImpact';
const About = ()=>{
    useEffect(() => {
        document.title = "About Sir Prince - PCBB '24";
      }, []);
    return(
      <>
      <Navbar />
      <AboutHero />
      <AboutMe />
      <MyStory />
      <EarlyYears/>
      <CareerHighlights/>
      <FamilyMoments/>
      <TravelAdventures />
      <HobbiesInterests />
      <CommunityImpact />
      <Footer />
    </>
  );
};

export default About;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import About from "./pages/About";
import Contact from "./pages/Contact";
import RSVP from "./pages/RSVP";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/rsvp' element={<RSVP/>} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
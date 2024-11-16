import { useEffect } from "react";
import "./NotFound.css"
const NotFound = ()=>{
    useEffect(()=>{
        document.title = "Not Found - PCBB '24";
    }, []);
    return(
        <>
        <div className="container-error">
            <h1 className="text">404 NotFound</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <button className="back-btn">
                <a href="/">Go to Homepage</a>
            </button>
        </div>
       
        </>
        
    );
};

export default NotFound;
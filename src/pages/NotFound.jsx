import { useEffect } from "react";
const NotFound = ()=>{
    useEffect(()=>{
        document.title = "Not Found - PCBB '24";
    }, []);
    return(
        <>
        <h1 className="text">404 NotFound</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <button>
            <a href="/">Go to Homepage</a>
        </button>
        </>
        
    );
};

export default NotFound;
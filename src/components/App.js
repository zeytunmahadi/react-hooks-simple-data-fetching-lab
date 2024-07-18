// create your App component here
import React, { useState, useEffect } from "react";

export default function App() {
    const [ dogimgurl , setdogimgurl] = useState('')
    const [isloading , setloading] = useState(true)
    
    useEffect (()=> {
      
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then((response) => (response.json()))
        .then(data => {
            setdogimgurl(data.message);
            setloading(false);
        });

     
}, []);
        
    
return (
    <div>
        {isloading ? (
            <p>Loading...</p>
        ) : (
            <img src={dogimgurl} alt="A Random Dog" />
        )}
    </div>
);
}

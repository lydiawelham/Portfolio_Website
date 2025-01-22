import React from 'react';
import Typewriter from "typewriter-effect";

const Text = () => {

    return (  
        <div className="intro-text">
        <Typewriter
    
         onInit={(typewriter)=> { 
           
          
         typewriter
          
         .typeString('<span style="font-size: 10vmin;">Hello you</span>')
       
         .pauseFor(1000)
         .deleteAll()
         .changeDelay(100)
         .typeString("<span style='font-size: 8vmin;'>I'm Lydia Welham<br/>Software developer & UX designer</span>")
         .start();
         }}
         />
      </div>
    )
    }
    
    export default Text
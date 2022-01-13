import React from 'react';
import Typewriter from "typewriter-effect";

const Text = () => {

    return (  
        <div className="intro-text">
        <Typewriter
    
         onInit={(typewriter)=> {
    
         typewriter
          
         .typeString('<span style="color: #1AA7EC; font-weight: bold; font-size: 10vmin; padding-top: 35vmin;">HELLO YOU</span>')
           
         .pauseFor(1000)
         .deleteAll()
         .typeString("<span style='color: #fff;'>i'm Lydia Welham<br/>a web developer and communicative design specialist</span>")
         .start();
         }}
         />
      </div>
    )
    }
    
    export default Text
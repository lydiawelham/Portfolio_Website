import './App.css'
//import Intro from './components/Intro'
import Projects from './components/Projects'
import Languages from './components/Languages'
import profileImg from'./profile-img.png'
import profileImg3 from './profile-img3.png'
import codeImg from './code-img.png'
import {useState} from 'react'
import codeThin1 from './code-thin1.png'
import codeThin2 from './code-thin2.png'
import codeThin3 from './code-thin3.png'
import codeThin4 from './code-thin4.png'
import Cards from './components/Cards'
 
function App() {
  /* OPENING IMAGE CURRENTLY REMOVED (see bottom of page)
  const [isFade, setFade] = useState(false);

  const fadeImage = () => {
    setFade(true);
  }*/

  return (
    <div className="App">

      
      <div className="header">
        <a className="link" href="#top"><h1 className="name-text">LYDIA WELHAM</h1></a>
        <div className="header-links">
          <a className="App-link" href="#projects"><h4>projects</h4></a>
          <a className="App-link" href="#languages"><h4>languages</h4></a>
        </div>
      </div>
      <div className="img-container">
         <img className="profile-img" src={profileImg} alt="Lydia in boxing ring in black and white" />
      </div>
      <div className="intro">
      <img className="profile-img3" src={profileImg3} alt="head and shoulders photo of lydia smiling" />
        <div className="intro-text">
          <h2>HELLO</h2>
          <h4>my name is Lydia</h4>
          <p>i'm a boxer turned web developer<br/>based in the UK</p>
          <div className="buttons">
            <a href="https://github.com/lydiawelham" target="_blank" rel="noopener noreferrer"><svg contentScriptType="text/ecmascript" width="75" zoomAndPan="magnify" contentStyleType="text/css" viewBox="0 0 75 74.999997" height="74.999997" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="clip-0"><path d="M 3.75 4 L 71.25 4 L 71.25 71 L 3.75 71 Z M 3.75 4 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#clip-0)"><path fill="rgb(85.099792%, 85.099792%, 85.099792%)" d="M 37.5 4.3125 C 18.863281 4.3125 3.75 19.425781 3.75 38.0625 C 3.75 53.878906 14.640625 67.109375 29.320312 70.773438 C 29.164062 70.316406 29.0625 69.789062 29.0625 69.132812 L 29.0625 63.363281 C 27.691406 63.363281 25.398438 63.363281 24.820312 63.363281 C 22.511719 63.363281 20.460938 62.371094 19.464844 60.527344 C 18.359375 58.476562 18.167969 55.339844 15.425781 53.421875 C 14.613281 52.78125 15.234375 52.054688 16.171875 52.152344 C 17.898438 52.640625 19.335938 53.828125 20.683594 55.589844 C 22.027344 57.351562 22.660156 57.753906 25.171875 57.753906 C 26.390625 57.753906 28.214844 57.683594 29.929688 57.414062 C 30.851562 55.070312 32.445312 52.914062 34.394531 51.894531 C 23.15625 50.738281 17.792969 45.148438 17.792969 37.554688 C 17.792969 34.289062 19.183594 31.125 21.550781 28.464844 C 20.773438 25.820312 19.796875 20.429688 21.847656 18.375 C 26.90625 18.375 29.960938 21.65625 30.695312 22.539062 C 33.214844 21.675781 35.984375 21.1875 38.890625 21.1875 C 41.804688 21.1875 44.585938 21.675781 47.109375 22.546875 C 47.835938 21.664062 50.894531 18.375 55.964844 18.375 C 58.023438 20.429688 57.035156 25.84375 56.25 28.484375 C 58.601562 31.140625 59.984375 34.292969 59.984375 37.554688 C 59.984375 45.140625 54.632812 50.730469 43.410156 51.890625 C 46.496094 53.503906 48.75 58.03125 48.75 61.441406 L 48.75 69.132812 C 48.75 69.425781 48.683594 69.636719 48.652344 69.886719 C 61.804688 65.277344 71.25 52.789062 71.25 38.0625 C 71.25 19.425781 56.136719 4.3125 37.5 4.3125 Z M 37.5 4.3125 " fill-opacity="1" fill-rule="nonzero"/></g></svg></a>
            <a href="https://www.linkedin.com/in/lydiawelham/" target="_blank" rel="noopener noreferrer"><svg contentScriptType="text/ecmascript" width="75" zoomAndPan="magnify" contentStyleType="text/css" viewBox="0 0 75 74.999997" height="74.999997" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="clip-0"><path d="M 3.75 3.75 L 71.25 3.75 L 71.25 71.25 L 3.75 71.25 Z M 3.75 3.75 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#clip-0)"><path fill="rgb(85.099792%, 85.099792%, 85.099792%)" d="M 54.28125 3.777344 L 20.664062 3.777344 C 11.351562 3.777344 3.75 11.378906 3.75 20.691406 L 3.75 54.363281 C 3.75 63.621094 11.351562 71.222656 20.664062 71.222656 L 54.335938 71.222656 C 63.648438 71.222656 71.25 63.621094 71.25 54.308594 L 71.25 20.691406 C 71.195312 11.378906 63.59375 3.777344 54.28125 3.777344 Z M 26.230469 58.375 L 16.597656 58.375 L 16.597656 30.542969 L 26.230469 30.542969 Z M 21.359375 26.257812 C 18.632812 26.257812 16.4375 24.0625 16.4375 21.335938 C 16.4375 18.605469 18.632812 16.410156 21.359375 16.410156 C 24.089844 16.410156 26.285156 18.605469 26.285156 21.335938 C 26.230469 24.0625 24.039062 26.257812 21.359375 26.257812 Z M 58.347656 58.375 L 50.320312 58.375 L 50.320312 44.886719 C 50.320312 41.621094 49.890625 37.445312 45.449219 37.445312 C 40.898438 37.445312 40.148438 40.980469 40.148438 44.671875 L 40.148438 58.375 L 32.121094 58.375 L 32.121094 30.542969 L 39.613281 30.542969 L 39.613281 34.289062 L 39.828125 34.289062 C 41.007812 32.148438 43.734375 30.488281 48.019531 30.488281 C 56.851562 30.488281 58.402344 35.574219 58.402344 43.121094 L 58.402344 58.375 Z M 58.347656 58.375 " fill-opacity="1" fill-rule="nonzero"/></g></svg> </a>
            <a href="mailto:lydiaewelham@gmail.com" target="_blank"><svg contentScriptType="text/ecmascript" width="75" zoomAndPan="magnify" contentStyleType="text/css" viewBox="0 0 75 74.999997" height="74.999997" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="clip-0"><path d="M 3.484375 11.335938 L 71.734375 11.335938 L 71.734375 38 L 3.484375 38 Z M 3.484375 11.335938 " clip-rule="nonzero"/></clipPath><clipPath id="clip-1"><path d="M 3.484375 22 L 71.734375 22 L 71.734375 63.835938 L 3.484375 63.835938 Z M 3.484375 22 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#clip-0)"><path fill="rgb(85.099792%, 85.099792%, 85.099792%)" d="M 37.609375 37.152344 L 71.730469 16.675781 L 71.730469 16.585938 C 71.730469 16.242188 71.695312 15.902344 71.628906 15.5625 C 71.5625 15.226562 71.460938 14.898438 71.328125 14.578125 C 71.199219 14.261719 71.035156 13.957031 70.84375 13.671875 C 70.652344 13.382812 70.4375 13.117188 70.191406 12.875 C 69.949219 12.632812 69.683594 12.414062 69.398438 12.222656 C 69.109375 12.03125 68.808594 11.867188 68.488281 11.738281 C 68.171875 11.605469 67.84375 11.503906 67.503906 11.4375 C 67.167969 11.371094 66.824219 11.335938 66.480469 11.335938 L 8.734375 11.335938 C 8.390625 11.335938 8.050781 11.371094 7.710938 11.4375 C 7.371094 11.503906 7.042969 11.605469 6.726562 11.738281 C 6.40625 11.867188 6.105469 12.03125 5.820312 12.222656 C 5.53125 12.414062 5.265625 12.632812 5.023438 12.875 C 4.78125 13.117188 4.5625 13.382812 4.371094 13.671875 C 4.179688 13.957031 4.015625 14.261719 3.886719 14.578125 C 3.753906 14.898438 3.652344 15.226562 3.585938 15.5625 C 3.519531 15.902344 3.484375 16.242188 3.484375 16.585938 L 3.484375 16.675781 Z M 37.609375 37.152344 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#clip-1)"><path fill="rgb(85.099792%, 85.099792%, 85.099792%)" d="M 38.960938 42.460938 C 38.542969 42.710938 38.09375 42.835938 37.609375 42.835938 C 37.121094 42.835938 36.671875 42.710938 36.253906 42.460938 L 3.484375 22.796875 L 3.484375 58.585938 C 3.484375 58.933594 3.519531 59.273438 3.585938 59.613281 C 3.652344 59.949219 3.753906 60.277344 3.886719 60.597656 C 4.015625 60.914062 4.179688 61.21875 4.371094 61.503906 C 4.5625 61.789062 4.78125 62.054688 5.023438 62.300781 C 5.265625 62.542969 5.53125 62.761719 5.820312 62.953125 C 6.105469 63.144531 6.40625 63.304688 6.726562 63.4375 C 7.042969 63.570312 7.371094 63.667969 7.710938 63.738281 C 8.050781 63.804688 8.390625 63.835938 8.734375 63.835938 L 66.480469 63.835938 C 66.824219 63.835938 67.167969 63.804688 67.503906 63.738281 C 67.84375 63.667969 68.171875 63.570312 68.488281 63.4375 C 68.808594 63.304688 69.109375 63.144531 69.398438 62.953125 C 69.683594 62.761719 69.949219 62.542969 70.191406 62.300781 C 70.4375 62.054688 70.652344 61.789062 70.84375 61.503906 C 71.035156 61.21875 71.199219 60.914062 71.328125 60.597656 C 71.460938 60.277344 71.5625 59.949219 71.628906 59.613281 C 71.695312 59.273438 71.730469 58.933594 71.730469 58.585938 L 71.730469 22.796875 Z M 38.960938 42.460938 " fill-opacity="1" fill-rule="nonzero"/></g></svg> </a>
          </div>
        </div>
        
      </div>
      <img className="code-thin" src={codeThin1} />
    
      <Projects />

      <img className="code-thin" src={codeThin2} />

      <Languages />

      <img className="code-thin" src={codeThin3} />

      <Cards />

      <img className="code-thin" src={codeThin4} />
    
    <div className="footer">
      <p>© Lydia Welham 2021</p>
    </div>
    </div>
  );
}

export default App;

/*<img className={isFade ? "code-img-faded" : "code-img"} src={codeImg} onMouseEnter={fadeImage} alt="lines of binary code in white"/>*/
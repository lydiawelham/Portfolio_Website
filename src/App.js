import './App.css'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Cards from './components/Cards'
import Navbar from './components/NavBar'
import email from './email-icon.png'

function App() {

  return (
    <div className="App">
      
      <Navbar />
      
      <Intro />
    
      <Projects />

      <Languages />

      <Cards />
      
      <div id="email">
        <div className="email">
          <h2>Let's talk! </h2>
          <div className="email-container">
            <p>Drop me an email at <a className="email-link" href="mailto:lydiaewelham@gmail.com">lydiaewelham@gmail.com</a></p>
            <a href="mailto:lydiaewelham@gmail.com"><img className='email-icon' src={email} alt=""/></a>
          </div>
        </div>
      </div>
    
      <div className="footer">
        <p>© Lydia Welham 2021</p>
      </div>
    </div>
  );
}

export default App;

/*<img className={isFade ? "code-img-faded" : "code-img"} src={codeImg} onMouseEnter={fadeImage} alt="lines of binary code in white"/>*/
/* code thins: 
<img className="code-thin" src={codeThin1} alt=""/>
<img className="code-thin" src={codeThin2} alt=""/>
<img className="code-thin" src={codeThin3} alt=""/>
<img className="code-thin" src={codeThin4} alt=""/>*/
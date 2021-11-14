import beerMe from './beer-me.gif'
import readability from './readability.png'

const Projects = () => {

    return (
        <div id="projects">
            <h2>my projects</h2>
            
            <div className="project-cards">
                <a className="project-link" href="https://github.com/lydiawelham/Beer_Me_That_Episode" target="_blank" rel="noopener noreferrer"> 
                <div className="project-card">
                    <img className="project-img" src={beerMe} alt="screenshot of Beer Me That Episode homepage with The Office gifs playing"/> 
                    <p className="project-text"><strong>Beer Me That Episode</strong></p>
                    <p className="project-text">The Office (US) meme catalogue</p>
                </div>
                </a>
                <a className="project-link" href="https://github.com/lydiawelham/Reading_Level_Assessor" target="_blank" rel="noopener noreferrer"> 
                <div className="project-card">
                    <img className="project-img" src={readability} alt="screenshot of readability c programme in operation"/> 
                    <p className="project-text"><strong>Readability Assessor</strong></p>
                    <p className="project-text">Test the reading level of your website text</p>
                </div>
                </a>
            </div>
            <p>a full list of my projects can be found on my <a className="link" href="https://github.com/lydiawelham" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
    )
}

export default Projects;
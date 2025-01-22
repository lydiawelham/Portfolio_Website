import intuitive from './intuitive.png'
import proven from './proven.png'
import simple from './simple.png'
import agile from './agile.png'
import expressive from './expressive.png'
import kind from './kind.png'

const Cards = () => {
    
    return (
        <div id="cards">
            <h2>my values</h2>
                <div className="card-container">
                    <div className="value-card">
                        <img className="value-icon" src={intuitive} alt=""/>
                        <h3>INTUITIVE</h3>
                    </div>
                    <div className="value-card">
                        <img className="value-icon" src={proven} alt=""/>
                        <h3>PROVEN</h3>
                    </div>
                    <div className="value-card">
                        <img className="value-icon" src={simple} alt=""/>
                        <h3>SIMPLE</h3>
                    </div>
                    <div className="value-card">
                        <img className="value-icon" src={expressive} alt=""/>
                        <h3>EXPRESSIVE</h3>
                    </div>
                    <div className="value-card">
                        <img className="value-icon" src={kind} alt=""/>
                        <h3>KIND</h3>
                    </div>
                    <div className="value-card">
                        <img className="value-icon" src={agile} alt=""/>
                        <h3>AGILE</h3>
                    </div>
                </div>
        </div>
    ) 
}

export default Cards
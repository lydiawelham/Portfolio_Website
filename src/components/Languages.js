import { useState } from 'react'

const Languages = () => {
    const [compHover, setCompHover] = useState(true);
    const [softHover, setSoftHover] = useState(true);
    const [humanHover, setHumanHover] = useState(true);
    
    const toggleComp = () => {
        setCompHover(!compHover);
    }
    const toggleSoftware = () => {
        setSoftHover(!softHover);
    }
    const toggleHuman = () => {
        setHumanHover(!humanHover);
    }

    return (
        <div id="languages">
            <h2>my languages</h2>
            <p></p>
            <div onMouseEnter={toggleComp} onMouseLeave={toggleComp} className={compHover ? "comp-lang": "comp-lang-hover"}></div>
            <div className="software"></div>
            <div className="human-lang"></div>
        </div>
    )
}

export default Languages;
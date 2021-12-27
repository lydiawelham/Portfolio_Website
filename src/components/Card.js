const Card = () => {

//data entry? - how
// card flip function

return ( 
    <div className="flip-container" className="{ 'flipped': flipped}" onClick={flipCard()}>
        <div className="card-container">
            <div className="card-back">
                <img className="contents" src="https://i.imgur.com/pfr8bB3.png" />
            </div>
            <div className="card-front">
                         
            </div>
        </div>
    </div>
)
}

export default Card
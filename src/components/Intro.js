import profileImg from'./profile-img.png'
import Text from './Text'

const Intro = () => {

return (  
  <div className="intro">
    <img className="profile-img" src={profileImg} alt="Trees in South Parks, Oxford with a view of the dreaming spires" />  
    <Text/>
  </div>

)
}

export default Intro 
/*<div className="intro-text">
      <h2>HELLO YOU</h2>
      <h4>i'm Lydia Welham, <br/>a web developer and <br/>communicative design specialist</h4>
      <p>based in the UK</p>
    </div>*/
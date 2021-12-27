import profileImg from'./profile-img.png'

const Intro = () => {

return (  
  <div className="intro">
    <img className="profile-img" src={profileImg} alt="Trees in South Parks, Oxford with a view of the dreaming spires" />  
    <div className="intro-text">
      <h2>HELLO YOU</h2>
      <h4>i'm Lydia Welham, <br/>a web developer and <br/>communicative design specialist</h4>
      <p>based in the UK</p>
    </div>
  </div>

)
}

export default Intro 
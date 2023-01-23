import img from "../image/img-1.jpg";
import Intro from "./Intro";
const Body = () => {
  return (
    <>
      <div className="bio-body">
        <div className="bio-body-div bio-body-div-1">
          <h2 className="bio-body-div-children">Hi, I am</h2>
          <h1>Malay Chandan</h1>
          <h3>Web Developer</h3>
          <p>You want to make you web app highly scalable and responsive</p>
          <p>I am here to help you with modern stack (MERN)</p>
        </div>

        <div className="bio-body-div">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="div-button">
        <div>
          <p className="value">5 Years</p>
          <p className="key">Experience</p>
        </div>
        <div>
          <p className="value">10+ projects</p>
          <p className="key">Completed</p>
        </div>
        <div>
          <p className="value">support</p>
          <p className="key">Online 24*7</p>
        </div>
      </div>
      <Intro />
    </>
  );
};

export default Body;

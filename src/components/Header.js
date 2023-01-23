import img from "../image/download.png";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    console.log("Malay");
    ononline = () => {
      console.log(true);
    };
  }, []);
  console.log("render");
  return (
    <div className="top-nav">
      <div className="nav-logo">
        <img src={img} alt="logo" />
      </div>
      <div className="nav-options-container">
        <ul className="nav-options">
          <li>
            <h3>Home</h3>
          </li>
          <li>
            <h3>My Intro</h3>
          </li>
          <li>
            <h3>Services</h3>
          </li>
          <li>
            <h3>Testimonial</h3>
          </li>
          <li>
            <h3>Contacts</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

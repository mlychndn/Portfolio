import introimg from "../image/intro.jpg";

const Intro = () => {
  return (
    <div className="My-Intro">
      <div className="My-Intro-Img">
        <img src={introimg} alt="intro-img" />
      </div>
      <div className="intro-data-container">
        <div className="intro-info">
          <h2>My Intro</h2>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
            elit ornare, pretium augue eget, fermentum mauris. Etiam eu nulla
            gravida, aliquam orci ut, scelerisque massa. Fusce odio est, rutrum
            eu tempor sed, congue vel sapien. Morbi cursus dictum nisi vel
            bibendum. Donec scelerisque rutrum elit, quis rutrum ipsum
            ullamcorper ac. Curabitur volutpat libero a tortor sodales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

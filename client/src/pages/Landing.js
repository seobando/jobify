import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby locavore tonx celiac single-origin coffee cloud bread
            pinterest hammock plaid copper mug occupy hell of. Activated
            charcoal lumbersexual PBR&B sustainable mumblecore chambray, sus
            tofu organic vice migas trust fund thundercats. Fanny pack gatekeep
            dreamcatcher leggings activated charcoal, shoreditch skateboard
            pop-up. Affogato cred church-key cardigan jean shorts, ugh man bun
            keytar prism mukbang.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

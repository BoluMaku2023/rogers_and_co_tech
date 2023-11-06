import React, { useEffect } from "react";
import "./Design.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { Fade, Slide } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Design = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>Design</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                We develop tailored, complex web applications and systems in the
                form of applications, online services, apps, intranets and
                extranets.
              </span>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>
      <section className="hero2-wrapper">
        <Fade bottom>
          <div className="arrow-container" onClick={goBack}>
            <div className="arrow-down-pd">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
        </Fade>
        <div className="a-hero-video">
          <img src="./img17.png" alt="Software" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
          <Fade bottom>
            <span>Brand Identity Development</span>
          </Fade>
          <Slide bottom>
            <p>
              We have proven experience in creating unique and memorable brand
              identities that effectively convey a company’s values and goals.
              From logos and colour schemes to typography and imagery, we work
              with clients to develop a visual representation of their brand
              that sets them apart from the competition.
            </p>
            <div className="next-img">
              <img src="./img18.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>User Interface (UI) Design</span>
          </Fade>
          <Slide bottom>
            <p>
              Our UI design services focus on creating intuitive and visually
              appealing interfaces that provide an excellent user experience.
              Our designers take the time to understand your target audience and
              design with their needs and preferences in mind.
            </p>
            <div className="next-img">
              <img src="./img19.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Related Cases</span>
          </Fade>
        </div>
      </section>
      <Fade bottom>
        <section className="case-section">
          <div className="arrow-container">
            <div className="arrow-down">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
          <div className="cases">
            <div className="case-container">
              <div className="case">
                <img src="./case3.png" alt="" />
                <h2>Corporate Website for Managed Data Solutions</h2>
                <h3>MData Solutions</h3>
              </div>
              <div className="case">
                <img src="./case2.png" alt="" />
                <h2>Corporate Website | Web Application</h2>
                <h3>Profitable</h3>
              </div>
              <div className="case">
                <img src="./case4.png" alt="" />
                <h2>File Management System | Corporate Website.</h2>
                <h3>MDocScan</h3>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <section className="houseover">
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Design;
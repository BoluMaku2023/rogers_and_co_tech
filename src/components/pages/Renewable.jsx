import React, { useEffect } from "react";
import "./Product.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { Fade, Slide } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Renewable = () => {
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
            <div className="hero-title-w">
              <h1>Renewable Energy</h1>
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
        <Fade left delay={1000}>
          <div className="arrow-container" onClick={goBack}>
            <div className="arrow-down-pd">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
        </Fade>
        <div className="a-hero-video">
          <img src="./img35.png" alt="Wireless" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
          <Fade bottom>
            <span>Security & Renewable Energy</span>
          </Fade>
          <Slide bottom>
            <p>
              <b>
                (CCTV, Access Control, Smoke Detectors - [fire detection and
                alarm system, fire fighting system e.g fm200] Remote Gate -
                [access control & automatic gare control, Solar Systems)
              </b>{" "}
              At our company, we are at the forefront of providing a
              comprehensive suite of sustainable solutions aimed at shaping a
              safer and more environmentally conscious world. Our diverse range
              of offerings spans across renewable energy services, cutting-edge
              solar systems, advanced CCTV surveillance, access control, smoke
              detectors, fire detection and alarm systems, as well as
              state-of-the-art fire fighting solutions like FM200. We also
              specialize in remote gate solutions that encompass access control
              and automated gate control systems. Our solar energy solutions
              stand as a beacon of clean and efficient power generation,
              enabling homes and businesses to seamlessly transition to
              renewable sources.
            </p>
            <div className="next-img">
              <img src="./img36.png" alt="" />
            </div>
          </Slide>
          <Fade left>
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
                <img src="./img12.png" alt="" />
                <h2>Audiovisual Systems </h2>
                <h3>National Defence Headquarters</h3>
              </div>
              <div className="case">
                <img src="./img10.png" alt="" />
                <h2>Addressable Fire Alarm System </h2>
                <h3>BUA Sugar Refinery (Portharcourt)</h3>
              </div>
              <div className="case">
                <img src="./img7.png" alt="" />
                <h2>IP Video Surveillance</h2>
                <h3>Nycil Limited</h3>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Renewable;

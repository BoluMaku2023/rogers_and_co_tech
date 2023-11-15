import React, { useRef, useEffect } from "react";
import "./Design.css";
import Footer from "../OtherComponents/Footer";
import { Fade, Slide } from "react-reveal";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import { useNavigate } from "react-router-dom";
const SoftwareDev = () => {
  let containerr = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerr, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
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
              <h1>Software Development</h1>
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
      <section className="hero2-wrapper-new">
        <Fade bottom>
          <div className="arrow-container" onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M23 7.21741V38.7826"
                stroke="black"
                stroke-width="2.17284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0869 25.8696L23 38.7826L35.913 25.8696"
                stroke="black"
                stroke-width="2.17284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Fade>
        <div className="a-hero-video">
          <img src="./img22.png" alt="Software" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
          <Fade bottom>
            <span>Web Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img41.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Web App Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img19.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Mobile Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img24.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Front-End Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img25.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Back-End Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img26.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Native iOS/Android Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img27.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Cross-Platform Development</span>
          </Fade>
          <Slide bottom>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img28.png" alt="" />
            </div>
          </Slide>
          <Fade bottom>
            <span>Related Cases</span>
          </Fade>
        </div>
      </section>
      <Fade bottom>
        <section className="case-section">
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SoftwareDev;

import React, { useEffect, useRef } from "react";
import "./Swish.scss";

import { Fade, Slide } from "react-reveal";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const NDH = () => {
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
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef2, inView: isVisible2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>National Defence Headquarters</h1>
            </div>

            <div className="flexColStart hero-des">
              <div className="about-list">
                <Fade left>
                  <div className="a-list-item">
                    <span>Customer</span>
                    <h2>National Defence Headquarters</h2>
                  </div>
                </Fade>
                <Fade left>
                  <div className="a-list-item">
                    <span>Industry</span>
                    <h2>Automation</h2>
                  </div>
                </Fade>
                <Fade left>
                  <div className="a-list-item">
                    <span>Assignment</span>
                    <h2>Audiovisual Systems</h2>
                  </div>
                </Fade>
                <Fade left>
                  <div className="a-list-item">
                    <span>Website</span>
                    <a href="">nil</a>
                  </div>
                </Fade>
              </div>
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
        <div ref={(el) => (containerr = el)} className="containerr">
          <div className="a-hero-video">
            <img ref={(el) => (image = el)} src="./visual.jpg" alt="NDH" />
          </div>
        </div>
      </section>
      <section className="sw-next-part2">
        <div className="next-div">
          <Fade bottom>
            <span>Installation of Advanced Audiovisual Systems</span>
          </Fade>
          <section className="sw-next-info">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                  <Fade left>
                    <h3>The task</h3>
                  </Fade>
                  <Fade left delay={300}>
                    <div className="line"></div>
                  </Fade>
                </div>

                <div className="label-des">
                  <Fade bottom>
                    <span>
                      The objective presented was to forge a forward-looking and
                      inventive venture specializing in the installation of
                      advanced audiovisual systems. This initiative sought to
                      establish novel industry standards and chart a course
                      towards a future where the harmonious integration of
                      technology, operational efficiency, and unparalleled
                      client gratification would be the hallmark of success.
                    </span>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground">
        <Fade bottom>
          <div className="imagebox__image">
            <img src="./visual3.jpg" alt="Rogers&Co." />
          </div>
        </Fade>
        <div className="sw-foreground-module__square"></div>
      </div>
      <section className="sw-next-part">
        <div className="next-div">
          <Fade bottom>
            <span>A Satisfactory Installation</span>
          </Fade>
          <section className="sw-next-info2">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                  <Fade left>
                    <h3>The solution</h3>
                  </Fade>
                  <Fade left delay={300}>
                    <div className="line"></div>
                  </Fade>
                </div>

                <div className="label-des">
                  <Slide bottom delay={500}>
                    <span>
                      The mission presented before us transcended the ordinary,
                      calling for the creation of a pioneering and
                      forward-looking venture dedicated to the meticulous
                      installation of state-of-the-art Addressable Fire Alarm
                      Systems. At its core, this endeavor was grounded in a
                      resolute ambition to transcend established industry norms
                      and lead the charge into a future characterized by a
                      harmonious confluence of technological ingenuity,
                      operational prowess, and unparalleled client satisfaction.
                    </span>
                    <span>
                      Central to this visionary initiative was the notion of
                      redefining the very essence of what it means to install
                      audiovisual systems. It was an endeavor akin to crafting
                      an intricate symphony, where technology and craftsmanship
                      coalesce to produce an unparalleled masterpiece.
                    </span>
                    <span>
                      In essence, this initiative was a proclamation of our
                      commitment to pioneering a new era in advanced audiovisual
                      system installation.
                    </span>
                  </Slide>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground2">
        <div className="sw-foreground-module__square2"></div>
        <Fade bottom>
          <div className="imagebox__image">
            <img src="./visual2.jpg" alt="MData Solutions" />
          </div>
        </Fade>
      </div>
      <section className="div">
        <div className="img-housing2">
          <Fade bottom>
            <div className="imagebox__image">
              <img src="./visual5.jpg" alt="Rogers&Co." />
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <div className="imagebox__image">
            <img src="./visual4.jpg" alt="Rogers&Co." />
          </div>
        </Fade>

        {/* <div className="img-housing2">
          <Fade bottom>
            <div className="imagebox__image">
              <img src="./yato3.jpeg" alt="Rogers&Co." />
            </div>
          </Fade>
        </div> */}
      </section>
      <section className="see-more-cases">
        <Fade left>
          <div className="case-link-box" onClick={goBack}>
            <h3>See more cases</h3>
            <div className="bto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="10"
                viewBox="0 0 32 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.89798 5.46055L4.34198 7.90555L4.33298 9.31055L0.00798416 4.98555L4.38799 0.605547L4.37798 2.02855L1.89898 4.46055L45.998 4.46055V5.46055L1.89798 5.46055Z"
                  fill="black"
                />
              </svg>

              <h4>Back to the case overview</h4>
            </div>
          </div>
        </Fade>
        <div className="cases cases-c">
          <div className="hover01 column">
            <div className="containing">
              <div ref={myRef} className="box">
                <figure
                  style={{ background: "#7d01d1" }}
                  className={isVisible ? "animated-figure" : "figure"}
                >
                  <img src="./img12.png" />
                </figure>
              </div>
              <Fade bottom>
                <h2>Digitization of company records.</h2>
                <h3>Ministry of Aviation</h3>
              </Fade>
            </div>
            <div className="containing">
              <div ref={myRef2} className="box">
                <figure
                  style={{ background: "#84969A" }}
                  className={isVisible2 ? "animated-figure" : "figure"}
                >
                  <img src="./img13.png" />
                </figure>
              </div>
              <Fade bottom>
                <h2>Branding Identitiy Develepment & Design.</h2>
                <h3>Yato</h3>
              </Fade>
            </div>
            <div className="containing">
              <div ref={myRef2} className="box">
                <figure
                  style={{ background: "#84969A" }}
                  className={isVisible2 ? "animated-figure" : "figure"}
                >
                  <img src="./img4.png" />
                </figure>
              </div>
              <Fade bottom>
                <h2>Solar Inverter Systems </h2>
                <h3>Afijio PHC</h3>
              </Fade>
            </div>
          </div>
        </div>
        <section className="last-last">
          <div className="last-links">
            <Fade left>
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <div className="link-box">
                  <div className="line-link"></div>
                  <h3>Read more about our Software development here</h3>
                  <img src="./arrow-forward.png" alt="" />
                </div>
              </Link>
            </Fade>
          </div>
        </section>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default NDH;

import React, { useEffect } from "react";
import "../Design.css";
import "./Swish.scss";

import Footer from "../../OtherComponents/Footer";
import { Fade, Slide } from "react-reveal";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";

const Swish = () => {
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
              <h1>Swish</h1>
            </div>

            <div className="flexColStart hero-des">
              <div className="about-list">
                <Fade left>
                  <div className="a-list-item">
                    <span>Customer</span>
                    <h2>Swish</h2>
                  </div>
                </Fade>
                <Fade left>
                  <div className="a-list-item">
                    <span>Industry</span>
                    <h2>Web Application</h2>
                  </div>
                </Fade>
                <Fade left>
                  <div className="a-list-item">
                    <span>Assignment</span>
                    <h2>Brand Identity Development & Design</h2>
                  </div>
                </Fade>
                <Fade left>
                  <div className="a-list-item">
                    <span>Website</span>
                    <h2>swish.com</h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>
      <section className="hero2-wrapper">
        <Fade bottom>
          <div className="arrow-container">
            <div className="arrow-down-pd">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
        </Fade>
        <div className="hero-image-sw">
          <img src="./img42.png" alt="Software" />
        </div>
      </section>
      <section className="sw-next-part2">
        <div className="next-div">
          <Fade bottom>
            <span>
              Brand Identity Development & Design | Corporate Communications{" "}
            </span>
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
                  <Fade left delay={500}>
                    <span>
                      The task presented was nothing short of creating a
                      forward-thinking, innovative delivery company that would
                      set new industry benchmarks and lead the way into a future
                      where speed, efficiency, and unparalleled customer
                      satisfaction would seamlessly converge.
                    </span>
                    <span>
                      One that would redefine the very essence of logistics and
                      customer service.
                    </span>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground">
        <div className="imagebox__image">
          <img src="./img43.png" alt="Rogers&Co." />
        </div>
        <div className="sw-foreground-module__square"></div>
      </div>
      <section className="sw-next-part">
        <div className="next-div">
          <Fade bottom>
            <span>A quick and satisfactory solution</span>
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
                      In the pursuit of this lofty objective, every facet of the
                      envisioned company was meticulously designed and
                      strategically orchestrated. The emphasis on rapid delivery
                      wasn't just a mere facet; it was the cornerstone upon
                      which the entire operation was erected. The founders
                      recognized that in a world where time was an increasingly
                      precious commodity, the ability to swiftly and reliably
                      transport goods from one point to another would be the
                      defining factor that would set them apart from the
                      competition.
                    </span>
                    <span>
                      Customer satisfaction, another paramount pillar of this
                      venture, was carefully woven into the fabric of every
                      decision and action. The founders understood that the
                      success of their enterprise hinged upon not only
                      delivering packages promptly but also creating an
                      unparalleled experience for each and every customer. Every
                      aspect of the company's operations, from the user-friendly
                      digital interface that facilitated seamless ordering, to
                      the well-trained and courteous delivery personnel who
                      would personally hand over the packages, was geared
                      towards ensuring that each customer's interaction was
                      nothing short of exceptional.
                    </span>
                    <span>
                      It was through this bold vision and rapid solutions that
                      the foundation was laid for a company that would
                      ultimately revolutionize the way goods are transported and
                      elevate the standard for customer satisfaction.
                    </span>
                  </Slide>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground2">
        <Fade bottom>
          <div className="sw-foreground-module__square2"></div>
          <div className="imagebox__image">
            <img src="./img44.png" alt="Rogers&Co." />
          </div>
        </Fade>
      </div>
      <section className="div">
        <Fade bottom>
          <div className="imagebox__image">
            <img src="./img46.png" alt="Rogers&Co." />
          </div>
        </Fade>
        <Fade bottom>
          <div className="img-housing">
            <div className="imagebox__image">
              <img src="./img47.png" alt="Rogers&Co." />
            </div>
          </div>
        </Fade>
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
                  <img src="./case2.png" />
                </figure>
              </div>
              <Fade bottom>
                <h2>Corporate Website | Web Application</h2>
                <h3>Profitable</h3>
              </Fade>
            </div>
            <div className="containing">
              <div ref={myRef2} className="box">
                <figure
                  style={{ background: "#84969A" }}
                  className={isVisible2 ? "animated-figure" : "figure"}
                >
                  <img src="./case3.png" />
                </figure>
              </div>
              <Fade bottom>
                <h2>Corporate website</h2>
                <h3>MData Solutions</h3>
              </Fade>
            </div>
            <div className="containing">
              <div ref={myRef2} className="box">
                <figure
                  style={{ background: "#84969A" }}
                  className={isVisible2 ? "animated-figure" : "figure"}
                >
                  <img src="./case4.png" />
                </figure>
              </div>
              <Fade bottom>
                <h2>File Management System | Corporate Website.</h2>
                <h3>MDocScan</h3>
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

export default Swish;
import React, { useEffect } from "react";
import "./Product.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { Fade, Slide } from "react-reveal";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
              <h1>Product Development</h1>
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
        <Fade left>
          <div className="arrow-container" onClick={goBack}>
            <div className="arrow-down-pd">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
        </Fade>
        <div className="a-hero-video">
          <img src="./img20.png" alt="Software" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
          <Fade bottom>
            <span>UX Design</span>
          </Fade>
          <Slide bottom>
            <p>
              Our UX design process starts with thorough research to understand
              user behaviour and requirements. We then use that information to
              create wireframes, prototypes, and user flows to ensure that your
              product is both functional and enjoyable to use{" "}
            </p>
          </Slide>
          <div ref={myRef} className="box">
            <div
              style={{ background: "#6ab3a6" }}
              className={isVisible ? "animated-img" : "next-img"}
            >
              <img src="./img21.png" alt="" />
            </div>
          </div>

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
                <img src="./case1.png" alt="" />
                <h2>Brand Identity & Development & Design | Web Application</h2>
                <h3>Swish</h3>
              </div>
              <div className="case">
                <img src="./case2.png" alt="" />
                <h2>Corporate Website | Web Application</h2>
                <h3>Profitable</h3>
              </div>
              <div className="case">
                <img src="./case3.png" alt="" />
                <h2>Corporate website</h2>
                <h3>MData Solutions</h3>
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

export default Product;

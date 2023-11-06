import React, { useEffect } from "react";
import "./Product.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { Fade, Slide } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Wireless = () => {
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
        <div className="hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title-w">
              <h1>Wireless LAN Distribution Network</h1>
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
          <img src="./img29.png" alt="Wireless" />
        </div>
      </section>
      <section className="flexCenter paddings next-part">
        <div className="next-div">
          <Fade bottom>
            <span>Wireless LAN Distribution Network</span>
          </Fade>
          <Slide bottom>
            <p>
              In today’s interconnected world, a robust and reliable wireless
              network is essential for seamless connectivity. Our Wireless LAN
              Distribution Network solutions offer high-speed wireless
              connectivity throughout your premises, ensuring reliable internet
              access and efficient data transmission. Whether you require a
              wireless network for your office, hotel, or educational
              institution, we provide scalable and secure solutions that can
              accommodate the growing demands of your business and support a
              wide range of devices and applications.
            </p>
            <div className="next-img">
              <img src="./img30.png" alt="" />
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

export default Wireless;
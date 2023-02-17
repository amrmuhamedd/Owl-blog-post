import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import bgShape1 from "@images/banner/banner-shape-1-1.png";
import bgShape2 from "@images/banner/banner-shape-1-2.png";
import bannerBG from "@images/banner/banner-bg-1.png";
import bannerShape2 from "@images/banner/banner-shape-1-4.png";
import image from "@images/banner/banner-img-1.jpg";

const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <img src={bgShape1} alt="Banner-Shape-1" className="banner-shape-1" />
      <img src={bgShape2} alt="Banner-Shape-2" className="banner-shape-2" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bannerBG})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="banner-one__content">
              <h3>
                We help to
                <br />
                achieve big
                <br />
                goals
              </h3>
              <p>
                Elit labore laboris qui minim aliqua nostrud occaecat tempor
                dolore ad laboris proident ex deserunt. Eiusmod ea ex
                reprehenderit ullamco magna nulla ullamco irure non proident
                dolore est nulla.- <br />
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
              <a href="#" className="thm-btn">
                <span>Discover More</span>
              </a>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="banner-img wow fadeInUp" data-wow-duration="1500ms">
              <div
                className="banner-bg"
                style={{ backgroundImage: `url(${bannerShape2})` }}
              ></div>
              <img src={image} alt="Banner-img"  style={{maxWidth : 368}}/>
              <div className="banner-icon-1">
                <i className="owl-lamp"></i>
              </div>
              <div className="banner-icon-2">
                <i className="owl-linked"></i>
              </div>
              <div className="banner-icon-3">
                <i className="owl-human-resources"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

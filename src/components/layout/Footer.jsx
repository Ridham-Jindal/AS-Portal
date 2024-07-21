"use client";
import React from 'react';
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <Container fluid>
            <Row className="align-items-center">
                <Col sm={6}>
                    <a style={{ color: "#003f87" }} href="/"><img src="../../assets/images/logo.png" alt="Book cabs"  /><h5 style={{fontWeight:"bolder"}}>Anubhav</h5></a>
                </Col>
                <Col sm={6} className="d-flex justify-content-end align-items-center">
                    <div className="social-icon">
                        <a href='https://www.facebook.com/profile.php?id=100090853119233'><img src="../../../assets/images/facebook.png" alt="facebook" /></a>
                        <a href='https://www.linkedin.com/in/nextdrive-india-ab4539271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src="../../../assets/images/linkedin.png" alt="linkedin" /></a>
                        <a href='https://x.com/nextdriveindia?s=09'><img src="../../../assets/images/twitter.png" alt="twitter" /></a>
                        <a href='https://www.instagram.com/nextdriveindia?igsh=MWIzMmZ4cDJiYjdhMQ=='><img src="../../../assets/images/instagram.png" alt="instagram" /></a>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-center">
                    <p style={{fontWeight:"bolder"}}>Copyright @IIT Jammu</p>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
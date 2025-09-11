import React from "react";
import "../styles/about.css";
import Header from "../partials/header";
import aboutImage from '../assets/img/about.jpg';

const About = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className="container">
                <div className="about-text">
                    <div className="title">🧠 About BLOGTECH</div>
                    <div>
                        <p>
                            Welcome to BLOGTECH — your go-to platform for everything Tech. Whether you're a seasoned developer, 
                            an aspiring tech enthusiast, or someone simply curious about the latest in technology, BLOGTECH brings you insightful articles, 
                            in-depth tutorials, and the latest updates from the world of software, hardware, AI, and beyond.
                            <br /><br />
                            Our mission is to build a vibrant community where ideas are shared, knowledge is spread, and innovation is celebrated. 
                            At BLOGTECH, we believe that technology should be accessible, inspiring, and ever-evolving — just like our content.
                            <br /><br />
                            Stay curious. Stay updated. Stay ahead — with BLOGTECH.
                        </p>
                    </div>
                </div>
                <div className="about-image">
                    <img
                        src={aboutImage}
                        alt="About BLOGTECH"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default About;
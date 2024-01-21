import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          My name is golu kumar i am a good softwere developer<br></br> Email-
          golukumarsingh7323@gmail.com
        </div>
        <div className="socialIcons">
          <span>
            {" "}
            <a
              href="https://www.facebook.com/profile.php?id=100029117081200&mibextid=9R9pXO"
              className="icon"
            >
              <FaFacebookF />
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/rathore_1145?igsh=MmVlMjlkMTBhMg=="
              className="icon"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/golu-kumar-87599524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="icon"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

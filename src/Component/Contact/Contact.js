/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from "react";
import myFerret from "../Image/my-ferret.jpg";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="contact">
          <img src={myFerret} />
          <h2>Contact me</h2>
          <p>
            If you are interested in this site or have any questions, please
            click the icon below!!
          </p>
          <SocialIcon url="mailto:orlandu8@gmail.com" />{" "}
          <SocialIcon
            url="https://www.linkedin.com/in/cheyenne-mcmahon/"
            target="_blank"
          />{" "}
          <SocialIcon
            url="https://github.com/Cheyenne-development"
            target="_blank"
          />
        </div>
      </Fragment>
    );
  }
}

export default Contact;

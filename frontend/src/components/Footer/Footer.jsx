import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/Logov1.svg";
import TwitterIcon from "../../assets/twitter-icon.png";
import InstaIcon from "../../assets/insta-icon.png";
import PinterestIcon from "../../assets/pinterest-icon.png";
import YoutubeIcon from "../../assets/youtube-icon.png";
const FooterLinks = [
  {
    id: 0,
    title: "Quick Links",
    links: [
      {
        id: 0,
        link: "Home",
      },
      {
        id: 1,
        link: "About Us",
      },
      {
        id: 2,
        link: "Blog Post",
      },
      {
        id: 3,
        link: "Photo Gallery",
      },
    ],
  },
  {
    id: 1,
    title: "Get In Touch",
    links: [
      {
        id: 0,
        link: "Contact Us",
      },
      {
        id: 1,
        link: "Our Services",
      },
    ],
  },
  {
    id: 2,
    title: "Address",
    links: [
      {
        id: 0,
        link: "Nairobi, Kenya",
      },
    ],
  },
];

const SocialLinks = [
  {
    id: 0,
    icon: TwitterIcon,
  },
  {
    id: 1,
    icon: InstaIcon,
  },
  {
    id: 2,
    icon: PinterestIcon,
  },
  {
    id: 3,
    icon: YoutubeIcon,
  },
];
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="top">
          <div className="cont1">
            {" "}
            <Link to="/">
              <img src={Logo} alt="logo" loading="lazy" className="logo" />
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
          {FooterLinks.map((item) => {
            return (
              <div className="cont2" key={item.id}>
                <p className="title">{item.title}</p>
                <ul>
                  {item.links.map((i) => {
                    return (
                      <Link key={i.id} className="link">
                        {i.link}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="cont3">
            <div className="newsletterContainer">
              <p className="title">Newsletter</p>
              <form action="submit">
                <div className="newsletterInput">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <button className="primaryButton">Subscribe</button>
                </div>
                <label htmlFor="email">
                  Your email is safe with us,we don’t spam.
                </label>
              </form>
            </div>
            <div className="socialLinks">
              <p>Follow Me</p>
              <div className="icons">
                {SocialLinks.map((item) => {
                  return (
                    <Link to="/">
                      <img src={item.icon} alt="" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>&copy; 2023 Ole Kaparo Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

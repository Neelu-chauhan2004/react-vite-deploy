import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import assets from "../../assets/Logo/logo-dark.webp";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];

const HelpLink = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privarcy Policy",
    link: "/#policy",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div>
            <div>
              <a href="#" className="flex items-center gap-8">
                <img
                  className=" sm:text-3xl text-xl font-bold sm:text-left text-justify md-3 flex items-center gap-3"
                  src={assets}
                  alt="Logo"
                />
              </a>
            </div>

            <p className=""></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

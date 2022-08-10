import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/govindraj-ingle-96b3601b8"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/govindrajingle" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.codechef.com/users/govindrajingle" target="_blank">
        <SiCodechef />
      </a>
    </div>
  );
};

export default HeaderSocial;

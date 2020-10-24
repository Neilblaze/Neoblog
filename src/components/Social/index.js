import React from "react";

import GithubIcon from "./../../images/icons/github.svg";
import LinkedInIcon from "./../../images/icons/linkedin.svg";
import FacebookIcon from "./../../images/icons/facebook.svg";
import TwitterIcon from "./../../images/icons/twitter.svg";
import InstagramIcon from "./../../images/icons/instagram.svg";
import SitemapIcon from "./../../images/icons/sitemap.svg";

import './Social.styles.js'

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a
        href="https://www.linkedin.com/in/x3nosiz/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        title="My Linked In">
        <LinkedInIcon aria-hidden={true} />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://github.com/Neilblaze/"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
        title="My Github">
        <GithubIcon aria-hidden={true} />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://facebook.com/Neilzblaze/"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
        title="My Facebook">
        <FacebookIcon aria-hidden={true} />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://twitter.com/Neilzblaze007/"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
        title="My Twitter">
        <TwitterIcon aria-hidden={true} />
      </a>
    </li>
    <li className="social__item">
      <a
        href="https://www.instagram.com/neilz_xd/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
        title="My Instagram">
        <InstagramIcon aria-hidden={true} />
      </a>
    </li>
    <li>
      <a
        href="/sitemap.xml"
        target="_blank"
        rel="noopener noreferrer"
        className="sitemap"
        title="Sitemap">
        <SitemapIcon aria-hidden={true} />
      </a>
    </li>
  </ul>
);

export default Social;

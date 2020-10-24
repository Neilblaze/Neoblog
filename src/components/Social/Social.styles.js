import styled from "styled-components"

export const SocialWrapper = styled.div`
.social {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  z-index: 1;
}
.dark .social {
  --icon-fill: #fff;
}
.light .social {
  --icon-fill: #101626;
}
.social__link {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.social__link svg {
  width: 22px;
  height: 22px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.social__link:hover svg,
.social__link:focus svg {
  fill: #72ba50;
}
@media (prefers-color-scheme: dark) {
  .dark .social {
    --icon-fill: #fff;
  }
}
@media (prefers-color-scheme: light) {
  .light .social {
    --icon-fill: #101626;
  }
}

/* Facebook icon */

.facebook {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.facebook svg {
  width: 22px;
  height: 24px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.facebook:hover svg,
.facebook:focus svg {
  fill: #3c5a99;
}

/* Github icon */

.github {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.github svg {
  width: 25px;
  height: 25px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.github:hover svg,
.github:focus svg {
  fill: #6e5494;
}

/* Twitter icon */

.twitter {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.twitter svg {
  width: 25px;
  height: 25px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.twitter:hover svg,
.twitter:focus svg {
  fill:#1DA1F2;
}

/* Twitter icon */

.linkedin {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.linkedin svg {
  width: 24px;
  height: 24px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.linkedin:hover svg,
.linkedin:focus svg {
  fill:#2867B2;
}

/* Instagram icon */

.instagram {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.instagram svg {
  width: 24px;
  height: 24px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.instagram:hover svg,
.instagram:focus svg {
  fill:#F77737;
}

/* SITEMAP */

.sitemap {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.sitemap svg {
  width: 24px;
  height: 24px;
  fill: var(--icon-fill);
  transition: var(--base-transition);
}

.sitemap:hover svg,
.sitemap:focus svg {
  fill:#fc6b03;
}


@media screen and (min-width: 1000px) {
  .sitemap {
    display: flex;
    position: absolute;
    padding: 10px;
    right: 0px;
  }
}
`
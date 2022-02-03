"use strict";

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
document.documentElement.classList.toggle("is-safari", isSafari);

import anime from "animejs/lib/anime.es.js";

import { $ } from "./helpers/dom.js";

import Modal from "./Modal.js";

Modal.initAll();

// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap.set(".main", { position: "fixed", background: "#fff", width: "100%", maxWidth: "1200px", height: "100%", top: 0, left: "50%", x: "-50%" });
// gsap.set(".scrollDist", { width: "100%", height: "200%" });
gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".main-screen", start: "top top", end: "bottom 50%", scrub: 1 } })
   .fromTo(".main-screen__bg", { y: "0%", autoAlpha: 1 }, { y: "20%", autoAlpha: 0 }, 0)
   .fromTo(".main-screen__coins", { y: "0%" }, { y: "200%" }, 0)
   .to(".main-screen__pig", { rotation: 111, x: "-50%", y: "-30%" }, 0)
   .from(".stats-screen__texts", { scale: 0.5, y: "65vh" }, 0)
   .fromTo(".stats-screen__bg", { autoAlpha: 0, scale: 2.5 }, { autoAlpha: 1, scale: 2.2 }, 0)
   .fromTo(".main-bg", { autoAlpha: 0 }, { autoAlpha: 1 }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "top center", end: "33.33% center", scrub: 1 } })
   .to(".stats-screen__bg", { scale: 2 }, 0)
   .fromTo(".stats-screen__title", { scale: 2 }, { scale: 1, color: "transparent", "--stroke-color": "#D467D9" }, 0)
   .fromTo(".stats-screen__subtitle", { scale: 2, y: "65vh" }, { scale: 1.7, y: "0" }, 0);
gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "33.33% center", end: "66.66% center", scrub: 1 } })
   .fromTo(".stats-screen__bg", { scale: 2 }, { scale: 1.8 }, 0)
   .to(".stats-screen__subtitle", { scale: 1 }, 0);
gsap
   .timeline({ scrollTrigger: { markers: true, trigger: ".stats-screen", start: "66.66% center", end: "100% center", scrub: 1 } })
   .fromTo(".stats-screen__bg", { scale: 1.8 }, { scale: 1.6 }, 0)
   .fromTo(".stats-screen__subtitle-2", { scale: 1.2, y: "65vh" }, { scale: 1, y: "0" }, 0);

gsap
   .timeline({ scrollTrigger: { markers: true, trigger: ".under-stats-screen", start: "top center", end: "bottom bottom", scrub: 1 } })
   .fromTo(".stats-screen__bg", { scale: 1.6 }, { scale: 1 }, 0)
   .to(".stats-screen__texts", { scale: 0.9, y: "-65%" }, 0)
   .fromTo(".main-bg", { backgroundPositionY: "50%" }, { backgroundPositionY: "70%" }, 0)
   .fromTo(".under-stats-screen__pig", { y: "100%" }, { y: "-15%", ease: "back.out(1.2)" }, 0);

// .fromTo(".stats-screen__subtitle-2", { scale: 1.2, y: "65vh" }, { scale: 1, y: "0" }, 0);

// .to(".main-screen__bg", { y: "20%", autoAlpha: 0 }, 0)
// .to(".main-screen__coins", { y: "200%" }, 0)
// .to(".main-screen__pig", { rotation: 111, x: "-50%", y: "-30%" }, 0)
// .fromTo(".stats-screen__bg", { autoAlpha: 0, scale: 2.5 }, { autoAlpha: 1, scale: 2.2 }, 0);

// .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
// .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
// .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
// .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
// .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
// .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
// .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

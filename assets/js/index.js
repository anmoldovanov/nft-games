"use strict";

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
document.documentElement.classList.toggle("is-safari", isSafari);

import Modal from "./Modal.js";

Modal.initAll();

// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".main-screen__text span, .main-screen__text-author", {
   x: "120%",
   stagger: 0.05, // 0.1 seconds between when each ".box" element starts animating
   duration: 2.5,
   ease: "back.out(1.02)",
});
gsap.from(".main-screen__pig ", {
   x: "-70%",
   y: "-10%",
   rotation: 213,
   duration: 2.5,
   ease: "back.out(1.05)",
});
gsap.from(".main-screen__coins ", {
   scale: 0.5,
   x: "-50%",
   duration: 2.5,
   ease: "back.out(1.05)",
});

// transform: translate(-70%, -10%) rotate(213deg);

// gsap.set(".main", { position: "fixed", background: "#fff", width: "100%", maxWidth: "1200px", height: "100%", top: 0, left: "50%", x: "-50%" });
// gsap.set(".scrollDist", { width: "100%", height: "200%" });

// .fromTo(".main-screen__bg", { y: "0%", autoAlpha: 1 }, { y: "20%", autoAlpha: 0 }, 0)

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".main-screen", start: "top top", end: "bottom 50%", scrub: 0.75 } })
   .fromTo(".main-screen__bg", { y: "0%", autoAlpha: 1 }, { y: "20%", autoAlpha: 0 }, 0)
   .fromTo(".main-screen__coins", { y: "0%" }, { y: "250%" }, 0)
   .set(".main-screen__coins", { autoAlpha: 0 })
   .to(".main-screen__ills", { y: "-100%" }, 0)
   .to(".main-screen__pig", { rotation: 111, x: "-50%", y: "-30%" }, 0)
   .to(".main-screen__text", { rotation: 0, y: "-30%" }, 0)

   .fromTo(".stats-screen__texts", { scale: 0.5, y: "65vh" }, { scale: 1, y: "0" }, 0)
   .fromTo(".stats-screen__bg", { autoAlpha: 0, scale: 2.5 }, { autoAlpha: 1, scale: 2.2 }, 0)
   .fromTo(".main-bg", { autoAlpha: 0 }, { autoAlpha: 1 }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "top center", end: "50% center", scrub: 0.75 } })
   .fromTo(".stats-screen__bg", { scale: 2.2 }, { scale: 1.8 }, 0)
   .fromTo(".stats-screen__title", { scale: 2 }, { scale: 1, color: "transparent", "--stroke-color": "#D467D9" }, 0)
   .fromTo(".stats-screen__subtitle", { scale: 2, y: "65vh" }, { scale: 1.7, y: "0" }, 0);
gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "50% center", end: "100% center", scrub: 0.75 } })
   .fromTo(".stats-screen__bg", { scale: 1.8 }, { scale: 1.4 }, 0)
   .fromTo(".stats-screen__subtitle", { scale: 1.7 }, { scale: 1 }, 0)
   .fromTo(".stats-screen__subtitle-2", { scale: 1.2, y: "65vh" }, { scale: 1, y: "0" }, 0);
// gsap
//    .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "66.666% center", end: "100% center", scrub: 0.75 } })
//    .fromTo(".stats-screen__bg", { scale: 1.8 }, { scale: 1.6 }, 0)

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".under-stats-screen", start: "top center", end: "bottom bottom", scrub: 0.75 } })
   .fromTo(".stats-screen__bg", { scale: 1.4 }, { scale: 1 }, 0)
   .fromTo(".stats-screen__texts", { scale: 1, y: "0" }, { scale: 0.9, y: "-65%" }, 0)
   .fromTo(".main-bg", { backgroundPositionY: "50%" }, { backgroundPositionY: "70%" }, 0)
   .fromTo(".under-stats-screen__pig", { y: "100%" }, { y: "-18%", ease: "back.out(1.1)" }, 0)
   .fromTo(".under-stats-screen__coins", { y: "120%" }, { y: "-18%", ease: "back.out(1.1)" }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".pigs-screen", start: "top center", end: "bottom bottom", scrub: 0.75 } })
   .fromTo(".under-stats-screen__coins, .under-stats-screen__pig, .stats-screen__bg, .stats-screen__texts", { x: "0vw" }, { x: "-100vw" }, 0)
   .fromTo(".main-bg", { backgroundPositionX: "0%" }, { backgroundPositionX: "-100%" }, 0)
   .fromTo(".stats-screen__texts > *", { x: "0%" }, { x: "-25%" }, 0)
   .fromTo(".pigs-screen__content", { x: "100vw" }, { x: "0vw" }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".how-it-works", start: "top center", end: "bottom bottom", scrub: 0.75 } })
   .fromTo(".pigs-screen__content", { x: "0vw" }, { x: "-100vw" }, 0)
   .fromTo(".how-it-works__content", { x: "100vw" }, { x: "0vw" }, 0)
   .fromTo(".pigs-screen__ill", { scale: 1 }, { scale: 0.7 }, 0);

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
gsap.to(".stats-screen__texts", { duration: 0, scale: 0.5, y: "65vh" });
gsap.to(".pigs-screen__content, .how-it-works__content", { duration: 0, x: "100vw" });

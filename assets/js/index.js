"use strict";

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
document.documentElement.classList.toggle("is-safari", isSafari);

import Modal from "./Modal.js";
Modal.initAll();

import Tablist from "./Tablist.js";
Tablist.initAll();

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
   .timeline({ scrollTrigger: { trigger: ".main-screen", start: "top top", end: "bottom bottom", endTrigger: ".under-stats-screen", scrub: 0.5 } })
   .fromTo(".stats-screen__bg", { scale: 2.5 }, { scale: 1 }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".main-screen", start: "top top", end: "bottom 50%", scrub: 0.5 } })
   .fromTo(".main-screen__bg", { y: "0%", autoAlpha: 1 }, { y: "20%", autoAlpha: 0 }, 0)
   .fromTo(".main-screen__coins", { y: "0%" }, { y: "250%" }, 0)
   .set(".main-screen__coins", { autoAlpha: 0 })
   .to(".main-screen__ills", { y: "-100%" }, 0)
   .to(".main-screen__pig", { rotation: 111, x: "-50%", y: "-30%" }, 0)
   .to(".main-screen__text", { rotation: 0, y: "-30%" }, 0)
   .fromTo(".stats-screen__texts", { scale: 0.5, y: "65vh" }, { scale: 1, y: "0" }, 0)
   .fromTo(".stats-screen__bg", { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
   .fromTo(".main-bg", { autoAlpha: 0 }, { autoAlpha: 1 }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "top center", end: "50% center", scrub: 0.5 } })
   // .fromTo(".stats-screen__bg", { scale: 2.2 }, { scale: 1.8 }, 0)
   .fromTo(".stats-screen__title", { scale: 2 }, { scale: 1, color: "transparent", "--stroke-color": "#D467D9" }, 0)
   .fromTo(".stats-screen__subtitle", { scale: 2, y: "65vh" }, { scale: 1.7, y: "0" }, 0);
gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".stats-screen", start: "50% center", end: "100% center", scrub: 0.5 } })
   // .fromTo(".stats-screen__bg", { scale: 1.8 }, { scale: 1.4 }, 0)
   .fromTo(".stats-screen__subtitle", { scale: 1.7 }, { scale: 1 }, 0)
   .fromTo(".stats-screen__subtitle-2", { scale: 1.2, y: "65vh" }, { scale: 1, y: "0" }, 0);

let sections = gsap.utils.toArray(".hor-screens > *");

let scrollTween = gsap.to(sections, {
   xPercent: -100 * (sections.length - 1),
   ease: "none", // <-- IMPORTANT!
   scrollTrigger: {
      trigger: ".hor-screens",
      pin: true,
      scrub: 0.5,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=" + window.innerWidth * 2,
   },
});

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".under-stats-screen", start: "top center", end: "bottom bottom", scrub: 0 } })
   // .fromTo(".stats-screen__bg", { scale: 1.4 }, { scale: 1, ease: "none" }, 0)
   .fromTo(".stats-screen__texts", { scale: 1, y: "0" }, { scale: 0.9, y: "-65%", ease: "none" }, 0)
   .fromTo(".main-bg", { backgroundPositionY: "50%" }, { backgroundPositionY: "70%" }, 0)
   .fromTo(".under-stats-screen__pig", { y: "0vh" }, { y: "-12vh", ease: "back.out(1.1)" }, 0)
   .fromTo(".under-stats-screen__coins, .btn-arrow", { y: "0vh" }, { y: "-12vh", ease: "back.out(1.1)" }, 0);

gsap.timeline({ scrollTrigger: { markers: false, trigger: ".hor-screens", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } });

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".pigs-screen", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
   .fromTo(".stats-screen__bg", { x: "0%" }, { x: "-100%", ease: "none" }, 0)
   .fromTo(".main-bg", { backgroundPositionX: "0%" }, { backgroundPositionX: "-100%", ease: "none" }, 0)
   .fromTo(".stats-screen__texts > *", { x: "0%" }, { x: "-120%", ease: "none" }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".how-it-works", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
   .fromTo(".pigs-screen__ill", { scale: 1 }, { scale: 0.7, ease: "none" }, 0);

gsap
   .timeline({ scrollTrigger: { markers: false, trigger: ".schedule", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
   .fromTo(".schedule__title, .schedule-table", { x: "-50vw", autoAlpha: 0 }, { x: "0vw", autoAlpha: 1, ease: "none" }, 0)
   .fromTo(".schedule-pigs", { x: "-15rem" }, { x: "50%", ease: "none" }, 0)
   .fromTo(
      ".schedule-pigs i",
      {
         scale: 1,
         x: 0,
         opacity: (i) => (i == 0 ? 1 : 0),
      },
      {
         scale: 0.25,
         ease: "none",
         opacity: 1,
         x: (i) => i * 13 + "rem",
      },
      0
   );

// .fromTo(".pigs-screen__content", { x: "100vw" }, { x: "0vw" }, 0);

// gsap.set(".box-1, .box-2", { y: 100 });
// ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

// red section
// gsap.to(".box-1", {
//    y: -130,
//    duration: 2,
//    ease: "elastic",
//    scrollTrigger: {
//       trigger: ".box-1",
//       containerAnimation: scrollTween,
//       start: "left center",
//       toggleActions: "play none none reset",
//       id: "1",
//    },
// });

// // gray section
// gsap.to(".box-2", {
//    y: -120,
//    backgroundColor: "#1e90ff",
//    ease: "none",
//    scrollTrigger: {
//       trigger: ".box-2",
//       containerAnimation: scrollTween,
//       start: "center 80%",
//       end: "center 20%",
//       scrub: true,
//       id: "2",
//    },
// });

// purple section
// ScrollTrigger.create({
//    trigger: ".box-3",
//    containerAnimation: scrollTween,
//    toggleClass: "active",
//    start: "center 60%",
//    id: "3",
// });

// green section
// ScrollTrigger.create({
//    trigger: ".green",
//    containerAnimation: scrollTween,
//    start: "center 65%",
//    end: "center 51%",
//    onEnter: () => console.log("enter"),
//    onLeave: () => console.log("leave"),
//    onEnterBack: () => console.log("enterBack"),
//    onLeaveBack: () => console.log("leaveBack"),
//    onToggle: (self) => console.log("active", self.isActive),
//    id: "4",
// });

// only show the relevant section's markers at any given time
// gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", { autoAlpha: 0 });
// ["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
//    ScrollTrigger.create({
//       trigger: "." + triggerClass,
//       containerAnimation: scrollTween,
//       start: "left 30%",
//       end: i === 3 ? "right right" : "right 30%",
//       markers: false,
//       onToggle: (self) => gsap.to(".marker-" + (i + 1), { duration: 0.25, autoAlpha: self.isActive ? 1 : 0 }),
//    });
// });

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

// gsap
//    .timeline({ scrollTrigger: { markers: false, trigger: ".schedule", start: "top center", end: "bottom bottom", scrub: 0.5 } })
//    .fromTo(".how-it-works__content", { x: "0vw" }, { x: "-100vw" }, 0)
//    .fromTo(".pigs-screen__content", { x: "-100vw" }, { x: "-200vw" }, 0)
//    .fromTo(".schedule__content", { x: "100vw" }, { x: "0vw" }, 0);

// .fromTo(".stats-screen__subtitle-2", { scale: 1.2, y: "65vh" }, { scale: 1, y: "0" }, 0);

// .to(".main-screen__bg", { y: "20%", autoAlpha: 0 }, 0)
// .to(".main-screen__coins", { y: "200%" }, 0)
// .to(".main-screen__pig", { rotation: 111, x: "-50%", y: "-30%" }, 0)
// .fromTo(".stats-screen__bg", { autoAlpha: 0, scale: 2.5 }, { autoAlpha: 1, scale: 2.2 }, 0);

gsap.to(".stats-screen__texts", { duration: 0, scale: 0.5, y: "65vh" });

let scheduleContent = document.querySelector(".schedule__content");
document.documentElement.style.setProperty("--schedule-height", scheduleContent.offsetHeight + "px");

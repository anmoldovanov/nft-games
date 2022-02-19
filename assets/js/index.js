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

function initGsap() {
   let scheduleContent = document.querySelector(".schedule__content");
   document.documentElement.style.setProperty("--schedule-height", scheduleContent.offsetHeight + "px");

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
      .timeline({ scrollTrigger: { markers: false, trigger: ".main-screen", endTrigger: ".stats-screen", start: "top center", end: "bottom bottom", scrub: 0, pinSpacing: true } })
      .fromTo(".main-bg", { backgroundPositionY: "50%" }, { backgroundPositionY: "70%" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".under-stats-screen", start: "top center", end: "bottom bottom", scrub: 0, pinSpacing: true } })
      // .fromTo(".stats-screen__bg", { scale: 1.4 }, { scale: 1, ease: "none" }, 0)
      .fromTo(".stats-screen__texts", { scale: 1, y: "0" }, { scale: 0.9, y: "-65%", ease: "none" }, 0)

      .fromTo(".under-stats-screen__pig", { y: "0vh" }, { y: "-12vh", ease: "back.out(1.1)" }, 0)
      .fromTo(".under-stats-screen__coins, .btn-arrow", { y: "0vh" }, { y: "-12vh", ease: "back.out(1.1)" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".pigs-screen", endTrigger: ".schedule", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
      .fromTo(".main-bg", { backgroundPositionX: "0%" }, { backgroundPositionX: "150%", ease: "none" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".pigs-screen", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
      .fromTo(".stats-screen__bg", { x: "0%" }, { x: "-100%", ease: "none" }, 0)

      .fromTo(".stats-screen__texts > *", { x: "0%" }, { x: "-120%", ease: "none" }, 0)
      .fromTo(".pigs-list__item:nth-child(1) .pigs-list__ill", { rotate: 0 }, { rotate: 69, ease: "none" }, 0)
      .fromTo(".pigs-list__item:nth-child(2) .pigs-list__ill", { rotate: -115 }, { rotate: -47, ease: "none" }, 0)
      .fromTo(".pigs-list__item:nth-child(3) .pigs-list__ill", { rotate: -82 }, { rotate: -22, ease: "none" }, 0)

      .fromTo(".under-stats-screen__coins i:nth-child(4)", { rotate: 57 }, { rotate: 21, ease: "none" }, 0)
      .fromTo(".under-stats-screen__coins i:nth-child(6)", { rotate: -36, scale: 1, x: 0, y: 0 }, { rotate: -106, scale: 0.55, x: "-30rem", y: "-10rem", ease: "none" }, 0)
      .fromTo(".under-stats-screen__coins i:nth-child(7)", { rotate: -34, scale: 1, x: 0 }, { rotate: 44, scale: 0.71, x: "-20rem", ease: "none" }, 0)
      .fromTo(".under-stats-screen__coins i:nth-child(8)", { rotate: -34 }, { rotate: -3, ease: "none" }, 0)
      .fromTo(".under-stats-screen__coins i:nth-child(3)", { x: 0, y: 0 }, { x: "-4rem", y: "-7rem", ease: "none" }, 0)

      .fromTo(".pigs-screen__coins", { x: 0, y: 0 }, { x: "-18%", y: "0", ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(1)", { y: 0, rotate: -107 }, { y: "3rem", rotate: -144, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(2)", { y: 0, rotate: -53 }, { y: "22rem", rotate: -94, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(3)", { y: 0, rotate: 44 }, { y: "-15rem", rotate: 84, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(5)", { y: 0, rotate: 62 }, { y: "15rem", rotate: 14, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(7)", { rotate: 44 }, { rotate: 84, ease: "none" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".how-it-works", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
      .fromTo(".pigs-screen__ill", { scale: 1 }, { scale: 0.7, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins", { x: "-18%", y: 0 }, { x: "-40%", y: "0", ease: "none" }, 0)
      .fromTo(".pigs-list__item:nth-child(1) .pigs-list__ill", { rotate: 69 }, { rotate: 99, ease: "none" }, 0)
      .fromTo(".pigs-list__item:nth-child(2) .pigs-list__ill", { rotate: -47 }, { rotate: -17, ease: "none" }, 0)
      .fromTo(".pigs-list__item:nth-child(3) .pigs-list__ill", { rotate: -22 }, { rotate: 12, ease: "none" }, 0)

      .fromTo(".pigs-screen__coins i:nth-child(1)", { y: "3rem", rotate: -144 }, { y: "6rem", rotate: -187, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(2)", { y: "22rem", rotate: -94 }, { y: "44rem", rotate: -133, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(3)", { y: "-15rem", rotate: 84 }, { y: "-30rem", rotate: 124, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(5)", { y: "15rem", rotate: 14 }, { y: "30rem", rotate: 82, ease: "none" }, 0)
      .fromTo(".pigs-screen__coins i:nth-child(7)", { rotate: 84 }, { rotate: 124, ease: "none" }, 0)
      .fromTo(".how-it-works__photo img", { scale: 0.2, x: "-50vw", y: "-50vh", autoAlpha: 0 }, { scale: 1, x: 0, y: 0, autoAlpha: 1, ease: "none" }, 0)
      .fromTo(".how-it-works__coins", { scale: 0.3, x: "-40vw", y: "-40vh", autoAlpha: 0 }, { scale: 1, x: 0, y: 0, autoAlpha: 1, ease: "none" }, 0);

   let windowWidth = window.innerWidth;
   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".schedule", containerAnimation: scrollTween, start: "left right", end: "right right", scrub: 0 } })
      .fromTo(".schedule__title, .schedule-table", { x: "-50vw", autoAlpha: 0 }, { x: "0vw", autoAlpha: 1, ease: "none" }, 0)
      .fromTo(".schedule-pigs", { x: "-15rem" }, { x: "0", ease: "none" }, 0)
      .fromTo(
         ".schedule-pigs i",
         {
            scale: 1,
            x: 0,
            rotate: 0,
            opacity: (i) => (i == 0 ? 1 : 0),
         },
         {
            scale: 0.4,
            ease: "none",
            opacity: 1,
            rotate: 17,
            x: (i) => windowWidth / 2 - 980 / 2 + i * 130 - 72 / 2 + "px",
         },
         0
      );

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".can-you-sell", start: "top 100%", end: "bottom bottom", scrub: 0.5 } })
      .to(".can-you-sell__ill-coins", { x: "-80%", y: "-30%", scale: 1.1 }, 0)
      .to(".can-you-sell__ill-coins :nth-child(1)", { x: "11rem", y: "8rem" }, 0)
      .to(".can-you-sell__ill-coins :nth-child(2)", { x: "28rem", y: "8rem" }, 0)
      .to(".can-you-sell__ill-coins :nth-child(3)", { x: "19rem" }, 0)
      .to(".can-you-sell__ill-coins :nth-child(4)", { x: "22.8rem", y: "3.6rem" }, 0)
      .to(".can-you-sell__ill-coins :nth-child(5)", { x: "30rem", y: "16rem" }, 0)
      .to(".can-you-sell__ill-coins :nth-child(6)", { x: "5rem", y: "10rem", rotate: 56, scale: 2 }, 0)
      .from(".can-you-sell__ill-main-top", { y: "-7rem" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".can-you-sell", start: `0%-=${scheduleContent.offsetHeight}px top`, endTrigger: ".no-matter", end: "bottom top", scrub: 0 } })
      .fromTo(".main-bg", { y: "0%" }, { y: "-100vw" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".can-you-sell", start: `0%-=${scheduleContent.offsetHeight}px top`, end: "bottom bottom", scrub: 0 } })
      .fromTo(".schedule-pigs i", { y: 0 }, { y: "-16rem", stagger: 0.03 }, 0)
      .fromTo(".schedule__title", { y: 0 }, { y: "-16rem" }, 0),
      gsap
         .timeline({ scrollTrigger: { markers: false, trigger: ".can-you-sell", start: "top 50%", end: "180% 100%", scrub: 0.5 } })
         .to(".can-you-sell__coins", { y: "13rem" }, 0)
         .to(".can-you-sell__coins :nth-child(1)", { rotate: -8, y: "2rem", x: "-7rem" }, 0)
         .to(".can-you-sell__coins :nth-child(2)", { rotate: 8, y: "2rem" }, 0)
         .to(".can-you-sell__coins :nth-child(3)", { rotate: 134, y: "5rem" }, 0)
         .to(".can-you-sell__coins :nth-child(4)", { rotate: 113, y: "5rem" }, 0)
         .to(".can-you-sell__coins :nth-child(5)", { rotate: 21, y: "5rem" }, 0)
         .to(".can-you-sell__coins :nth-child(6)", { rotate: 135, y: "5rem", x: "-10rem" }, 0)
         .to(".can-you-sell__coins :nth-child(7)", { rotate: -36, y: "5rem", x: "2rem" }, 0);

   gsap
      .timeline({ scrollTrigger: { markers: false, trigger: ".no-matter", start: "top bottom", end: "100% bottom", scrub: 0.5 } })
      .from(".no-matter__title", { x: "-20rem" }, 0)
      .from(".no-matter__text", { x: "20rem" }, 0)
      // .from(".no-matter__ill", { y: "-15rem" }, 0)
      .from(".no-matter__ill-coin", { y: "25rem", rotate: -40 }, 0);
   gsap.timeline({ scrollTrigger: { markers: false, trigger: ".no-matter", start: "30% 50%", end: "100% 30%", scrub: 0.5 } }).fromTo(".main-bg", { autoAlpha: 1 }, { autoAlpha: 0 }, 0);

   // .fromTo(".schedule-pigs", { x: "-15rem" }, { x: "0", ease: "none" }, 0)
   // .fromTo(
   //    ".schedule-pigs i",
   //    {
   //       scale: 1,
   //       x: 0,
   //       opacity: (i) => (i == 0 ? 1 : 0),
   //    },
   //    {
   //       scale: 0.4,
   //       ease: "none",
   //       opacity: 1,
   //       x: (i) => windowWidth / 2 - 980 / 2 + i * 130 - 72 / 2 + "px",
   //    },
   //    0
   // );

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
   gsap.to(".main-bg", { duration: 0, opacity: 0 });
}

window.addEventListener("load", (e) => {
   document.documentElement.classList.add("loaded");
   gsap.from(".main-screen__text span, .main-screen__text-author", {
      x: "120%",
      stagger: 0.05,
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
   initGsap();
});

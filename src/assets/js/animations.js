import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

tl.fromTo(
  ".header",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.3 }
)
  .fromTo(
    ".title2_hero",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.3 }
  )
  .fromTo(
    ".hero__image_name",
    {
      y: 100,
      x: 0,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 0.3 }
  )
  .fromTo(
    ".hero__image_sign",
    {
      y: 100,
      x: 0,
      opacity: 0,
    },
    { y: "-50%", opacity: 1, duration: 0.3 }
  )
  .fromTo(
    ".hero__grid_souce-right",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.3 }
  )
  .fromTo(".hero__grid_marquee", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    ".hero__grid_souce",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.3 }
  );

gsap.fromTo(
  ".overlay-souce",
  { y: -440, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".hero__grid_souce",
      start: "10% center",
      end: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".overlay-souce-right",
  {
    y: -720,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".hero__grid_right",
      start: "40%, center",
      bottom: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".overlay-souse-main",
  {
    y: -720,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".souse__wrapper",
      start: "top, center",
      bottom: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".overlay-story",
  {
    y: -720,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".story__grid_image",
      start: "top, center",
      bottom: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".caption__row",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".caption",
      start: "-60% center",
      end: "center center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".shop__elem",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".shop__row",
      start: "top center",
      end: "center center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".marquee__grid_marquee",
  { x: 100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".marquee",
      start: "-50% center",
      end: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".story-star",
  { rotate: 0 },
  {
    rotate: 1440,
    scrollTrigger: {
      trigger: ".story__grid",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".marquee__grid_marqueeTwo",
  { x: 100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".marqueeTwo",
      start: "-50% center",
      end: "bottom center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer__elem-LT",
  { scale: 0 },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".footer__wrapper",
      start: "top center",
      end: "center center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer__elem-LB",
  { scale: 0 },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".footer__wrapper",
      start: "top center",
      end: "center center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer__elem-RT",
  { scale: 0 },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".footer__wrapper",
      start: "top center",
      end: "center center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer__elem-RB",
  { scale: 0 },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".footer__wrapper",
      start: "top center",
      end: "center center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer__elem-text-large",
  { y: 100 },
  {
    y: "0",
    scrollTrigger: {
      trigger: ".footer__wrapper",
      scrub: true,
      start: "top bottom",
      end: "center bottom",
    },
  }
);

gsap.fromTo(
  ".footer__elem-text-small",
  { y: 100 },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".footer__wrapper",
      scrub: true,
      start: "20% bottom",
      end: "center bottom",
    },
  }
);

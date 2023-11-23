document.addEventListener("scroll", () => {
  const navMid = document.querySelector(".nav-mid");
  const navBarLeft = document.querySelector(".nav-bar-left");
  const menuBtn = document.querySelector("#menu-btn");
  // let red;

  // console.log(red);

  if (window.scrollY > 4) {
    setTimeout(() => {
      navMid.style.display = "none";
      menuBtn.style.display = "flex";
      navBarLeft.style.display = "flex";
    }, 400);
  } else {
    setTimeout(() => {
      navMid.style.display = "flex";
      menuBtn.style.display = "none";
      navBarLeft.style.display = "none";
    }, 400);
  }
});

gsap.registerPlugin("sctollTrigger");

let tl = gsap.timeline();

tl.to(".head-video", {
  y: -330,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#first-section",
    scrub: 0.1,
    // markers: true,
    start: "top 0%",
    pin: true,
  },
});

tl.to(
  " .head-vid-img-cont video",
  {
    tansform: "translate(-10% ,-10%)",
    // width: "89vw",
    //   height: "89vh",
    scale: 1.35,
    duration: 0.1,
    scrollTrigger: {
      trigger: "#first-section",
      scrub: 3,
      // markers: true,
      start: "top -1%",
      end: "bottom 120%",
      pin: true,
    },
  },
  "a1"
);
tl.to(
  ".head-vid-img-cont img",
  {
    y: 30,
    //   width: "89vw",
    //   height: "89vh",
    width: "0vw",
    scrollTrigger: {
      trigger: "#first-section",
      scrub: 0.2,
      // markers: true,
      start: "top -1%",
      end: "bottom 110%",
    },
  },
  "a1"
);
tl.to(
  "#first-section ",
  {
    backgroundColor: "#EAEAEA",
    // backgroundColor: "black",
    scrollTrigger: {
      trigger: "#second-section",
      // scrub: 1,
      // markers: true,
      start: "top 70%",
      end: "bottom 110%",
      toggleActions: "play none none reverse",
    },
  },
  "a3"
);

tl.to(
  "#second-section ",
  {
    backgroundColor: "#EAEAEA",
    // backgroundColor: "black",
    scrollTrigger: {
      trigger: "#second-section",
      // scrub: 1,
      // markers: true,
      start: "top 70%",
      end: "bottom 110%",
      toggleActions: "play none none reverse",
    },
  },
  "a3"
);
tl.to(
  ".third-section ",
  {
    backgroundColor: "#EAEAEA",
    // backgroundColor: "black",
    scrollTrigger: {
      trigger: "#second-section",
      // scrub: 1,
      // markers: true,
      start: "top 70%",
      end: "bottom 110%",
      toggleActions: "play none none reverse",
    },
  },
  "a3"
);

let textRevel = document.querySelectorAll(".text-revel");

console.log(textRevel);

textRevel.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });
  console.log(text);
  gsap.from(text.chars, {
    opacity: 0.4,
    // y: 30,
    // x: 20,
    color: "black",
    delay: 0.1,
    stagger: 0.1,
    duration: 0.2,
    scrollTrigger: {
      trigger: "#first-section #second-section ",

      pin: true,
      // markers: true,
      start: "top -140%",
      end: "top -160%",
      scrub: true,
    },
  });
});

tl.to(
  ".mid-right-img",
  {
    x: 300,
    transform: "rotate(5deg) ",
    height: "80%",
    width: "25%",
    y: 50,

    scrollTrigger: {
      trigger: "#-section ",

      pin: true,
      markers: true,
      start: "top -210%",
      end: "top -280%",
      scrub: 1,
    },
  },
  "a2"
);

tl.to(
  ".mid-left-img",
  {
    x: -290,
    transform: "rotate(-5deg) ",
    height: "80%",
    width: "26%",
    y: 50,

    scrollTrigger: {
      trigger: "#-section ",

      pin: true,
      markers: true,
      start: "top -210%",
      end: "top -280%",
      scrub: 1,
    },
  },
  "a2"
);

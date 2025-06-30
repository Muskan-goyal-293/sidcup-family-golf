let crsr = document.querySelector(".crsr");
let crsr2 = document.querySelector(".crsrblr");
let body = document.querySelector("body");
let h4 = document.querySelectorAll("nav h4");
let nav = document.querySelector("nav");
let box = document.querySelectorAll(".box");
let h3 = document.querySelectorAll(".box h3");
let h5 = document.querySelectorAll(".box h5");

function crsrchange() {
  crsr.style.width = "10vh";
  crsr.style.height = "10vh";
  crsr.style.backgroundColor = "transparent";
  crsr.style.border = "2px solid white";
}

function crsrchangetwo() {
  crsr.style.width = "5vh";
  crsr.style.height = "5vh";
  crsr.style.backgroundColor = "#c2e859";
  crsr.style.border = "none";
}
h4.forEach((heading) => {
  heading.addEventListener("mouseenter", () => {
    heading.style.color = "#c2e859";
    crsrchange();
  });
});

h4.forEach((heading) => {
  heading.addEventListener("mouseleave", () => {
    heading.style.color = "white";
    crsrchangetwo();
  });
});

box.forEach((boxes) => {
  h3.forEach((heading) => {
    heading.addEventListener("mouseenter", () => {
      heading.style.color = "white";
      crsrchange();
    });
  });
});

box.forEach((boxes) => {
  h3.forEach((heading) => {
    heading.addEventListener("mouseleave", () => {
      heading.style.color = "black";
      crsrchangetwo();
    });
  });
});

box.forEach((boxes) => {
  h5.forEach((heading) => {
    heading.addEventListener("mouseenter", () => {
      heading.style.color = "white";
      crsrchange();
    });
  });
});

box.forEach((boxes) => {
  h5.forEach((heading) => {
    heading.addEventListener("mouseleave", () => {
      heading.style.color = "black";
      crsrchangetwo();
    });
  });
});

body.addEventListener("mousemove", (dets) => {
  gsap.to(crsr, {
    x: dets.x,
    y: dets.y,
  });
});

body.addEventListener("mousemove", (dets) => {
  gsap.to(crsr2, {
    x: dets.x,
    y: dets.y,
  });
});

gsap.to("nav", {
  backgroundColor: "black",
  duration: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: "nav",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  duration: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".main",
    scrub: 2,
    start: "top -50%",
    end: "top -100vh",
  },
});

gsap.from(".box2 img , .box2 .centerbox", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  // stagger:0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".box2",
    scrub: 2,
    start: "top 40%",
    end: "top 30%",
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  // stagger:0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".card",
    scrub: 1,
    start: "top 70%",
    end: "top 60%",
  },
});

gsap.from(
  ".div2 .first",
  {
    y: -70,
    x: -70,
    duration: 0.3,
    // stagger:0.5,
    scrollTrigger: {
      scroller: "body",
      trigger: ".div2",
      scrub: 1,
      start: "top 45%",
      end: "top 42%",
    },
  },
  "a"
);

gsap.from(
  ".div2 .second",
  {
    y: 70,
    x: 70,
    duration: 0.3,
    // stagger:0.5,
    scrollTrigger: {
      scroller: "body",
      trigger: ".div2",
      scrub: 1,
      start: "top 45%",
      end: "top 42%",
    },
  },
  "a"
);

gsap.from(".page4 h1", {
  y: 50,
  duration: 0.3,
  // stagger:0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    scrub: 1,
    start: "top 70%",
    end: "top 65%",
  },
});

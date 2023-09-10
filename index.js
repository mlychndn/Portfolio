const header = document.querySelector(".nav-bar");
const aboutMeSection = document.querySelector(".about-me");
const about = document.querySelector(".about");
const intro = document.querySelector(".intro");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-nav");
const logoImage = document.querySelector(".logo-img");
const webQuotes = document.querySelector(".web-quotes");
const modal = document.querySelector(".modal");
const hamburgerContainer = document.querySelector(".hamburger-out");
const socialIcons = document.querySelector(".social-icons");
const close = document.querySelector(".close");
const menuNav = document.querySelectorAll(".menu-nav")[0];

const initialCoords = aboutMeSection.getBoundingClientRect();

// const callback = (entries, observer) => {
//   const [entry] = entries;
//   console.log("entry", entry);
//   if (entry.isIntersecting && Math.floor(entry.intersectionRatio) === 0) {
//     header.classList.add("sticky");
//     intro.classList.add("intro-transform");
//   } else if (
//     entry.isIntersecting &&
//     Math.floor(entry.intersectionRatio) === 1
//   ) {
//     header.classList.remove("sticky");
//     header.classList.add("white-sticky");
//   } else if (
//     !entry.isIntersecting &&
//     Math.floor(entry.intersectionRatio) === 0 &&
//     entry.boundingClientRect.y < 0
//   ) {
//     header.classList.remove("white-sticky");
//     header.classList.add("sticky");
//     intro.style.transform = "translateY(120px)";
//   } else if (
//     !entry.isIntersecting &&
//     Math.floor(entry.intersectionRatio) === 0 &&
//     entry.boundingClientRect.y > 0
//   ) {
//     header.classList.remove("white-sticky");
//     header.classList.remove("sticky");
//     intro.classList.remove("intro-transform");
//   }
// };

// const options = {
//   root: null,
//   threshold: [0.2, 1],
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(aboutMeSection);

const mobileView = document.documentElement.clientWidth;

if (mobileView <= 750) {
  navMenu.style.display = "none";
  hamburgerContainer.classList.remove("hamburger-out");
  hamburgerContainer.display = "inline-block";
  // hamburger.addEventListener("click", () => {
  //   console.log("clicked!");
  //   modal.classList.toggle("pop-out");
  //   modal.classList.toggle("pop-in");

  //   hamburgerContainer.classList.toggle("hamburger-in");
  //   hamburgerContainer.classList.toggle("hamburger-out");
  //   socialIcons.style.display = "none";

  //   console.log(hamburger.src);
  //   if (modal.classList.contains("pop-in")) {
  //     hamburger.src = "/src/images/hamburger.png";
  //     hamburger.style.width = "40px";
  //     hamburger.style.height = "40px";
  //     socialIcons.style.display = "inline-block";
  //   } else {
  //     hamburger.src = "/src/images/close.png";
  //     hamburger.style.width = "25px";
  //     hamburger.style.height = "25px";
  //   }
  // });

  // console.log(close);
}

const getData = async () => {
  const data = await fetch("https://type.fit/api/quotes");
  const jsonData = await data.json();
  let i = 0;

  setInterval(() => {
    if (i < jsonData.length) {
      i = i + 1;
    }

    if (i === jsonData.length - 1) {
      i = 0;
    }
    webQuotes.innerHTML = jsonData[i].text;
  }, 5000);
};

getData();

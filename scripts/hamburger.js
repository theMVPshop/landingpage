let dropDown = document.getElementById("mobileHamburger");
let navBackground = document.getElementById("navMenuBackground");
let content = document.getElementById("mobileNavContentContainer");

var state = false;

const handleButtonClick = () => {
  if (state) {
    navBackground.classList.remove("grow");
    navBackground.classList.add("shrink");
    setTimeout(() => {
      content.style.display = "none";
    }, 50);

    setTimeout(() => {
      navBackground.classList.remove("shrink");
      navBackground.classList.add("static");
    }, 360);
    dropDown.style.position = "absolute";
    dropDown.classList.remove("hamburgerFixed");

    return (state = false);
  } else {
    if (navBackground.classList.contains("shrink")) {
      navBackground.classList.remove("shrink");
    }
    setTimeout(() => {
      content.style.display = "flex";
      dropDown.style.position = "fixed";
    }, 100);
    navBackground.classList.add("grow");
    dropDown.classList.add("hamburgerFixed");
    return (state = true);
  }
};

const handleResize = (e) => {
  if (e.currentTarget.innerWidth > 1010) {
    if (navBackground.classList.contains("grow")) {
      navBackground.classList.remove("grow");
      content.style.display = "none";
      dropDown.classList.remove("hamburgerFixed");
      return (state = false);
    }
  }
};

dropDown.addEventListener("click", handleButtonClick);

window.addEventListener("resize", handleResize);

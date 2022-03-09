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

    dropDown.classList.remove("hamburgerFixed");

    return (state = false);
  } else {
    if (navBackground.classList.contains("shrink")) {
      navBackground.classList.remove("shrink");
    }
    setTimeout(() => {
      content.style.display = "flex";
    }, 50);
    navBackground.classList.add("grow");
    dropDown.classList.add("hamburgerFixed");
    return (state = true);
  }
};

dropDown.addEventListener("click", handleButtonClick);

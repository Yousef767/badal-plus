let rtl = document.querySelectorAll(".rtl");
let tar = document.querySelectorAll(".tar");
let translateTrigger = document.getElementById("translate");

translateTrigger.addEventListener("click", () => {
  translateTrigger.classList.toggle("translate");
  if (translateTrigger.classList.contains("translate")) {
    translateTrigger.innerHTML = `
    <a href="##"><img src="./media/uk.png" alt="">English</a>
    `;
    translateOn();
  } else {
    translateTrigger.innerHTML = `
    <a href="##"><img src="./media/eg.png" alt="">العربية</a>
    `;
    translateOff();
  }
});

function translateOn() {
  if (rtl.length > 0) {
    rtl.forEach((e) => {
      e.setAttribute("dir", "rtl");
    });
  }
  if (tar.length > 0) {
    tar.forEach((e) => {
      e.style.textAlign = "right";
    });
  }
}

function translateOff() {
  if (rtl.length > 0) {
    rtl.forEach((e) => {
      e.removeAttribute("dir");
    });
  }
  if (tar.length > 0) {
    tar.forEach((e) => {
      e.style.textAlign = "left";
    });
  }
}

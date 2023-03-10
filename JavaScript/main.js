// scrol bar up
let btn_scrol = document.querySelector(".active button");
console.log(btn_scrol);

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn_scrol.style.display = "block";
  } else {
    btn_scrol.style.display = "none";
  }
};
btn_scrol.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

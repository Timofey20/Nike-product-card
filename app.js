document.addEventListener("click", addClass);
let span = document.querySelectorAll("span");

function addClass(event) {
  if (event.target.parentElement.className == "size") {
    for (const i of span) {
      i.classList.remove("active-size");
    }
    event.target.classList.add("active-size");
  }
  if (event.target.parentElement.className == "color") {
    for (const i of span) {
      i.classList.remove("active-color");
    }
    event.target.classList.add("active-color");
  }
}

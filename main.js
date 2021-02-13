const container = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

container.forEach((panel) => panel.addEventListener("click", toggleOpen));

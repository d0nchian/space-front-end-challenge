let activeState = window.location.href.split("/");
let currentPage = activeState[activeState.length - 1];
if (currentPage == "index.html") {
  document.querySelector(".swag").classList.add("border-b");
} else if (currentPage == "destination.html") {
  document.querySelector(".swag2").classList.add("border-b");
}

let activeState = window.location.href.split("/");
let currentPage = activeState[activeState.length - 1];
if (currentPage == "index.html") {
  document.querySelector(".swag").classList.add("border-b-2");
  document
    .querySelector(".swag")
    .classList.add("shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]");
  document.querySelector("#home").classList.remove("opacity-70");
} else if (currentPage == "destination.html") {
  document.querySelector(".swag2").classList.add("border-b-2");
  document
    .querySelector(".swag2")
    .classList.add("shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]");
  document.querySelector("#destination").classList.remove("opacity-70");
} else if (currentPage == "crew.html") {
  document.querySelector(".swag3").classList.add("border-b-2");
  document
    .querySelector(".swag3")
    .classList.add("shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]");
  document.querySelector("#crew").classList.remove("opacity-70");
} else if (currentPage == "technology.html") {
  document.querySelector(".swag4").classList.add("border-b-2");
  document
    .querySelector(".swag4")
    .classList.add("shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]");
  document.querySelector("#technology").classList.remove("opacity-70");
}

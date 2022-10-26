const buttonList = document.querySelectorAll(".btn");
const launch = document.querySelector("#launch");
const spaceport = document.querySelector("#launch");
const capsule = document.querySelector("#capsule");

let techTitle = document.querySelector(".tech-title");
let techPara = document.querySelector(".para");

let littlePic = document.querySelector(".littlePic");
let bigPic = document.querySelector(".bigPic");

let techArr = [
  [
    "Launch vehicle",
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  ],
  [
    "Spaceport",
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  ],
  [
    "Space capsule",
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  ],
];

function btnActive(bList) {
  bList.forEach((btn) => {
    console.log(btn);
    btn.classList.remove(
      "shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]"
    );
    console.log(btn.classList);
  });
}

buttonList.forEach((button) => {
  button.addEventListener("click", function () {
    let curerntBtn = button.innerHTML.trim();
    console.log(typeof curerntBtn);
    switch (curerntBtn) {
      case "1":
        btnActive(buttonList);
        techTitle.innerHTML = techArr[0][0];
        techPara.innerHTML = techArr[0][1];
        bigPic.srcset = "./assets/technology/image-launch-vehicle-portrait.jpg";
        littlePic.src =
          "./assets/technology/image-launch-vehicle-landscape.jpg";
        document
          .querySelector(".btn1")
          .classList.add(
            "shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]"
          );
        break;
      case "2":
        btnActive(buttonList);
        techTitle.innerHTML = techArr[1][0];
        techPara.innerHTML = techArr[1][1];
        bigPic.srcset = "./assets/technology/image-spaceport-portrait.jpg";
        littlePic.src = "./assets/technology/image-spaceport-landscape.jpg";
        console.log(bigPic, littlePic);
        document
          .querySelector(".btn2")
          .classList.add(
            "shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]"
          );
        break;
      case "3":
        btnActive(buttonList);
        techTitle.innerHTML = techArr[2][0];
        techPara.innerHTML = techArr[2][1];
        bigPic.srcset = "./assets/technology/image-space-capsule-portrait.jpg";
        littlePic.src = "./assets/technology/image-space-capsule-landscape.jpg";
        document
          .querySelector(".btn3")
          .classList.add(
            "shadow-[-1px_1px_8px_5px_rgba(13,148,136,0.75)inset]"
          );
        break;
    }
  });
});

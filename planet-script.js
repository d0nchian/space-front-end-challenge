const planetStats = {
  europa: {
    name: "europa",
    paragraph: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`,
    distance: "628 mil. km",
    travelTime: "3 years",
  },
  mars: {
    name: "mars",
    paragraph: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!`,
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  moon: {
    name: "moon",
    paragraph: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384,400 km",
    travelTime: "3 days",
  },
  titan: {
    name: "titan",
    paragraph: `The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
};

function clearActive(pList) {
  pList.forEach((planet) => {
    planet.classList.remove("font-bold");
    planet.classList.remove("italic");
    planet.classList.remove("underline");
    planet.classList.remove("text-teal-300");
  });
}

//ASSIGNING ALL ELEMENTS NEEDED TO CHANGE DATA
let planetName = document.querySelector("#name");
let planetParagraph = document.querySelector("#paragraph");
let planetDistance = document.querySelector("#distance");
let planetTravelTime = document.querySelector("#travelTime");
let planetPicture = document.querySelector("#planetPicture");

//ASSIGNING PICTURES

//START OF DOM FUNCTIONALITY
const planetList = document.querySelectorAll(".planet-list");
let currentPlanet = "";
// clearActive(planetList);
planetList.forEach((planet) => {
  planet.addEventListener("click", function () {
    currentPlanet = planet.innerHTML.toLowerCase().trim();
    console.log(currentPlanet);
    switch (currentPlanet) {
      case "europa":
        clearActive(planetList);
        //name
        europaName = planetStats.europa.name;
        planetName.innerHTML = europaName;
        //paragraph
        europaPara = planetStats.europa.paragraph;
        planetParagraph.innerHTML = europaPara;
        //stats1
        europaStats = planetStats.europa.distance;
        planetDistance.innerHTML = europaStats;
        //stats2
        europaTime = planetStats.europa.travelTime;
        planetTravelTime.innerHTML = europaTime;
        //picure
        planetPicture.src = "./assets/destination/image-europa.webp";
        //active state
        document.querySelector("#europa").classList.add("font-bold");
        document.querySelector("#europa").classList.add("italic");
        document.querySelector("#europa").classList.add("underline");
        document.querySelector("#europa").classList.add("text-teal-300");

        break;
      case "moon":
        clearActive(planetList);
        //name
        moonName = planetStats.moon.name;
        planetName.innerHTML = moonName;
        //paragraph
        moonPara = planetStats.moon.paragraph;
        planetParagraph.innerHTML = moonPara;
        //stats1
        moonStats = planetStats.moon.distance;
        planetDistance.innerHTML = moonStats;
        //stats2
        moonTime = planetStats.moon.travelTime;
        planetTravelTime.innerHTML = moonTime;
        //picure
        planetPicture.src = "./assets/destination/image-moon.webp";
        //active state
        document.querySelector("#moon").classList.add("font-bold");
        document.querySelector("#moon").classList.add("italic");
        document.querySelector("#moon").classList.add("underline");
        document.querySelector("#moon").classList.add("text-teal-300");
        break;
      case "mars":
        clearActive(planetList);
        //name
        marsName = planetStats.mars.name;
        planetName.innerHTML = marsName;
        //paragraph
        marsPara = planetStats.mars.paragraph;
        planetParagraph.innerHTML = marsPara;
        //stats1
        marsStats = planetStats.mars.distance;
        planetDistance.innerHTML = marsStats;
        //stats2
        marsTime = planetStats.mars.travelTime;
        planetTravelTime.innerHTML = marsTime;
        //picure
        planetPicture.src = "./assets/destination/image-mars.webp";
        //active state
        document.querySelector("#mars").classList.add("font-bold");
        document.querySelector("#mars").classList.add("italic");
        document.querySelector("#mars").classList.add("underline");
        document.querySelector("#mars").classList.add("text-teal-300");
        break;
      case "titan":
        clearActive(planetList);
        //name
        titanName = planetStats.titan.name;
        planetName.innerHTML = titanName;
        //paragraph
        titanPara = planetStats.titan.paragraph;
        planetParagraph.innerHTML = titanPara;
        //stats1
        titanStats = planetStats.titan.distance;
        planetDistance.innerHTML = titanStats;
        //stats2
        titanTime = planetStats.titan.travelTime;
        planetTravelTime.innerHTML = titanTime;
        document
          .querySelector("#planetPicture")
          .classList.add("animate__fadeIn");
        //picure
        planetPicture.src = "./assets/destination/image-titan.webp";
        //active state
        document.querySelector("#titan").classList.add("font-bold");
        document.querySelector("#titan").classList.add("italic");
        document.querySelector("#titan").classList.add("underline");
        document.querySelector("#titan").classList.add("text-teal-300");
        break;
    }
  });
});
console.log(currentPlanet);

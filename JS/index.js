function updateCityTime() {
  //set time for Los Angeles
  let losAngelesElement = document.querySelector("#los");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesAA = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesAA.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = `${losAngelesAA.format(
    "h:mm:ss"
  )} <small>${losAngelesAA.format("A")}</small>`;

  //set time for Sydney
  let sydneyElement = document.querySelector("#syd");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  let sydneyAA = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydneyAA.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyAA.format("h:mm:ss [<small>]A[</small>]");

  //set time for Sydney
  let japanElement = document.querySelector("#jap");
  let japanDate = japanElement.querySelector(".date");
  let japanTime = japanElement.querySelector(".time");
  let japanAA = moment().tz("Japan");
  japanDate.innerHTML = japanAA.format("MMMM Do YYYY");
  japanTime.innerHTML = japanAA.format("h:mm:ss [<small>]A[</small>]");

  //set time for Paris
  let franceElement = document.querySelector("#par");
  let franceDate = franceElement.querySelector(".date");
  let franceTime = franceElement.querySelector(".time");
  let franceAA = moment().tz("Europe/Paris");
  franceDate.innerHTML = franceAA.format("MMMM Do YYYY");
  franceTime.innerHTML = franceAA.format("h:mm:ss [<small>]A[</small>]");
}

updateCityTime();
setInterval(updateCityTime, 1000);

function updateCity(event) {
  let cityTZ = event.target.value;

  if (cityTZ === "current") {
    cityTZ = moment.tz.guess(); // Guess the user's timezone
  }

  let cityName = cityTZ.includes("/")
    ? cityTZ.split("/")[1].replace("_", " ")
    : cityTZ;

  let cityTime = moment().tz(cityTZ);
  let cities = document.querySelector("#cities");

  cities.innerHTML = `
    <div class="cities">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}

let citiesChoose = document.querySelector("#choose-city");
citiesChoose.addEventListener("change", updateCity);

function resetCities() {
  const defaultCities = `
          <div class="cities" id="los">
            <div>
              <h2>Los Angeles <span class="fi fi-us"></span></h2>
              <div class="date">20 December 2024</div>
            </div>
            <div class="time">09:10 [<small>]AM[</small>]</div>
          </div>
          <div class="cities" id="syd">
            <div>
              <h2>Sydney <span class="fi fi-au"></span></h2>
              <div class="date">20 December 2024</div>
            </div>
            <div class="time">09:10  [<small>]AM[</small>]</div>
          </div>
          <div class="cities" id="jap">
            <div>
              <h2>Tokyo <span class="fi fi-jp"></span></h2>
              <div class="date">20 December 2024</div>
            </div>
            <div class="time">09:10  [<small>]AM[</small>]</div>
          </div>
          <div class="cities" id="par">
            <div>
              <h2>Paris <span class="fi fi-fr"></span></h2>
              <div class="date">20 December 2024</div>
            </div>
            <div class="time">09:10  [<small>]AM[</small>]</div>
          </div>
        `;
  document.querySelector("#cities").innerHTML = defaultCities;
  updateCityTime(); // Ensure time updates resume for the default cities
}

document.querySelector("#home-link").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  resetCities();
});

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
  let japanAA = moment().tz("Asia/Japan");
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

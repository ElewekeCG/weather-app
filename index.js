     function fetchWeather(city){
      fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+
      city+
      "&units=metric"+
      "&appid=7b15d721fb358a22194043bb258d9c17")
    .then((response) =>
        response.json())
    .then((data) =>
        this.displayWeather(data));
    }
    

  function displayWeather(data) {
            const { name } = data;
            const {icon, description} = data.weather[0];
            const {temp, humidity} = data.main;
            const {speed} = data.wind;
            console.log(name, icon, description, temp,  humidity, speed);
            document.querySelector(".mys").innerText = "Weather in " + name;
            document.querySelector(".mys1").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".mys2").innerText = description;
            document.querySelector(".mys3").innerText = Math.round(temp) +String.fromCharCode(176) +"C";
            document.querySelector(".mys4").innerText = "Humidity:" + " "+ humidity + "%";
            document.querySelector(".mys5").innerText = "Wind Speed:" + " " + speed + "km/h";
            document.querySelector(".dat").innerText = new Date();
            let modal = document.querySelector(".modal");
            modal.style.display = "block";
            let mod = document.querySelector(".mod");
            mod.style.display = "block";

}
function search(){
    this.fetchWeather(document.querySelector(".inputValue").value);
}
document
.querySelector(".search")
.addEventListener("click", function(){
    search();
})
document.querySelector(".inputValue")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter"){
        search();
    }
});

    //   let tagValue = data.name;
    //   let tempValue = data['main']['temp'];
    //   let descValue = data['weather'][0]['description'];
    //   tag.innerHTML = tagValue;
    //   temp.innerHTML = tempValue;
    //   desc.innerHTML = descValue;
    // {name} = data;
    // const {icon, description} = data.weather[0];
    // const {temp, humidity} = data.main;
    // const {speed} = data.wind;
    // console.log(name, icon, description, temp,  humidity, speed);
// // //  document.querySelector(".mys").innerText = "Weather in " + name;
// // //             document.querySelector(".mys1").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
// // //             document.querySelector(".mys2").innerText = description;
// // //             document.querySelector(".mys3").innerText = temp + "C";
// // //             document.querySelector(".mys4").innerText = "Humidity:" + humidity + "%";
// // //             document.querySelector(".mys5").innerText = "Wind Speed:" + speed + "km/h";
    // })
    // .catch(err => console.error(err))

// }
// let weather = {
//     "apiKey": "7b15d721fb358a22194043bb258d9c17",
//     Fetchweather: function(city){

//         displayWeather: function(data){
//             const {name} = data;
//             const {icon, description} = data.weather[0];
//             const {temp, humidity} = data.main;
//             const {speed} = data.wind;
//             console.log(name, icon, description, temp,  humidity, speed);
//             document.querySelector(".mys").innerText = "Weather in " + name;
//             document.querySelector(".mys1").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
//             document.querySelector(".mys2").innerText = description;
//             document.querySelector(".mys3").innerText = temp + "C";
//             document.querySelector(".mys4").innerText = "Humidity:" + humidity + "%";
//             document.querySelector(".mys5").innerText = "Wind Speed:" + speed + "km/h";
//         },
//         search: function(){
//            this.Fetchweather(document.querySelector(".search-bar").value);
//         }
//   };

//   .addEventListener("click", function()
//   {
//       weather.search();
//   });
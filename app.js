const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
  const query = req.body.cityName

  const appId = "1ad0637d8afd3ab688d257d6eccafc68";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query+ "&appid="+ appId+ "&units=" + unit

  console.log(url);

  https.get(url, function(response){
    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      console.log(weatherData);
    })
  })
})


app.listen( process.env.PORT ||3000, function () {
  console.log("Listening on post 3000");
})








































// const express = require('express'); // requires express
// const https = require('https'); // requires https
// const bodyParser = require('body-parser'); // requires body-parser
//
// const app = express(); // initallise expres
//
// app.use(bodyParser.urlencoded({extended: true})); // the nessasary code to be able to start parsing through
//
// app.get("/", function (req, res) {
//
//   res.sendFile(__dirname + "/index.html"); // when a user it as the home route it will rended this
//
// });
//
// app.post("/", function(req, res) {
//
//   const query = req.body.cityName;
//   const appId = "1ad0637d8afd3ab688d257d6eccafc68";
//   const unit = "metric";
//
//   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query+ "&appid="+ appId+ "&units=" + unit
//
//   https.get(url, function(response){
//     console.log(response.statusCode);
//
//     response.on("data", function(data){
//       const weatherData = JSON.parse(data) // parsing data into jason
//       console.log(weatherData);
//       const temprature = weatherData.main.temp
//       const weatherDescrption = weatherData.weather[0].description
//       const weatherLocation = weatherData.name
//       const icon = weatherData.weather[0].icon
//       const imageURL = "https://openweathermap.org/img/wn/" + icon +"@2x.png"
//       res.write("<h1> The temprature in " + weatherLocation + " is " + temprature + " degrees Celcius.</h1>");
//       res.write("<p> The weather descripton is " + weatherDescrption + ". <p>");
//       res.write("<img src='"+ imageURL +"'>");
//       res.send();
//     });
//   });
// });
//
//
//
//
// app.listen(3000, function(){
//   console.log('listening on post 3000');
// });

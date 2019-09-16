const api =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&page=1&api_key=e6qeMVwVAobScq3QGBBCsWdk4haOxrTmcBfB3RPI";
var i = 0;
function getImages() {
  fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var appendImage = document.querySelector("#getImage");
      document.getElementById("GetImg").innerHTML= "Next Image";
      i++;
      console.log(i);
      appendImage.src = myJson.photos[i].img_src;
      appendImage.style.border="1px solid #ddd";
    });
}

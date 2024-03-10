//searches city-wise weather
let foodImage = document.createElement("IMG");

async function getFoodPhotos() {
  try {
    let response = await fetch("https://foodish-api.herokuapp.com/api/");
    let foodImages = await response.json();
    console.log(foodImages);
    console.log(foodImages.image);
    foodImage.setAttribute("src", foodImages.image);
    foodImage.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(foodImage);
  } catch (error) {
    console.log("Oops...Something went wrong!!", error);
  }
}

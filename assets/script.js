// API current prices
// https://api.coindesk.com/v1/bpi/currentprice.json

//list 20 most popular coins

// create variables

// functions

// click event & console log api data
var x = document.createElement("BUTTON");

function getCryptoPrices() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
getCryptoPrices();
$(".test-button").click(console.log("hello"));

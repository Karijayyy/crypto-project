// API current prices
// https://api.coindesk.com/v1/bpi/currentprice.json

//list 20 most popular coins

// create variables

// functions

// click event & console log api data
var x = document.createElement("BUTTON");

function getCryptoPrices(searchValue) {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(searchValue);
    });
}
getCryptoPrices("list prices");
$(".test-button").click(console.log("hello"));

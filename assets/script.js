// API current prices
// https://api.coindesk.com/v1/bpi/currentprice.json

//list 20 most popular coins

// create variables

// functions


function getCryptoPrices() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
getCryptoPrices();
$(".test-button").click(console.log("hello"));

// 400 + coins 
http://api.coinlayer.com/api/live?access_key=8bab17ed8bc64ebebd3b1dbe4ad46a98

function getCryptoPrices() {
  fetch("http://api.coinlayer.com/api/live?access_key=8bab17ed8bc64ebebd3b1dbe4ad46a98")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
getCryptoPrices();
$(".test-button").click(console.log("hello"));


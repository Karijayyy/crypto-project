// API for Bitcoin 
// https://api.coindesk.com/v1/bpi/currentprice.json
// API for 400+ coins
// 400 + coins 
http://api.coinlayer.com/api/live?access_key=8bab17ed8bc64ebebd3b1dbe4ad46a98
// let coin = document.querySelector('.coin')



//function for Bitcoin Prices
function getBitcoinPrice() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let getBitcoinPriceNow = data.bpi.USD.rate
      $("#bitcoin").text(getBitcoinPriceNow)
    });
}
getBitcoinPrice();
$(".test-button").click(console.log("hello bitcoin"));

// function for all other crypto prices

//  let getCryptoPriceNow = data.rates."PUT CORRELATING ABBREVIATION HERE"
// $("#b").text(getCryptoPriceNow)

// abbreviations for coins 

// ethereum ---> etc 
// xrp ----> xrp
// stellar lumens ----> xlm
// polkadot -----> dot
// litecoin ---> ltc
// dogecoin ----> doge
// cosmos -----> atom 
// vechain  -----> vet
// cardano ----> ada 
// dash -----> dash 
// chainlink -----> link
// balancer-----> bal
// eos -----> eos 
// solana -----> sol 
// tron -----> trx
// nano -----> nano
// filecoin-----> fil
// decred -----> dcr
// digibyte -----> dgb
// nem ---> xem 
// neo -----> neo 
// stellar -----> xlm 


function getCryptoPrices() {
  fetch("http://api.coinlayer.com/api/live?access_key=8bab17ed8bc64ebebd3b1dbe4ad46a98")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let getCryptoPriceNow = data.rates.BCH
      $("#bitcoinCash").text(getCryptoPriceNow)

    });
}
getCryptoPrices();
$(".test-button").click(console.log("hello crypto"));


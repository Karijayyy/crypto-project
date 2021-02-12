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
function getCryptoPrices() {
  fetch("http://api.coinlayer.com/api/live?access_key=8bab17ed8bc64ebebd3b1dbe4ad46a98")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let getCryptoPriceNow = data.rates.BCH
      $("#bitcoinCash").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#ethereum").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#xrp").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#stellarLumens").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#compound").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#polkadot").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#litecoin").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#dogecoin").text(getCryptoPriceNow)

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

      // let getCryptoPriceNow = data.rates.BCH
      // $("#cosmos").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#veChain").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#cardano").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#dash").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#chainlink").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#balancer").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#eos").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#solana").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#tron").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#nano").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#filecoin").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#decred").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#digibyte").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#nem").text(getCryptoPriceNow)
      // let getCryptoPriceNow = data.rates.BCH
      // $("#neo").text(getCryptoPriceNow)
    });
}
getCryptoPrices();
$(".test-button").click(console.log("hello crypto"));


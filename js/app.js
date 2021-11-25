const getBitcoinsBtn = document.querySelector('.getBitcoins');
const moneyList = document.querySelector('.money');
const inputField = document.querySelector('input[type="number"]');
const mySelect = document.getElementById("mySelect");

getBitcoinsBtn.addEventListener('click',getBitcoins)


function getBitcoins(){
    let numberOfBitcoins = inputField.value;
    let currency = mySelect.value;
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
 
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (currency = "USD") {
            let USDBitcoin =data.bpi.USD.rate_float * numberOfBitcoins ;
            moneyList.innerHTML = USDBitcoin;
            
          }
          else if (currency= "EUR") {
            let EURBitcoin =data.bpi.EUR.rate_float * numberOfBitcoins ;
            moneyList.innerHTML = EURBitcoin;
          } else {
            let GBPBitcoin =data.bpi.GBP.rate_float * numberOfBitcoins ;
            moneyList.innerHTML = GBPBitcoin;
          }


    });
    


};




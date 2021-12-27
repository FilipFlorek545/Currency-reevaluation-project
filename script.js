const init = () => {
    essentials()
}
const essentials = () => {
    const btn_revalue = document.getElementById('btn_revalue');
    btn_revalue.addEventListener('click', exchanger)
}
let greenCircle = document.querySelector('#green_circle')

const loading = () => {                         // loader
    greenCircle.style.visibility = 'visible' ;
}
const clearInput = () => { 
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}

const exchanger = () => {
    const option_1 = document.getElementById('option_1').value;
    const option_2 = document.getElementById('option_2').value;
    const option_3 = document.getElementById('option_3').value;
    let amount = document.getElementById('input_amount').value;
    let currencyValue = document.querySelector('#input_currency').value

   
    switch(currencyValue){
        case option_1:
            loading()
            axios.get('http://api.nbp.pl/api/exchangerates/rates/a/chf/')
            .then((response) => {
                let modifier = (response.data.rates[0].mid);
                let modifiedAmount = amount * modifier;
                result(modifiedAmount);
                clearInput();
            })
            break;
        case option_2:
            loading()
            axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/')
            .then((response) => {
                let modifier = (response.data.rates[0].mid);
                let modifiedAmount = amount * modifier;
                result(modifiedAmount);
                clearInput();
            })
            break;
        case option_3:
            loading()
            axios.get('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
            .then((response) => {
                let modifier = (response.data.rates[0].mid);
                let modifiedAmount = amount * modifier;
                result(modifiedAmount);
                clearInput();
            })
            break;
        default:
            alert('Błędnie uzupełniono przelicznik!')
    }
    
}

const result = (modifiedAmount,) => {
    greenCircle.style.visibility = "hidden"
    new_result = document.querySelector('p')
    modifiedAmount = modifiedAmount.toFixed(2);
    new_result.innerHTML = 'jest równe ' + modifiedAmount + ' PLN.'
}

if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init());
  }
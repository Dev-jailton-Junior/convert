const convertButon = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".curency-select")

async function convertValue() {

    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 7.14
    const bitcoinToday = data.BTCBRL.high
    
    
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency / libraToday)
    }
    if(currencySelect.value =="bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)
}
function changeCurrency() {

    const currencyName = document.querySelector(".currency-name")
    const imgCurrency = document.querySelector(".img-currency")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        imgCurrency.src = "./assets/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        imgCurrency.src="./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        imgCurrency.src="./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML ="Bitcoin"
        imgCurrency.src="./assets/bitcoin.png"
    }
    convertValue()
}

currencySelect.addEventListener("change", changeCurrency)
convertButon.addEventListener("click", convertValue)
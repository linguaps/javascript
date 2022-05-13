const totalAmountInput = document.getElementById("totalAmount");
const currencyTypeByUserInput = document.getElementById("currencyTypeByUser");
const calculateTipInput = document.getElementById("calculateTip");
const convertCurrencyInput = document.getElementById("convertCurrency");
const currencyToBeConvertedInput = document.getElementById("currencyToBeConverted");
const tipSumParagraph = document.getElementById("tipSum");
const ACCESS_KEY = 'ZLqIYWVNtf3F7WyYMoJ400hX4bDM2gjb';


calculateTipInput.onclick = () => {
    const totalAmount = totalAmountInput.value;
    localStorage.setItem("totalAmount", totalAmount);
    localStorage.setItem("currency", currencyTypeByUserInput.value);
    updateDomWithTip(calculateTip(totalAmount));
}

function updateDomWithTip(tip){
    tipSum.innerText = `You will receive ${tip} in ${currencyTypeByUserInput.value}`;
}


function calculateTip(totalAmount) {
    console.log(totalAmount)
    return totalAmount / 100 * 10;
}

async function convertCurrencyy(fromCurrency, toCurrency, amount) {
    var myHeaders = new Headers();
    myHeaders.append("apikey", ACCESS_KEY);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const httpData = await fetch(`https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions);
    return await httpData.json();
}

convertCurrency.onclick = async () => {
    let toCurrency = currencyTypeByUserInput.value;
    let fromCurrency = currencyToBeConvertedInput.value;
    let amount = calculateTip(totalAmountInput.value);
    console.log(amount)
    let result = await convertCurrencyy(fromCurrency, toCurrency, amount);

    if (result.result) {
        tipSum.innerText = `${result.result} in ${fromCurrency}`;
    }
    console.log(result);

}

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message")

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    console.log(fromValue,toValue);
}

convertButton.addEventListener("click", convert);
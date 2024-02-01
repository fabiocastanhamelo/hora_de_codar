// Obter referências aos elementos HTML
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message")


// FUNÇÃO PARA CONVERTER AS UNIDADES
function convert() {
    //OBTER OS VALORES DAS UNIDADES DE ENTRADA E SAÍDA
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    //VERIFICAR SE AS UNIDADES DE ENTRADA E SAÍDA SÃO IGUAIS
    if (fromValue === toValue) {
        outputElement.value = inputElement.value = "";
        messageElement.textContent = "";
        return;
    }

    //CONVERTER O VALOR DE ENTRADA PARA METROS
    let meters
    switch (fromValue) {
        case "m":
            meters = inputElement.value;          
            break;
        case "km":
            meters = inputElement.value * 1000;
            break
        case "cm":
            meters = inputElement.value / 100;
            break
        case "mm":
            meters = inputElement.value / 1000;
            break;
    }

    //converter metros para a unidade de saída

    let result;
    switch(toValue) {
        case "m":
            result = meters;       
            break;
        case "km":
            result = meters / 1000;
            break
        case "cm":
            result = meters * 100;
            break
        case "mm":
            result = meters * 1000;
            break;
    }
        //EXIBIR O RESULTADO NA CAIXA DE SAÍDA
        output.value = result.toFixed(2);

        //EXIBIR A MENSAGEM DE CONVERSÃO
        const fromLabel = fromElement.options[fromElement.selectedIndex].text;
        const toLabel = toElement.options[toElement.selectedIndex].text;
        const message = `${inputElement.value} ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
        messageElement.textContent = message;
        return;
}
        //ADICIONAR UM OUVINTE DE EVENTOS AO BOTÃO DE CONVERSÃO
        convertButton.addEventListener("click", convert);




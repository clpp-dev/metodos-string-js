const textArea = document.querySelector("#textarea-box");
const btnUpercase = document.querySelector("#btn-upercase");
const btnLowcase = document.querySelector("#btn-lowcase");
const btnCapitalize = document.querySelector("#btn-capitalize");
const btnClear = document.querySelector("#btn-clear");

btnUpercase.addEventListener('click', TransformToUpercase);
btnLowcase.addEventListener('click', TransformToLowcase);
btnCapitalize.addEventListener('click', TransformToCapitalize);
btnClear.addEventListener('click', ClearTextArea);

function TransformToUpercase(){
    let textFromTextArea = textArea.value;
    textArea.value = textFromTextArea.toUpperCase();
};

function TransformToLowcase(){
    let textFromTextArea = textArea.value;
    textArea.value = textFromTextArea.toLowerCase();
};

function TransformToCapitalize(){
    let arrayWords = textArea.value.split(" ");
    console.log("TransformToCapitalize");
    console.log(arrayWords);
    let textCapitalized = arrayWords.map( word => word.charAt(0).toUpperCase() + word.substring(1 , word.length).toLowerCase());
    let text = "";
    for (let i = 0; i < textCapitalized.length; i++) {
        text += textCapitalized [i] + " ";
    };
    textArea.value = text;
};

function ClearTextArea(){
    textArea.value = "";
};
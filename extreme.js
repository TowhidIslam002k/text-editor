document.getElementById('bold-text').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    const currentFontWeight = textArea.style.fontWeight;
    if (currentFontWeight === "bold") {
        textArea.style.fontWeight = "normal";
    } 
    else {
        textArea.style.fontWeight = "bold";
    }
})

document.getElementById('italic-text').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    const currentFontStyle = textArea.style.fontStyle;
    if (currentFontStyle === "italic") {
        textArea.style.fontStyle = "normal";
    } 
    else {
        textArea.style.fontStyle = "italic";
    }
})

document.getElementById('underline-text').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    const currentTextDecoration = textArea.style.textDecoration;
    if (currentTextDecoration === "underline") {
        textArea.style.textDecoration = "none";
    } 
    else {
        textArea.style.textDecoration = "underline";
    }
})

document.getElementById('align-left').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    textArea.style.textAlign = "left";
})

document.getElementById('align-center').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    textArea.style.textAlign = "center";
})

document.getElementById('align-right').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    textArea.style.textAlign = "right";
})

document.getElementById('align-justify').addEventListener('click', function(){
    const textArea = document.getElementById('text-to-change');
    const textAreaValue = textArea.value;
    textArea.style.textAlign = "justify";
})

const myInput = document.getElementById("number-input");
const myText = document.getElementById("text-to-change");
myInput.addEventListener("change", () => {
const inputValue = parseFloat(myInput.value);
const currentFontSize = parseInt(window.getComputedStyle(myText).getPropertyValue("font-size"));
myText.style.fontSize = `${currentFontSize + inputValue}px`;
});

const input = document.getElementById("color-input");
const text = document.getElementById("text-to-change");
input.addEventListener("input", function() {
const color = input.value;
text.style.color = color;
});
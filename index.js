const color_code = document.getElementById("colorCode")
const colorbox = document.getElementById("color-box")
const generate = document.getElementById("generate-btn")
const copyHex = document.getElementById("copy-btn")
const CopyRgb = document.getElementById("Copy-RGB")
const reset_Btn = document.getElementById("restBtn")   

let colorcode = '';



 function CopyHex(){
    const colorText = colorbox.style.backgroundColor;
    const hexcode = rgbToHex(colorText);
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Color copied to clipboard: " + hexcode);
};

function rgbToHex(rgbColor) {
const regex = /rgb\((\d+), (\d+), (\d+)\)/;
const matches =regex.exec(rgbColor);
const r = parseInt(matches[1]);
const g = parseInt(matches[2]);
const b = parseInt(matches[3]);
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

function componentToHex(C) {
    const hex = C.toString(16);
    return hex.length == 1 ? "0" + hex : hex; 
};

function GenerateBtn(){
    const hexChers = "0123456789ABCDEF"
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
     hexColor += hexChers[Math.floor(Math.random() * 16)];
        
    };
// Displaying the colors
    colorbox.style.backgroundColor = hexColor;

    // displaying the color code

  color_code.innerHTML = hexColor;
  color_code.style.color = hexColor;

    
};



function RGB(){
    const colorText = colorbox.style.backgroundColor;
    const tempInput = document.createElement("input")
    document.body.appendChild(tempInput);
    tempInput.value = colorText;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("color copied to clipboard: " + colorText)

}

function ResetBtn(){
    colorbox.style.backgroundColor = null;

    color_code.innerHTML = null;
    color_code.style.color = null;


}

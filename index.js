const color_code = document.getElementById("colorCode")
const colorbox = document.getElementById("color-box")
const generate = document.getElementById("generate-btn")
const copyHex = document.getElementById("copy-btn")
const CopyRgb = document.getElementById("Copy-RGB")
const reset_Btn = document.getElementById("restBtn")   

let colorcode = '';



 function CopyHex(){

    const copy = document.getElementById("copy-btn").value
    

    if (copy === color_code) {
        alert('link copied')
        return;
        
    };

    

}

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

}

function ResetBtn(){
    colorbox.style.backgroundColor = null;

    color_code.innerHTML = null;
    color_code.style.color = null;

    const reset = document.getElementById("resetBtn").value

    if (reset === '') {
        alert('link copied')
        return;
        
    };

}


function buildPyramid(numberOfRows, characterToUse) {
    let pyramidArray = [];
    for (let row = 1; row <= numberOfRows; row++){
        pyramidArray.push(buildRow(row,characterToUse));
    }
    return pyramidArray;
}

function buildRow(numberOfCharacters, Character) {
    let rowStr = Character;
    return rowStr.repeat(numberOfCharacters);
}

function drawPyramid(pyramidArray) {
    let pyramidDiv = document.getElementById("pyramid");
    pyramidDiv.innerText = "";
    for(let row of pyramidArray){
        let p = document.createElement("p");
        p.style.textAlign = "right";
        p.innerText = row;
        pyramidDiv.appendChild(p);
    }
}


function main() {
    let slider = document.querySelector("#slider");
    slider.addEventListener("input", Input);
    
    let selectBox = document.querySelector("#brickSymbolSelectBox");
    selectBox.addEventListener("change", Input);

    let counterDisplay = document.querySelector("span");

    function Input() {
        drawPyramid(buildPyramid(slider.value, selectBox.value));
        counterDisplay.innerText = slider.value;
    }

    Input();
}
main();
const body = document.getElementsByTagName("body")[0]
function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColour(){
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)

    const colour = `rgb(${r},${g},${b})`
    body.style.backgroundColor = colour;
}
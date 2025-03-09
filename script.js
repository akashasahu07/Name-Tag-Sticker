let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Peter", "Tony", "Steve"]

let colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#F5FF33", "#FF8C00", "#800080", "#008080",
    "#FF4500", "#2E8B57", "#4682B4", "#DAA520", "#5F9EA0",
    "#DC143C", "#8A2BE2", "#00FA9A", "#FF1493", "#7FFF00",
    "#9932CC", "#6495ED", "#FFD700", "#20B2AA", "#FF69B4",
    "#CD5C5C", "#BA55D3", "#3CB371", "#FF6347", "#40E0D0"
];

let sticker = function (name) {
    let div = template.content.querySelector("div");
    let nameOfStick = div.querySelector(".name");

    nameOfStick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    let node = document.importNode(div, true);
    wrapper.appendChild(node);
}

setTimeout(refreshPage, 1000);
function refreshPage(){
    location.reload();
}

names.forEach(sticker);
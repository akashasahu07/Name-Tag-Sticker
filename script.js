let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Peter", "Tony", "Steve"];

let colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#F5FF33", "#FF8C00", "#800080", "#008080",
    "#FF4500", "#2E8B57", "#4682B4", "#DAA520", "#5F9EA0",
    "#DC143C", "#8A2BE2", "#00FA9A", "#FF1493", "#7FFF00",
    "#9932CC", "#6495ED", "#FFD700", "#20B2AA", "#FF69B4",
    "#CD5C5C", "#BA55D3", "#3CB371", "#FF6347", "#40E0D0"
];

// Store references to stickers
let stickers = [];

let createSticker = function (name) {
    let div = template.content.querySelector("div").cloneNode(true);
    let nameOfStick = div.querySelector(".name");
    nameOfStick.innerHTML = name;

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    div.style.background = randomColor;
    let initialRotation = Math.random() * 40 - 20;
    div.style.transform = `rotate(${initialRotation}deg)`;

    wrapper.appendChild(div);
    stickers.push({ element: div, rotation: initialRotation });
};

// Create stickers
names.forEach(createSticker);

// Function to continuously rotate stickers and change colors even faster
function animateStickers() {
    stickers.forEach(sticker => {
        sticker.rotation += (Math.random() * 10 - 5); // Even faster rotation
        sticker.element.style.transform = `rotate(${sticker.rotation}deg)`;

        // Assign a new random color to each sticker
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        sticker.element.style.background = newColor;
    });

    setTimeout(animateStickers, 1000); // Faster updates every 300ms
}

animateStickers();

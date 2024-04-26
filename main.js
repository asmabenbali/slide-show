
let imgEl = document.getElementById("here");
let titleOverlayEl = document.getElementById("title-overlay");

let images = [
    { src: "./img/a.jpg", title: "La nature se suffit." },
    { src: "./img/twoo.jpg", title: "La nature est une baguette magique pétrifiée." },
    { src: "./img/tree.jpg", title: "Nous comprenons la Nature en lui résistant." },
    { src: "./img/n.jpg", title: "La nature est une théologie populaire." }
];

let i = 0;

function sli() {
    imgEl.setAttribute("src", images[i].src);
    titleOverlayEl.textContent = images[i].title; // Change le titre sur l'image
    i = (i + 1) % images.length;
    setTimeout(sli, 2000);
}

sli();

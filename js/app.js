let p = document.getElementsByClassName("p");
let f = document.getElementsByClassName("f");
let c = document.getElementsByClassName("c");

let imgs_left = document.getElementById("imgs_left");
let imgs_right = document.getElementById("imgs_right");

let player_picture = document.getElementById("player_picture");
let ia_picture = document.getElementById("ia_picture");

let pfc = ["../img/pierre.png", "../img/feuille.png", "../img/ciseaux.png"];
let ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;

for (let i = 0; i < 2; i++) {
    p[i].addEventListener("click", () => {
        console.log("p");
        player_picture.src = "../img/pierre.png";
        player_picture.style.display = "block";

        ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;
        ia_picture.src = pfc[ia];
        ia_picture.style.display = "block";
    });

    f[i].addEventListener("click", () => {
        console.log("f");
        player_picture.src = "../img/feuille.png";
        player_picture.style.display = "block";

        ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;
        ia_picture.src = pfc[ia];
        ia_picture.style.display = "block";
    });

    c[i].addEventListener("click", () => {
        console.log("c");
        player_picture.src = "../img/ciseaux.png";
        player_picture.style.display = "block";

        ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;
        ia_picture.src = pfc[ia];
        ia_picture.style.display = "block";
    });
}
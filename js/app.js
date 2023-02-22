let p = document.getElementById("p");
let f = document.getElementById("f");
let c = document.getElementById("c");

let imgs_left = document.getElementById("imgs_left");
let imgs_right = document.getElementById("imgs_right");

let player_picture = document.getElementById("player_picture");
let ia_picture = document.getElementById("ia_picture");

let pfc = ["../img/pierre.png", "../img/feuille.png", "../img/ciseaux.png"];
let ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;


p.addEventListener("click", () => {
    console.log("p");
    player_picture.src = "../img/pierre.png";
    player_picture.style.display = "block";

    ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;
    ia_picture.src = pfc[ia];
    ia_picture.style.display = "block";
    winner();
});

f.addEventListener("click", () => {
    console.log("f");
    player_picture.src = "../img/feuille.png";
    player_picture.style.display = "block";

    ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;
    ia_picture.src = pfc[ia];
    ia_picture.style.display = "block";
    winner();
});

c.addEventListener("click", () => {
    console.log("c");
    player_picture.src = "../img/ciseaux.png";
    player_picture.style.display = "block";

    ia = Math.floor(Math.random() * (pfc.length - 0)) + 0;
    ia_picture.src = pfc[ia];
    ia_picture.style.display = "block";
    winner();
});

function winner() {
    setTimeout(() => {
        if (player_picture.src == ia_picture.src) {
            alert("execo");
        }

        if (player_picture.src = "../img/pierre.png" && ia != 1 || ia != 0) {
            alert("Player WIN!");
        }
        
        // if (player_picture.src = "../img/feuille.png" && pfc[1]) {
        //     alert("ia win");
        // }
    }, 500);
}
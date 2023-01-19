let p = document.getElementsByClassName("p");
let f = document.getElementsByClassName("f");
let c = document.getElementsByClassName("c");

for (let i = 0; i < 2; i++) {
    p[i].addEventListener("click", () => {
        console.log("p");
    });

    f[i].addEventListener("click", () => {
        console.log("f");
    });

    c[i].addEventListener("click", () => {
        console.log("c");
    });
}
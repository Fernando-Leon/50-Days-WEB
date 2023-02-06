const open = document.getElementById("open");
const close = document.getElementById("close");
const main = document.getElementById("main");
const divBtn = document.getElementById("cont-btns");

open.addEventListener("click", () => {
    main.style.transform = "rotate(-20deg)";
    divBtn.style.transform = "rotate(-90deg)";
});

close.addEventListener("click", () => {
    main.style.transform = "rotate(0deg)";
    divBtn.style.transform = "rotate(0deg)";
});

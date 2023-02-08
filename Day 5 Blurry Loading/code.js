const bgImage = document.getElementById("bg-image");
const loaderNumber = document.getElementById("counter");

var number = 0;
var retroceso = 100;
var blur = 10;

var increment = setInterval( () => {
    number++;
    retroceso--;
    blur -= .10; 
    if(number <= 100) {
        loaderNumber.innerHTML = `${number}%`;
        loaderNumber.style.filter = `opacity(${retroceso}%)`;
        bgImage.style.filter = `blur(${blur}px)`;
    }
    else {
        clearInterval(increment);
        loaderNumber.style.display  = "none";
    }
}, 30);
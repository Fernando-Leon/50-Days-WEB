const btnS1 = document.getElementById('s-1');
const btnS2 = document.getElementById('s-2');
const btnS3 = document.getElementById('s-3');
const btnS4 = document.getElementById('s-4');
const btnS5 = document.getElementById('s-5');
const btnS6 = document.getElementById('s-6');
const s1 = new Audio("resources/p1.mp3");
const s2 = new Audio("resources/p2.mp3");
const s3 = new Audio("resources/p3.mp3");
const s4 = new Audio("resources/p4.mp3");
const s5 = new Audio("resources/p5.mp3");
const s6 = new Audio("resources/p6.mp3");

btnS1.addEventListener("click", () => { 
    
    s1.play();
});

btnS2.addEventListener("click", () => { 
    s2.play();
});

btnS2.addEventListener("click", () => { 
    s2.play();
});

btnS3.addEventListener("click", () => { 
    s3.play();
});

btnS4.addEventListener("click", () => { 
    s4.play();
});

btnS5.addEventListener("click", () => { 
    s5.play();
});

btnS6.addEventListener("click", () => { 
    s6.play();
});
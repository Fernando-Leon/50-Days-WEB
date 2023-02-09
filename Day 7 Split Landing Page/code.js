const main = document.getElementById('main');
const play = document.getElementById('play');
const xbox = document.getElementById('xbox');

play.addEventListener("mousemove", () =>{
    main.style.gridTemplateColumns = '5fr 1fr';
});

play.addEventListener("mouseleave", () =>{
    main.style.gridTemplateColumns = '1fr 1fr';
});

xbox.addEventListener("mousemove", () =>{
    main.style.gridTemplateColumns = '5fr 1fr';
});

xbox.addEventListener("mouseleave", () =>{
    main.style.gridTemplateColumns = '1fr 1fr';
});
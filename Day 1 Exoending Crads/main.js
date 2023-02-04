const main = document.getElementById('main');


const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const card5 = document.getElementById('card-5');

card1.addEventListener('click', () => {
    main.style.gridTemplateColumns = "10fr 1fr 1fr 1fr 1fr";
});

card2.addEventListener('click', () => {
    main.style.gridTemplateColumns = "1fr 10fr 1fr 1fr 1fr";
});

card3.addEventListener('click', () => {
    main.style.gridTemplateColumns = "1fr 1fr 10fr 1fr 1fr";
});

card4.addEventListener('click', () => {
    main.style.gridTemplateColumns = "1fr 1fr 1fr 10fr 1fr";
});

card5.addEventListener('click', () => {
    main.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 10fr";
});

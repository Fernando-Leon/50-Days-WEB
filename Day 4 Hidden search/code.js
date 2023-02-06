const input = document.getElementById("input-text");
const con = document.getElementById("search-container");

con.addEventListener("mouseover", () => {
    input.style.width ="200px";
    input.style.paddingLeft ="10px";
});

con.addEventListener("mouseout", () => {
    input.style.width = "0px";
    input.style.paddingLeft ="0px";
});

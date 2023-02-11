const inputEmail = document.getElementById('email');
const labelEmail = document.getElementById('email-label');
const inputPass = document.getElementById('pass');
const labelPass = document.getElementById('pass-label');

document.addEventListener("click", (e) => {
  if (inputEmail.contains(e.target)) {
    inputEmail.style.color = "#FFF";
    inputEmail.style.marginTop = "20px";
  } else {
    inputEmail.style.marginTop = "0px";
    inputEmail.style.color = "transparent";
  }
});

document.addEventListener("click", (e) => {
    if (inputPass.contains(e.target)) {
      inputPass.style.color = "#FFF";
      inputPass.style.marginTop = "20px";
    } else {
      inputPass.style.marginTop = "0px";
      inputPass.style.color = "transparent";
    }
  });
 
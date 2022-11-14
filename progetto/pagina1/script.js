let checkbox = document.getElementById("checkbox");
let ancor = document.getElementById("btn-proceed");

// evento sul click deòlla checkbox
checkbox.addEventListener("click", function () {
  // se la checkbox è checked, cambia colore del bottone e rendilo usufruibile
  if (checkbox.checked) {
    ancor.setAttribute("href", "https://www.google.com");

    ancor.style.backgroundColor = "#00FFFF";
    ancor.style.boxShadow = "0 10px 50px 5px #00ffff";
  }
});

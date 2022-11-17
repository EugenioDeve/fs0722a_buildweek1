let checkbox = document.getElementById("checkbox");
let ancor = document.getElementById("btn-proceed");

// evento sul click deòlla checkbox
checkbox.addEventListener("click", function () {
  // se la checkbox è checked, cambia colore del bottone e rendilo usufruibile
  if (checkbox.checked) {
    ancor.setAttribute("href", "../pagina2FattaDecente/pagina2.html");

    ancor.style.backgroundColor = "#00FFFF";
    ancor.style.boxShadow = "0 10px 50px 5px #00ffff";
  }

  else {
    ancor.setAttribute('href', " ")
    ancor.style.backgroundColor = 'darkGray'
    ancor.style.boxShadow = '0 10px 50px 5px black'
  }

});

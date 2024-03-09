document.addEventListener("DOMContentLoaded", function () {
  var provincias = {
    "San José": [
      "San José",
      "Escazú",
      "Desamparados",
      "Puriscal",
      "Tarrazú",
      "Aserrí",
      "Mora",
      "Goicoechea",
      "Santa Ana",
      "Alajuelita",
      "Vásquez de Coronado",
      "Acosta",
      "Tibás",
      "Moravia",
      "Montes de Oca",
      "Turrubares",
      "Dota",
      "Curridabat",
      "Pérez Zeledón",
    ],
    Alajuela: [
      "Alajuela",
      "San Ramón",
      "Grecia",
      "San Mateo",
      "Atenas",
      "Naranjo",
      "Palmares",
      "Poás",
      "Orotina",
      "San Carlos",
      "Zarcero",
      "Valverde Vega",
      "Upala",
      "Los Chiles",
      "Guatuso",
    ],
    Cartago: [
      "Cartago",
      "Paraíso",
      "La Unión",
      "Jiménez",
      "Turrialba",
      "Alvarado",
      "Oreamuno",
      "El Guarco",
    ],
    Heredia: [
      "Heredia",
      "Barva",
      "Santo Domingo",
      "Santa Bárbara",
      "San Rafael",
      "San Isidro",
      "Belén",
      "Flores",
      "San Pablo",
      "Sarapiquí",
    ],
    Guanacaste: [
      "Liberia",
      "Nicoya",
      "Santa Cruz",
      "Bagaces",
      "Carrillo",
      "Cañas",
      "Abangares",
      "Tilarán",
      "Nandayure",
      "La Cruz",
      "Hojancha",
    ],
    Puntarenas: [
      "Puntarenas",
      "Esparza",
      "Buenos Aires",
      "Montes de Oro",
      "Osa",
      "Quepos",
      "Golfito",
      "Coto Brus",
      "Parrita",
      "Corredores",
      "Garabito",
    ],
    Limón: ["Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"],
  };

  var inputState = document.getElementById("inputState");
  var inputCanton = document.getElementById("inputCanton");

  inputState.addEventListener("change", function () {
    var selectedProvincia = inputState.value;
    var cantones = provincias[selectedProvincia] || [];

    // Limpiar opciones anteriores
    inputCanton.innerHTML = "<option selected>Selecciona un cantón...</option>";

    // Agregar nuevas opciones
    cantones.forEach(function (canton) {
      var option = document.createElement("option");
      option.textContent = canton;
      inputCanton.appendChild(option);
    });
    var selectedCanton = inputCanton.value;
    inputCanton.value = selectedCanton;
  });

  var submitButton = document.getElementById("submit");
  var successAlert = document.getElementById("alert-success");

  submitButton.addEventListener("submit", function () {
    // Show the success alert
    successAlert.removeAttribute("hidden");
  });
});

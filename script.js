// All Those Pokemon!

// One random pokemon
document.getElementById("btn1").addEventListener("click", randomPokemon);
let pokemon;
fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (pokemon = strData.split(/\r?\n/)));

function randomPokemon() {
  var rand = randomInt(0, pokemon.length);
  var randPokemon = pokemon[rand];
  var randPokemonName = capitalizeFirstLetter(randPokemon);
  console.log(randPokemonName);
  document.getElementById(
    "span1"
  ).innerHTML = `<br><img id=""src="images/${randPokemon}.png"><br>${randPokemonName}`;
}

function capitalizeFirstLetter(str) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

// Random team
document.getElementById("btn2").addEventListener("click", randTeam);
function randTeam() {
  document.getElementById("span2").innerHTML = "";
  for (var i = 0; i < 3; i++) {
    var rand = randomInt(0, pokemon.length);
    var randPokemon = pokemon[rand];
    var randPokemonName = capitalizeFirstLetter(randPokemon);
    var rand2 = randomInt(0, pokemon.length);
    var randPokemon2 = pokemon[rand2];
    var randPokemonName2 = capitalizeFirstLetter(randPokemon2);
    console.log(randPokemonName);
    console.log(randPokemonName2);
    document.getElementById(
      "span2"
    ).innerHTML += `<br><img src="images/${randPokemon}.png"><img src="images/${randPokemon2}.png"<br><br>${randPokemonName}, ${randPokemonName2}`;
  }
}

// Starting letter
document.getElementById("input1").addEventListener("change", startingLetter);

function startingLetter() {
  var output = "";
  var letter = document.getElementById("input1").value;
  for (var i = 0; i < pokemon.length; i++) {
    var pokemonName = capitalizeFirstLetter(pokemon[i]);
    if (pokemonName.charAt(0) == letter) {
      output += `${pokemonName} <img class="list" src="images/${pokemon[i]}.png">, `;
    }
  }

  var oldOutput = output;
  output = oldOutput.substring(0, oldOutput.length - 2);
  document.getElementById("div1").innerHTML = output;
  var nodeList = document.querySelectorAll(".list");
  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].style.width = "20px";
  }
}

// letter length
document.getElementById("input2").addEventListener("change", letterLength);

function letterLength() {
  var output = "";
  var length = +document.getElementById("input2").value;
  for (var i = 0; i < pokemon.length - 1; i++) {
    var pokemonName = capitalizeFirstLetter(pokemon[i]);
    if (pokemonName.length == length) {
      output += `${pokemonName} <img class="list" src="images/${pokemonName}.png">, `;
    }
  }
  var oldOutput = output;
  output = oldOutput.substring(0, oldOutput.length - 2);
  document.getElementById("div2").innerHTML = output;

  var nodeList = document.querySelectorAll(".list");
  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].style.width = "20px";
  }
}

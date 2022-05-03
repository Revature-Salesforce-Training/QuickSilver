document.querySelector('#btn').addEventListener("click", getInfo);

async function getInfo() {
    //text input a value into the query selector
   let pokemon = document.querySelector('#textInput').value;
   //fetch the website
   let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
   //translate to json
   let parsedRes = await res.json();
   
   let myDiv = document.querySelector('#myDiv');
   //clearing the Div to an empty string.
   myDiv.innerHTML = "";
   //equating pokemonAbilities to parsed.abilities
   let pokemonAbilities = parsedRes.abilities;
   //a for loop that searches through the Pokemon Abilities, to select the element from the query, and append the element to the display.
   for(let i = 0; i < pokemonAbilities.length; i++) {
       let pElem = document.createElement('p');
       console.log(pokemonAbilities[i].ability.name);
       pElem.innerText = pokemonAbilities[i].ability.name;
       myDiv.appendChild(pElem)
   }
}


//Below is the code for the potential Swim API, which now might work after I realized my error.
//var request = new XMLHttpRequest();

//request.open('GET', `https://private-anon-93194e1f0c-olympicsapi.apiary-mock.com/scrape/athletes%27`);

//request.onreadystatechange = function () {
  //if (this.readyState === 4) {
    //console.log('Status:', this.status);
    //console.log('Headers:', this.getAllResponseHeaders());
   // console.log('Body:', this.responseText);
  //}
//};

//request.send();
document.querySelector('#btn').addEventListener("click", getInfo);

async function getInfo() {
   let pokemon = document.querySelector('#textInput').value;
   let res = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');
   let parsedRes = await res.json();
   let myDiv = document.querySelector('#myDiv');
   myDiv.innerHTML = "";
   let pokemonAbilities = parsedRes.abilities;
   for(let i = 0; i < pokemonAbilities.length; i++) {
       let pElem = document.createElement('p');
       pElem.innerText = pokemonAbilities[i].ability.name;
       myDiv.appendChild(pElem)
   }
}

//var request = new XMLHttpRequest();

//request.open('GET', 'https://private-anon-93194e1f0c-olympicsapi.apiary-mock.com/scrape/athletes%27);

//request.onreadystatechange = function () {
  //if (this.readyState === 4) {
    //console.log('Status:', this.status);
    //console.log('Headers:', this.getAllResponseHeaders());
   // console.log('Body:', this.responseText);
  //}
//};

//request.send();
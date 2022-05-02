/*
    Author: Nate Kappler
    Last Edited: 5/1/22
    Description: A sinple html page that queries an external star wars API to find a chacter and list their attributes
*/

document.querySelector('#inputButt').addEventListener("click", search);
let searchData = document.querySelector('#charInfo');

//https://swapi.dev/api/people/1
//https://swapi.dev/api/people/?search=${Query}

/*
    Name:

*/

function search(){
    // console.log("bababooey");
    let Query = document.querySelector('#input').value
    let res = fetch(`https://swapi.dev/api/people/?search=${Query}`)
    .then((value) => {
        return value.json();
    })
    .then((result) => { 
        if(result.count != 0){
            searchData.innerHTML = '';
            let info = document.createElement('li');

            info.innerHTML = "Full Name: " + result.results[0].name;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Birth Year: " + result.results[0].birth_year;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Eye-Color: " + result.results[0].eye_color;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Gender: " + result.results[0].gender;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Hair-Color: " + result.results[0].hair_color;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Height: " + result.results[0].height;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Mass: " + result.results[0].mass;
            searchData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Skin-Color: " + result.results[0].skin_color;
            searchData.appendChild(info);
        }
        else
            searchData.innerHTML = 'Character Not found';
    });
}


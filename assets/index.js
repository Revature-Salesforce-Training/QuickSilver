/*
    Author: Nate Kappler
    Last Edited: 5/1/22
    Description: A sinple html page that queries an external star wars API to find a chacter and list their attributes
*/

document.querySelector('#inputButt').addEventListener("click", search);
let searchData = document.querySelector('#charInfo');
let filmData = document.querySelector('#filmInfo');
let shipData = document.querySelector('#shipInfo');
let vehData = document.querySelector('#vehicleInfo');

function search(){
    let Query = document.querySelector('#input').value
    searchData.innerHTML = '';
    filmData.innerHTML = '';
    shipData.innerHTML = '';
    vehData.innerHTML = '';
    let res = fetch(`https://swapi.dev/api/people/?search=${Query}`)
    .then((value) => {
        return value.json();
    })
    .then((result) => { 
        if(result.count != 0){
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


            //Get the films of the character
            if(result.results[0].films != ''){
                for(let i=0;i < result.results[0].films.length; i++){
                    res1 = fetch(result.results[0].films[i])
                    .then((value1) => {
                        return value1.json();
                    })
                    .then((result1) => { 
                            info = document.createElement('li');
                            info.innerHTML = result1.title;
                            filmData.appendChild(info);
                    });
                }
            }
            else{
                info = document.createElement('li');
                info.innerHTML = "This character does not appear in any films"
                filmData.appendChild(info);
            }


            //Get the starships associated with this character
            if(result.results[0].starships != ''){
                for(let i=0;i < result.results[0].starships.length; i++){
                    res1 = fetch(result.results[0].starships[i])
                    .then((value1) => {
                        return value1.json();
                    })
                    .then((result1) => { 
                            info = document.createElement('li');
                            info.innerHTML = result1.name;
                            shipData.appendChild(info);
                    });
                }
            }
            else{
                info = document.createElement('li');
                info.innerHTML = "This character is not associated with any starships"
                shipData.appendChild(info);
            }


            //Get the vehicles associated with this character
            if(result.results[0].vehicles != ''){
                for(let i=0;i < result.results[0].vehicles.length; i++){
                    res1 = fetch(result.results[0].vehicles[i])
                    .then((value1) => {
                        return value1.json();
                    })
                    .then((result1) => { 
                            info = document.createElement('li');
                            info.innerHTML = result1.name;
                            vehData.appendChild(info);
                    });
                }
            }
            else{
                info = document.createElement('li');
                info.innerHTML = "This character is not associated with any vehicles"
                vehData.appendChild(info);
            }

        }
        else{
            searchData.innerHTML = 'Character Not found';
            info = document.createElement('li');
            info.innerHTML = "Films:";
            filmData.appendChild(info);

            info = document.createElement('li');
            info.innerHTML = "Ships:";
            shipData.appendChild(info);
            
            info = document.createElement('li');
            info.innerHTML = "Vehicles:";
            vehData.appendChild(info);
        }
    });

    
}


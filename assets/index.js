/*
    Author: Nate Kappler
    Last Edited: 5/2/22
    Description: Javascript to implement the external API's search function and display it on the screen
*/

//Defining variables and event listener 
document.querySelector('#inputButt').addEventListener("click", search);
let searchData = document.querySelector('#charInfo');
let filmData = document.querySelector('#filmInfo');
let shipData = document.querySelector('#shipInfo');
let vehData = document.querySelector('#vehicleInfo');
let staringln = document.querySelector('#StartLn');

//Main function that will start when search button is pressed
function search(){
    let Query = document.querySelector('#input').value
    //Erase all html data for fresh start
    staringln.innerHTML = '';
    searchData.innerHTML = '';
    filmData.innerHTML = '';
    shipData.innerHTML = '';
    vehData.innerHTML = '';
    //Query external API to search for character
    let res = fetch(`https://swapi.dev/api/people/?search=${Query}`)
    .then((value) => {
        return value.json();
    })
    .then((result) => { 
        if(result.count != 0){ //If there is a character matching the search query
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


            //Get the films with the character in them
            if(result.results[0].films != ''){ //If the character stars in any of the movies
                info = document.createElement('li');
                info.innerHTML = "Films:";
                info.setAttribute("style", "list-style-type: none;"); //Takes away the bullet point for a nicer look
                filmData.appendChild(info);

                for(let i=0;i < result.results[0].films.length; i++){ //Iterate through the list of films and add them to the filmInfo list
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
            else{ //If the character does NOT star in any of the movies
                info = document.createElement('li');
                info.innerHTML = "This character does not appear in any films"
                filmData.appendChild(info);
            }


            //Get the starships associated with this character
            if(result.results[0].starships != ''){ //If the character is associated with any starships
                info = document.createElement('li');
                info.innerHTML = "Ships:";
                info.setAttribute("style", "list-style-type: none;"); //Takes away the bullet point for a nicer look
                shipData.appendChild(info);

                for(let i=0;i < result.results[0].starships.length; i++){ //Iterate through the list of starships and add them to the shipInfo list
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
            else{ //If the character is NOT associated with any starships
                info = document.createElement('li');
                info.innerHTML = "This character is not associated with any starships"
                shipData.appendChild(info);
            }


            //Get the vehicles associated with this character
            if(result.results[0].vehicles != ''){ //If the character is associated with any vehicles
                info = document.createElement('li');
                info.innerHTML = "Vehicles:";
                info.setAttribute("style", "list-style-type: none;"); //Takes away the bullet point for a nicer look
                vehData.appendChild(info);

                for(let i=0;i < result.results[0].vehicles.length; i++){ //Iterate through the list of starships and add them to the vehicleInfo list
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
            else{ //If the character is NOT associated with any vehicles
                info = document.createElement('li');
                info.innerHTML = "This character is not associated with any vehicles"
                vehData.appendChild(info);
            }

        }
        else{ //If no charcter can be found matching the search query
            searchData.innerHTML = 'Character Not found';
            searchData.setAttribute("style", "position: relative;top: 20px;"); //Shifts the text down for a nicer look
            filmData.innerHTML = '';
            shipData.innerHTML = '';
            vehData.innerHTML = '';
        }
    });

    
}


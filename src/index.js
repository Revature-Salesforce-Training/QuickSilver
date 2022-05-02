import _ from 'lodash';
import wtf from 'wtf_wikipedia'

// go to main folder
// npx webpack
// go to dist folder
// start server

let cowtext = document.getElementById('cowtext');
document.addEventListener('click', async function(e) {
    let element = e.target;
    if(element.tagName == "BUTTON"){
		// TO SET TEXT: cowtext.textContent =
		let entry = document.getElementById("textinput").value;
		let title = await getTitle(entry);
		let sents = await getSents(title);
		const sent = sents[Math.floor(Math.random() * sents.length)];
		// Max: 612
		cowtext.textContent = sent.substring(0, 612);
    }
});

async function getTitle(entry)
{
	let fetchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${entry}`);
	let parsedFetchRes = await fetchRes.json();
	console.log(parsedFetchRes.query.search[0].title);
	return parsedFetchRes.query.search[0].title;
}

async function getSents(entry)
{
	let doc = await wtf.fetch(entry)
	const sents = new Array();
	for (let i = 0; i < doc.sentences().length; i++)
	{
		//console.log(doc.sentences()[i].text());
		sents.push(doc.sentences()[i].text())
	}
	return sents
	//console.log(coach.text()) //'Nick Nurse'
}

//let a;
//getTitle('War').then(function(value) {a = value;}).catch(function(error) {throw error.statusText;})
//console.log(a);

//getTitle('graa');

//getSents();

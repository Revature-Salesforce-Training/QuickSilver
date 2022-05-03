/*
    Author: Alex Griggs
    last updated: 5/2/22
    description: JS for an interactive webpage that displays text from wikipedia
*/

import _ from 'lodash';
import wtf from 'wtf_wikipedia'

/*
To compile and run:
go to main folder
"npx webpack" in console
go to dist folder
start server
*/

let cowText = document.getElementById('cowText');

// The only user triggered function, detects a button click and calls the other functions to get wiki text
document.addEventListener('click', async function(e) {
    let element = e.target;
    if(element.tagName == "BUTTON"){
		let entry = document.getElementById("textinput").value;
		if (entry == '') {return;}
		try
		{
			let title = await getTitle(entry);
			let sents = await getSents(title);
			const sent = sents[Math.floor(Math.random() * sents.length)];
			// Max chars: 612
			cowText.textContent = sent.substring(0, 612);
		}
		catch (err)
		{
			console.log(err.message);
			cowText.textContent = "I don't want to talk about that.";
		}
    }
});

// Given an arbitrary string, tries to produce the title of a wikipedia article (like a search bar)
async function getTitle(entry)
{
	let fetchRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${entry}`);
	let parsedFetchRes = await fetchRes.json();
	console.log(parsedFetchRes.query.search[0].title);
	return parsedFetchRes.query.search[0].title;
}

// Given the title of an article, produces an array of plaintext sentences from it
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
}
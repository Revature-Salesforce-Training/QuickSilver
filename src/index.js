import _ from 'lodash';
import wtf from 'wtf_wikipedia'

// go to main folder
// npx webpack
// go to dist folder
// start server

function component()
{
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');



	return element;
}

function getTitle(entry)
{
	fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${entry}`)
	.then(r => r.json())
	.then(res => console.log(res.query.search[0].title));
}

async function getSents()
{
	let doc = await wtf.fetch('War')
	const sents = new Array();
	for (let i = 0; i < doc.sentences().length; i++)
	{
		console.log(doc.sentences()[i].text());
		sents.push(doc.sentences()[i].text())
	}
	//console.log(coach.text()) //'Nick Nurse'
}

//let a;
//getTitle('War').then(function(value) {a = value;}).catch(function(error) {throw error.statusText;})
//console.log(a);

getTitle('graa');

//getSents();
document.body.appendChild(component());
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

getSents();
document.body.appendChild(component());
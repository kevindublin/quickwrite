const draftAreaContainer = document.getElementById('draftAreaContainer');
const wordCountDisplay = document.getElementById('wordCounter');
// const Draft = modulo.stores.Draft.data;

console.log("DraftArea.js loaded");


// Word count functionality

function countWords() { 
	const draftAreaContainer = document.getElementById('draftAreaContainer');
	const wordCountDisplay = document.getElementById('wordCount');
    let wordCount = draftAreaContainer.value.trim().split(/\s+/).length;
	wordCountDisplay.innerHTML = `Word Count: ${wordCount}`;
	console.log(wordCount);
}

// Force textArea to store text in state :'(

function writeWords() {
    const draftAreaContainer = document.getElementById('draftAreaContainer');
	const Draft = draftAreaContainer.value;
	console.log(Draft);
}

// Draft Area Functionality
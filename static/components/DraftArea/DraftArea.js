const session = modulo.stores.session.data;

console.log("DraftArea.js loaded", session);


// Word count functionality

function countWords() { 
	console.log("countWords() called");
	session.draft_count = session.draft_quickwrite.trim().split(/\s+/).length;
}
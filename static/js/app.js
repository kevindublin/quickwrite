let offline_data = {}
let data = {"1": "sorry, you're offline..."}

let i = randInt()
let rand = randInt(i)
let randtwo = Math.round(Math.random() * 100);
const element = document.querySelector('.drip-words');
time_in_minutes = 6;
writemode = false;
current_time = Date.parse(new Date());
deadline = new Date(current_time + time_in_minutes*60*1000);
let timeinterval;
let paused = false; // is the clock paused?
let time_left; // time left on the clock when paused
const modal = document.getElementById("modal");

function randInt() {
	let max = 100;
	let i = Math.round(Math.random() * max);
return i
}

// Manually Generated State

/*

	let state = {
		writemode: false,
		offline_data: {},
		drip_words: [],
		question: "",
		image: "",
		wordCount: 0,
		draft: "",
		time_left: 360,
		paused: false,
		modal: false,

	}

*/

// Mode Switch Component


  /*

	function switchMode() {
		const readmodeButton = document.getElementById('readModeButton');
		const writemodeButton = document.getElementById('writeModeButton');
		const DraftArea = document.getElementsByTagName('x-draftarea');
		const writingContainer = document.getElementById('draftAreaContainer');
		const readingContainer = document.getElementById('dailyReadContainer');
		const DailyRead = document.getElementsByTagName('x-dailyread');

		if (writemode) {
			writemode = false;
			pause_clock();
			readmodeButton.classList.add('is-active');
			writemodeButton.classList.remove('is-active');
			writingContainer.readOnly = true;
			DraftArea.style.display = "none";
			DailyRead.style.display = "flex";
		} else if (!writemode) {
			readmodeButton.classList.remove('is-active');
			writemodeButton.classList.add('is-active');
			writingContainer.readOnly = false;
			DraftArea.style.display = "flex";
			DailyRead.style.display = "none";
			writemode = true;
			resume_clock();
		} else {
			console.log("Error: Mode not set");
		}

	}
	*/

// Draft Area Component

		/*
	function countWords() { 
		const draftAreaContainer = document.getElementById('draftAreaContainer');
		const wordCountDisplay = document.getElementById('wordCount');
		let wordCount = draftAreaContainer.value.trim().split(/\s+/).length;
		wordCountDisplay.innerHTML = `Word Count: ${wordCount}`;
		console.log(wordCount);
	}

	function writeWords() {
		const draftAreaContainer = document.getElementById('draftAreaContainer');
		const Draft = draftAreaContainer.value;
		console.log(Draft);
	}
		*/

/*
// Question Prompt Component

function getQuestion() {
	let q = Math.round(Math.random() * 100);
	let pack = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
	console.log(q, pack);
	let question = offline_data.questions["prompt-packs"][pack][q]
	document.getElementById("question-prompt").textContent = question
}

function newQuestion(pack) {
	let question = offline_data.questions["prompt-packs"][pack].at(Math.round(Math.random() * 100));
	return question

}

// Image Prompt Component

function refreshImage() {
	let rand = Math.round(Math.random() * 100);
	let choices = ["nouns", "adjectives", "verbs", "lightwords", "compounds"];
	let choice = choices[Math.floor(Math.random() * choices.length)];
	let randword = offline_data.words[choice][rand];
	console.log(choice, rand, randword);
	let image = `https://picsum.photos/seed/${randword}/1280/720?random=${rand}`
	document.getElementById("prompt-image").src = image
}

// Word Drip Component

function newWord(type) {

	let word = offline_data.words[type].at(Math.round(Math.random() * 100));
	return word
	
	}
	
	*/
// Timer Component

/*
	
	}

	function time_remaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor( (t/1000) % 60 );
		let minutes = Math.floor( (t/1000/60) % 60 );
		let hours = Math.floor( (t/(1000*60*60)) % 24 );
		let days = Math.floor( t/(1000*60*60*24) );
		return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
	}


	function run_clock(id,endtime){
		let clock = document.getElementById(id);
		function update_clock(){
			let t = time_remaining(endtime);
			t.minutes = t.minutes < 10 ? "0" + t.minutes : t.minutes;
		t.seconds = t.seconds < 10 ? "0" + t.seconds : t.seconds;
			clock.innerHTML = t.minutes + ":" + t.seconds;
			if(t.total<=0){ clearInterval(timeinterval);
				document.getElementById("draftAreaContainer").readOnly = true;
			}

			if(t.minutes==5 && t.seconds==0){
				dripWordOne.textContent += "| " + wordOne;
		}

			if(t.minutes==4 && t.seconds==0){
				dripWordTwo.textContent += " | " + wordTwo;
		}

			if(t.minutes==3 && t.seconds==0){
		dripWordThree.textContent += " | " + wordThree;
		}

			if(t.minutes==2 && t.seconds==0){
		dripWordFour.textContent += " | " + wordFour;
		}

			if(t.minutes==1 && t.seconds==0){
		dripWordFive.textContent += " | " + wordFive + " |";
		}
			if(t.minutes==0 && t.seconds==0){
				document.getElementById("draftAreaContainer").readOnly = true;
				clock.innerHTML = "00:00 | Time's up!";
		}

		}
		update_clock(); // run function once at first to avoid delay
		timeinterval = setInterval(update_clock,1000);
	}


	function pause_clock(){
		if(!paused){
			paused = true;
			//disable editor on pause
			document.getElementById("draftAreaContainer").readOnly = true;

			clearInterval(timeinterval); // stop the clock
			time_left = time_remaining(deadline).total; // preserve remaining time
		}
	}


	function resume_clock(){
		if(paused){
			paused = false;
			//activate editor on resume
			document.getElementById("draftAreaContainer").readOnly = false;
			// update the deadline to preserve the amount of time remaining
			deadline = new Date(Date.parse(new Date()) + time_left);

			// start the clock
			run_clock('timer-disp', deadline);
		}
	}

	// handle pause and resume button clicks
	function checkPaused(){
		if(paused){
			resume_clock();
		}else if(time_in_minutes = 6){
			appStart();
		}else{
			pause_clock();
		}
	}

	function addTime(){
		if (time_left < 360000){
			deadline = new Date(Date.parse(new Date()) + time_left + 30000);
			run_clock('timer-disp', deadline);
		}
	}

	*/

// Draft Controls Component
/*
	function exportDraft() {
		const text = document.getElementById("draftAreaContainer").value
		// Set date for filename
		const date = new Date();
		let options = new Intl.DateTimeFormat(date).resolvedOptions();
		let draft_date = new Intl.DateTimeFormat('en-GB', {
			dateStyle: 'medium',
			timeZone: options.timeZone,
		}).format(date).replaceAll(" ", "_");

		// save file as text with blob
		let filename = `${draft_date}_quick_write.txt`
		let blob = new Blob([text], {type: 'text/plain'})
		let url = URL.createObjectURL(blob)
		let a = document.createElement("a")
		a.href = url
		a.download = filename
		a.click()
	}
*/

// Modal

	function closeModal(modal) {
		modal.style.display="none";
		modal.classList.remove('is-active');
		checkPaused();
	}

	function clearDraft() {
		checkPaused();
		document.getElementById("draftAreaContainer").value = ""
		checkPaused();
		closeModal(modal);
	}

	function discardDraft(message) {
		checkPaused();
		const modalMessage = document.getElementById("modal-message");
		modalMessage.textContent = message;
		modal.style.display = "block";
		modal.classList.add('is-active')
	}


// App Start

	function appStart() {
			const api_url = "https://engageus.app/write.json"
			fetch(api_url)
			.then(response => response.json())
			.then(data => {
				console.log("Response:", data);
				offline_data = data

				wordOne = offline_data.words["nouns"][Math.round(Math.random() * 100).toString()];
				wordTwo = offline_data.words["adjectives"][Math.round(Math.random() * 100).toString()];
				wordThree = offline_data.words["verbs"][Math.round(Math.random() * 100).toString()];
				wordFour = offline_data.words["lightwords"][Math.round(Math.random() * 100).toString()];
				wordFive = offline_data.words["compounds"][Math.round(Math.random() * 100).toString()];

				console.log(wordOne, wordTwo, wordThree, wordFour, wordFive);
				document.getElementById("draftAreaContainer").readOnly = false;
			})
			.catch(error => {
				console.log("error", error);
			});

			document.getElementById("draftAreaContainer").readOnly = false;

			// Word count functionality
			const draftAreaContainer = document.getElementById('draftAreaContainer');
			const wordCountDisplay = document.getElementById('wordCounter');

			draftAreaContainer.addEventListener('input', () => {
				const wordCount = draftAreaContainer.value.trim().split(/\s+/).length;
				wordCountDisplay.textContent = `Word Count: ${wordCount}`;
			});

			// 6 minutes from now
			time_in_minutes = 6;
			current_time = Date.parse(new Date());
			deadline = new Date(current_time + time_in_minutes*60*1000);
			dripBank = document.getElementById("dripBank");
			dripWordOne = document.getElementById("word-1");
			dripWordTwo = document.getElementById("word-2");
			dripWordThree = document.getElementById("word-3");
			dripWordFour = document.getElementById("word-4");
			dripWordFive = document.getElementById("word-5");

			run_clock('timer-disp',deadline);


		}

	
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
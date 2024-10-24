// Draft Controls Component

console.log("DraftControls.js component loaded");

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

// Modal Component

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
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

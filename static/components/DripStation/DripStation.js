// Description: This file contains the DripStation component which is responsible for the WordDrip, Timer, and Timer Control features
const session = modulo.stores.session.data;



function randInt() {
    let max = 100;
    let i = Math.round(Math.random() * max);
return i

}


// Word Drip Component

function newWord(type) {

    let word = offline_data.words[type].at(Math.round(Math.random() * 100));
    return word
    
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

function addTime(){
    if (time_left < 360000){
        deadline = new Date(Date.parse(new Date()) + time_left + 30000);
        run_clock('timer-disp', deadline);
    }
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


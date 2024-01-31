//defining opening hours for each day

const openingHours = {
    mandag: {open:9, close: 17},
    tirsdag: {open:9, close: 17},
    onsdag: {open:null, close:null},
    torsdag: {open:9, close: 16.5},
    fredag: {open:9, close: 16},
    lørdag: {open:null, close:null},
    søndag: {open:null, close:null},
}

// Get the current day and time

let today = new Date();

//get hours and get minutes

let currentDay = today.toLocaleDateString("da-DK",{weekday: "long"}).toLowerCase;

let currentHour = today.getHours();
let currentMinute = today.getMinutes();

let currentOpeningHours = openingHours[currentDay]

let openingHoursMessage = "Lukket idag, kom tilbage igen imorgen";

//check if its a working day

if(currentOpeningHours){
    //check if its closed
    if(currentOpeningHours.open === null || currentOpeningHours.close === null){
        currentOpeningHours;
    }
    else{
        //caluculate timer  until closing
        let timeUntilClosing = (currentOpeningHours.close - currentHour)* 60 - currentMinute;
       
        if(timeUntilClosing>180) {
            openingHoursMessage = `Åben til ${currentOpeningHours.close}:00. Nyd din dag!`
        }

        else if(timeUntilClosing>120) {
            openingHoursMessage = `Lukker snart. Åben til ${currentOpeningHours.close}:00. Nyd din dag!`
        }

        else if(timeUntilClosing>60) {
            openingHoursMessage = `Lukker meget snart. Åben til ${currentOpeningHours.close}:00. Nyd din dag!`
        }

        else if(timeUntilClosing>0) {
            openingHoursMessage = `Lukker om en time ${currentOpeningHours.close}:00. Nyd din dag!`
        }
        else{
            openingHoursMessage;
        }
    }
 
}
else{
    openingHoursMessage;
}

let message = document.getElementById("openingHoursMessage");
message.textContent = openingHoursMessage;
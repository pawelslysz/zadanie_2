let current;
let currentStreakNumber;
let bestStreakNumber;
let time;
let userName;
let mToAchieve;
let first;
let second;
let third;
let minutes_1;
let minutes_2;
let minutes_3;
let minutes_4;
let yourPlace;

function week() {
    current = 38;
    currentStreakNumber = 4;
    bestStreakNumber = 12;
    time = "WEEKLY";
    userName = "PEDRO";
    mToAchieve = 12;
    first = "Walter Wynne";
    second = "Annabel Ferdinand";
    third = "Marty McFly";
    minutes_1 = 105;
    minutes_2 = 52;
    minutes_3 = 50;
    minutes_4 = 38;
    yourPlace = 7;

    document.getElementById("currentMinutes").innerHTML = current + "m";

    current = current * 100 / 50;
    let number = 490 - (490 * current) / 100;
    document.getElementById("percent").style.strokeDashoffset = -number;
    
    document.getElementById("currentStreakNumber").innerHTML = currentStreakNumber;
    
    document.getElementById("bestStreakNumber").innerHTML = bestStreakNumber;

    document.getElementById("time").innerHTML = time;
    
    document.getElementById("mToAchieve").innerHTML = mToAchieve + " ";
    
    document.getElementById("name").innerHTML = userName;
    
    document.getElementById("first").innerHTML = first;
    document.getElementById("second").innerHTML = second;
    document.getElementById("third").innerHTML = third;
    
    document.getElementById("minutes_1").innerHTML = minutes_1 + "m";
    document.getElementById("minutes_2").innerHTML = minutes_2 + "m";
    document.getElementById("minutes_3").innerHTML = minutes_3 + "m";
    document.getElementById("minutes_4").innerHTML = minutes_4 + "m";

    document.getElementById("n__bb").innerHTML = yourPlace;
}

function month() {
    current = 12;
    currentStreakNumber = 7;
    bestStreakNumber = 44;
    time = "MONTHLY";
    userName = "PEDRO";
    mToAchieve = 186;
    first = "Annabel Ferdinand";
    second = "Marty McFly";
    third = "Walter Wynne";
    minutes_1 = 251;
    minutes_2 = 172;
    minutes_3 = 150;
    minutes_4 = 12;
    yourPlace = 9;
    
    document.getElementById("currentMinutes").innerHTML = current + "m";

    current = current * 100 / 50;
    let number = 490 - (490 * current) / 100;
    document.getElementById("percent").style.strokeDashoffset = -number;
    
    document.getElementById("currentStreakNumber").innerHTML = currentStreakNumber;
    
    document.getElementById("bestStreakNumber").innerHTML = bestStreakNumber;

    document.getElementById("time").innerHTML = time;
    
    document.getElementById("mToAchieve").innerHTML = mToAchieve + " ";
    
    document.getElementById("name").innerHTML = userName;
    
    document.getElementById("first").innerHTML = first;
    document.getElementById("second").innerHTML = second;
    document.getElementById("third").innerHTML = third;
    
    document.getElementById("minutes_1").innerHTML = minutes_1 + "m";
    document.getElementById("minutes_2").innerHTML = minutes_2 + "m";
    document.getElementById("minutes_3").innerHTML = minutes_3 + "m";
    document.getElementById("minutes_4").innerHTML = minutes_4 + "m";

    document.getElementById("n__bb").innerHTML = yourPlace;
}



function changeTime() {
    let timeSelect = document.getElementById("timeSelect").value;

    if (timeSelect == "week") {
        week();
    }
    else {
        month();
    }
}
//sets the arrays for each option
let place = ['store', 'beach', 'fair', 'reasterant', 'park'];

let family = ['mom', 'dad', 'brother', 'sister', 'grandma'];

let topic = ['news', 'gossip', 'school', 'work', 'nothing'];

let weather = ['sunny', 'rainy', 'cloudy', 'warm', 'cold'];

let feeling = ['good', 'bad', 'netural', 'eh', 'whatever'];

//button holders
const placeButton = document.querySelector('#placeButton');
const familyButton = document.querySelector('#familyButton');
const topicButton = document.querySelector('#topicButton');
const weatherButton = document.querySelector('#weatherButton');
const feelingButton = document.querySelector('#feelingButton');

//in order to change the outcome im changing the em to hold the array value
const emTopic = document.querySelector('#place');
const emFamily = document.querySelector('#family');
const emTopic = document.querySelector('#topic');
const emWeather = document.querySelector('#weather');
const emFeeling = document.querySelector('#feeling');

placeButton.addEventListener("click", setPlace);

familyButton.addEventListener("click", setFamily);

topicButton.addEventListener("click", setTopic);

weatherButton.addEventListener("click", setWeather);

feelingButton.addEventListener("click", setFeeling);

function setPlace() {

    for (let i = 0; i < place.length; i++){
        //check to see if element is an array
        if (place.isArray(place[i])){
            emPlace.textContent = place[i];
        }
        if (i > 4){
            i = 0
        }
}
}

function setFamily() {
    let count2 = 0;

    if (count2 > 5){
        let count1 = 0;
    }

}

function setTopic() {
    let count3 = 0;

    if (count3 > 5){
        let count1 = 0;
    }

}
function setWeather() {
    let count4 = 0;
    
    if (count4 > 5){
        let count1 = 0;
    }
}
function setFeeling() {
    let count5 = 0;
    
    if (count5 > 5){
        let count1 = 0;
    }
}
//sets the arrays for each option
let placeArray = ['store', 'beach', 'fair', 'reasterant', 'park'];

let familyArray = ['mom', 'dad', 'brother', 'sister', 'grandma'];

let topicArray = ['news', 'gossip', 'school', 'work', 'nothin'];

let weatherArray = ['sunny', 'rainy', 'cloudy', 'warm', 'cold'];

let feelingArray = ['good', 'bad', 'netural', 'eh', 'whatever'];

//button holders
const placeButton = document.querySelector('#placeButton');
const familyButton = document.querySelector('#familyButton');
const topicButton = document.querySelector('#topicButton');
const weatherButton = document.querySelector('#weatherButton');
const feelingButton = document.querySelector('#feelingButton');

//in order to change the outcome im changing the em to hold the array value
const emPlace = document.querySelector('#place');
const emFamily = document.querySelector('#family');
const emTopic = document.querySelector('#topic');
const emWeather = document.querySelector('#weather');
const emFeeling = document.querySelector('#feeling');

//sets all to work appon clicking it
placeButton.addEventListener("click", setPlace);

familyButton.addEventListener("click", setFamily);

topicButton.addEventListener("click", setTopic);

weatherButton.addEventListener("click", setWeather);

feelingButton.addEventListener("click", setFeeling);

let placeCount = 0;
        
function setPlace() {

    emPlace.textContent = `${placeArray[placeCount]}`;
    
    placeCount++;

    if (placeCount >= placeArray.length){
        placeCount = 0;
    }
    
    
}

function setFamily() {
   
    emFamily.textContent = `${familyArray[placeCount]}`;
    
    placeCount++;

    if (placeCount >= familyArray.length){
        placeCount = 0;
    }
    
}

function setTopic() {
   
    emTopic.textContent = `${topicArray[placeCount]}`;
    
    placeCount++;

    if (placeCount >= topicArray.length){
        placeCount = 0;
    }

}
function setWeather() {
   
    emWeather.textContent = `${weatherArray[placeCount]}`;
    
    placeCount++;

    if (placeCount >= weatherArray.length){
        placeCount = 0;
    }
}
function setFeeling() {
   
    emFeeling.textContent = `${feelingArray[placeCount]}`;
    
    placeCount++;

    if (placeCount >= feelingArray.length){
        placeCount = 0;
    }
}
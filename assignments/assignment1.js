//sets the arrays for each option
let placeArray = ['store', 'beach', 'fair', 'reasterant', 'park'];

let familyArray = ['mom', 'dad', 'brother', 'sister', 'grandma'];

let transportArray = ['drove', 'walked', 'biked', 'took the bus', 'taxi'];

let topicArray = ['news', 'gossip', 'school', 'work', 'nothin'];

let weatherArray = ['sunny', 'rainy', 'cloudy', 'warm', 'cold'];

let feelingArray = ['good', 'bad', 'netural', 'eh', 'whatever'];

//button holders
const placeButton = document.querySelector('#placeButton');
const familyButton = document.querySelector('#familyButton');
const transportButton = document.querySelector('#transportButton');
const topicButton = document.querySelector('#topicButton');
const weatherButton = document.querySelector('#weatherButton');
const feelingButton = document.querySelector('#feelingButton');

//in order to change the outcome im changing the em to hold the array value
const emPlace = document.querySelector('#place');
const emFamily = document.querySelector('#family');
const emTransport = document.querySelector('#transport');
const emTopic = document.querySelector('#topic');
const emWeather = document.querySelector('#weather');
const emFeeling = document.querySelector('#feeling');

//sets all to work appon clicking it
placeButton.addEventListener("click", setPlace);

familyButton.addEventListener("click", setFamily);

transportButton.addEventListener("click", setTransport);

topicButton.addEventListener("click", setTopic);

weatherButton.addEventListener("click", setWeather);

feelingButton.addEventListener("click", setFeeling);

//sets the counter for all the functions to use in changing the word 
let arrayCount = 0;
        
//comment on this function apply to all others with (*) <- this above it
function setPlace() {

    //changes the em value to the array veriable depending on what the array count is currently at
    emPlace.textContent = `${placeArray[arrayCount]}`;
    
    //adds to the count in order to cycle through
    arrayCount++;

    //if the array count is >= the length of the array it sets the count back to 0
    if (arrayCount >= placeArray.length){
        arrayCount = 0;
    }
    
    
}

//*
function setFamily() {
   
    emFamily.textContent = `${familyArray[arrayCount]}`;
    
    arrayCount++;

    if (arrayCount >= familyArray.length){
        arrayCount = 0;
    }
    
}
//*
function setTopic() {
   
    emTopic.textContent = `${topicArray[arrayCount]}`;
    
    arrayCount++;

    if (arrayCount >= topicArray.length){
        arrayCount = 0;
    }

}
//*
function setTransport() {
   
    emTransport.textContent = `${transportArray[arrayCount]}`;
    
    arrayCount++;

    if (arrayCount >= transportArray.length){
        arrayCount = 0;
    }

}
//*
function setWeather() {
   
    emWeather.textContent = `${weatherArray[arrayCount]}`;
    
    arrayCount++;

    if (arrayCount >= weatherArray.length){
        arrayCount = 0;
    }
}
//*
function setFeeling() {
   
    emFeeling.textContent = `${feelingArray[arrayCount]}`;
    
    arrayCount++;

    if (arrayCount >= feelingArray.length){
        arrayCount = 0;
    }
}
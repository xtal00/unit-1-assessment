// Cached element references
const counterEl = document.getElementById('counter');
const minusEl = document.querySelector('.minusButton');
const addEl = document.querySelector('.addButton');
const inputEl = document.querySelector('.input');

// Variables
let count = 0;
let inputVal = 1;

//When the "+" Button is Clicked
addEl.addEventListener('click', function(){
    if (inputVal != NaN){
    count += parseInt(inputEl.value);
    };
    counterEl.textContent = count;
    turnRed(count);
});


//When the "-" Button is Clicked
minusEl.addEventListener('click',function(){
    if (inputVal != NaN){
    count -= parseInt(inputEl.value);
    };
    counterEl.textContent = count;
    turnRed(count);
});

function turnRed(){
    if (count<0) {
        counterEl.style.color='red';
    }else{
        counterEl.style.color='black';
    };
}
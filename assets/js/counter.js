const textNumber = document.querySelector("#counter");
const minusButton = document.getElementById("minus-button");
const plusButton = document.querySelector("#plus-button");
let value = 0;

minusButton.addEventListener('click', function(){
    --value;
    textNumber.innerHTML = value;
});

plusButton.addEventListener('click', function(){
    ++value;
    textNumber.innerHTML = value;
});
const btnminus = document.createElement('button');
const btnplus = document.createElement('button');
const counter = document.createElement('h1');
let value = 0;
let minvalue = 0;
let maxvalue = 10;

btnminus.innerText='-';
btnminus.addEventListener('click', function(){
    value = Math.max(value - 1, minvalue);
    counter.innerText = value;
});
document.body.appendChild(btnminus);

counter.innerText = value;
document.body.appendChild(counter);

btnplus.innerText = '+';
btnplus.addEventListener('click', function(){
    value = Math.min(value + 1, maxvalue);
    counter.innerText = value;
});
document.body.appendChild(btnplus);
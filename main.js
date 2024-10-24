 var button = document.getElementById('btn_id');
var input = document.getElementById('input_id');
var input2 = document.getElementById('input2_id');
var h1 = document.getElementById('h1_id');

// button.onclick = function(){
//     h1.innerHTML = input.value;
// }

// button.onclick = funtion(){
//     h1.innerHTML = parseInt(input.value) + parseInt(input2.value);
// }

var button = document.getElementById('button1');
var age = document.getElementById('age');
var text = document.getElementById('text1')

button.onclick = function(){
    if(parseInt(age.value)>=18){
        text.innerHTML = "you can vote"
    }
    else{
        text.innerHTML = "you cannot vote"
    }
}


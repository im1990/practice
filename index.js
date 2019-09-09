const fizz = document.getElementById('fizz');
const buzz = document.getElementById('buzz');
const submit = document.getElementById('submit');
const output = document.querySelector('.output');


submit.addEventListener('click', function() {

    if(!isNaN(fizz.value) && !isNaN(buzz.value)){
        // output.innerHTML = `<br>Fizz ${fizz.value * 1}`;
        // output.innerHTML = `<br>Buzz ${buzz.value * 1}`;
        output.innerHTML = "";

        for(let i = 1; i <= 100; i++){
            if(i % fizz.value === 0 && i % buzz.value === 0){
                output.innerHTML += `<br>FizzBuzz ${i}`;
            } else if (i % fizz.value === 0){
                output.innerHTML += `<br>Fizz ${i}`;
            } else if (i % buzz.value === 0){
                output.innerHTML += `<br>Buzz ${i}`;
            }
        }
        
    } else {
        output.innerHTML = "整数値を入力してください";
    }

});




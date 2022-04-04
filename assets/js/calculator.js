function Enable(buttonElement){
    var submit = document.getElementById("submit");
    submit.disabled = false;
    console.log('value in enable function is ' + buttonElement)
}
function multiply(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var answer;
    var onlyDigits=/^\d+$/;
    var output = document.getElementById('answer');
    if(!num1.match(onlyDigits) && !num2.match(onlyDigits)){
        output.innerHTML = '';
        document.getElementById('num1Help').innerHTML = 'You must enter a number only!';
        document.getElementById('num2Help').innerHTML = 'You must enter a number only!';
        $("#submit").removeClass('btn-success');
        $("#submit").addClass('btn-danger');
        console.log('Num1 is ' + num1)
        console.log('Num2 is ' + num2)
        $("#submit").prop("disabled", true);
    }else if(!num1.match(onlyDigits)){
        output.innerHTML = '';
        document.getElementById('num1Help').innerHTML = 'You must enter a number only!';
        $("#submit").removeClass('btn-success');
        $("#submit").addClass('btn-danger');
        console.log('Num1 is ' + num1)
        $("#submit").prop("disabled", true);
    }else if(!num2.match(onlyDigits)){
        output.innerHTML = '';
        document.getElementById('num2Help').innerHTML = 'You must enter a number only!';
        $("#submit").removeClass('btn-success');
        $("#submit").addClass('btn-danger');
        console.log('Num2 is ' + num2)
        $("#submit").prop("disabled", true);
    }else{
        $("#submit").removeClass('btn-danger');
        $("#submit").addClass('btn-success');
        output.innerHTML = '';
        document.getElementById('num1Help').innerHTML = '';
        document.getElementById('num2Help').innerHTML = '';
        answer = num1 * num2;
        output.innerHTML = '<h1>The answer is: ' + answer + '</h2>';
    }
}
function Enable(buttonElement){
    var submit = document.getElementById("submit");
    submit.disabled = false;
    $("#submit").removeClass('btn-danger');
    $("#submit").addClass('btn-success');
    console.log('value in enable function is ' + buttonElement)
}
function calc(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var answer;
    var onlyDigits=/^\d+$/;
    var output = document.getElementById('answer');
    var operator = document.getElementById("funct");
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
        document.getElementById('num2Help').innerHTML = '';
        document.getElementById('num1Help').innerHTML = 'You must enter a number only!';
        $("#submit").removeClass('btn-success');
        $("#submit").addClass('btn-danger');
        console.log('Num1 is ' + num1)
        $("#submit").prop("disabled", true);
    }else if(!num2.match(onlyDigits)){
        output.innerHTML = '';
        document.getElementById('num1Help').innerHTML = '';
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
        var operatorString = operator.value.toString()
        console.log('operator is ' + operatorString)
        switch(operatorString){
            case 'multiply':
                answer = (parseInt(num1) * parseInt(num2));
                output.innerHTML = '<h1>The answer is: ' + answer; + '</h2>';
                break;
            case 'add':
                answer = (parseInt(num1) + parseInt(num2));
                output.innerHTML = '<h1>The answer is: ' + answer; + '</h2>';
                break;
            case 'subtract':
                answer = (parseInt(num1) - parseInt(num2));
                output.innerHTML = '<h1>The answer is: ' + answer; + '</h2>';
                break;
            case 'divide':
                answer = (parseInt(num1) / parseInt(num2));
                output.innerHTML = '<h1>The answer is: ' + answer.toFixed(4); + '</h2>';
                break;
        }
    }
}
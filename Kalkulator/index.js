const display = document.getElementById("display");

function appendToDisplay(input){
    const lastChar = display.value.slice(-1);
    const operators = ["+","-","*","/"];

    if (operators.includes(lastChar) && operators.includes(input)){
        return;
    }

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    const lastChar = display.value.slice(-1);
    const operators = ["+","-","*","/"];

    if (operators.includes(lastChar)) {
        return;
    }
    
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
const display = document.getElementById("display");


function clearDisplay(){
    display.value = "";
}


function removeChars(){
    display.value = display.value.slice(0, -1);
}


function displayChars(char){
    display.value = display.value + char;
}


function evaluateDisplay(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        console.log(error); 
    }
}
const display = document.getElementById('display');
function clik(event){
   
     if (display.value === "Error") {
        display.value = ""; 
    }
    display.value += event;
}
function clr(){
    display.value = "";
}
function delet(){
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }}
function calculate(){
   try{
    display.value = eval(display.value);
   }
   catch(error){
    display.value ="Error";
   
   }
}
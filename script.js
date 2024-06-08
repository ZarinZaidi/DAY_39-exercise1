let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");//to select all the button in html
let screenvalue = "";

for(item of buttons){//calling the buttons and whatever item in it
    item.addEventListener("click", (e)=>{//whenever user click the button, perform function with parameter e
        buttonText = e.target.innerText;//targeting the innerText of the clicked button
        if(buttonText == "X"){
            buttonText = "*";
            screenvalue += buttonText;
            screen.value = screenvalue;
        }else if(buttonText == "C"){
            screenvalue = " ";
            screen.value = screenvalue;
        }else if(buttonText == "="){
            screen.value = eval(screenvalue);//eval is a function to evaluate the parameter
        }else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}
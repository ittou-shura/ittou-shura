    const x = document;
    console.log(x);
    const buttons = document.getElementsByClassName("buttons");
    console.log(buttons);
    const screen = document.querySelector(".screen");
    const buttons2 = Array.from(buttons);
    let display="";
    buttons2.forEach(button => {
        button.addEventListener("click",function(){
            if(button.innerText === "="){
                try{
                    display = eval(display);
                console.log(display);
                
                }
                catch(err){
                    display = `error`;
                }
                

                
            }
            else if(button.innerText === "AC"){
                display = "";

            }
            else if(button.innerText === "C"){
                display = display.substring(0,display.length-1);
                console.log(display);
            }
            else{
            display+=button.innerText;
            console.log(display);
            screen.innerText = display;
            console.log(button.innerText);
            }
            screen.innerText = display;
        });
    });

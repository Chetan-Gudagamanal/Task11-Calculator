//Event Listener only for numbers from keyboard
//Calls myFunction if gets any number as input from keyboard.
document.addEventListener("keypress",function(event){
    let keyInput=event.key
    if(isNaN(keyInput)){
        return false;
    }
    else{
        myFunction(keyInput);
    }
})

let element=undefined;
let input=undefined;
let flag=undefined;

//myFunction will be called if any key from calculator keypad is clicked or any number entered from keyboard
function myFunction(id){
    let element=document.getElementById("screenText")
    if(eval(element.innerHTML==0)&& !element.innerHTML.includes(".") && id!=".")
    {
        input="";
    }
    element.setAttribute("style","color:rgb(0,0,0)")

    if(id=="="){
        try{
            output=eval(input)
            element.innerHTML=output
            input=output
            flag=1;
        }
        catch(e){
            errorHandle(e,element)
        }
    }
    else if(id=="AC"){
        flag=0;
        input=""
        element.innerHTML=input
    }
    else if(id=="CE"){
        flag=0;
        try{
            input=input.slice(0,-1)
            element.innerHTML=input
        }
        catch(e){
            input="";
            element.innerHTML=input
        }
    }
    else if(id=="M+"){
        if(localStorage.getItem("M+")=="" || localStorage.getItem("M+")==null){
            if(input!==""){
                try {
                    localStorage.setItem("M+",eval(input));
                } catch (e) {
                    errorHandle(e,element)
                }
            }
        }
        else{
            try {
                input=Number(localStorage.getItem("M+"))+Number(eval(input));
                element.innerHTML=input
            } catch (e) {
                errorHandle(e,element)
            }
            
        }
    }
    else if(id=="M-"){
        if(localStorage.getItem("M-")=="" || localStorage.getItem("M-")==null){
            // localStorage.setItem("M-",eval(input));
            if(input!==""){
                try {
                    localStorage.setItem("M-",eval(input));
                } catch (e) {
                    errorHandle(e,element)
                }
            }
        }
        else{
            try {
                input=Number(eval(input))-Number(localStorage.getItem("M-"))
                element.innerHTML=input
            } catch (e) {
                errorHandle(e,element);
            }
            
        }
    }
    else if(id=="MC"){
        localStorage.clear()
    }
    else{
        if(flag==1 && !isNaN(id)){
            flag=0;
            input=id;
            element.innerHTML=input
        }
        else{
            flag=0;
            input=input+id;
            element.innerHTML=input
        }
    }


    //display M+ and M- values on top of calculator
    let memoryPlus=document.getElementById("memory+");
    if(localStorage.getItem("M+")=="" || localStorage.getItem("M+")==null){
        memoryPlus.innerHTML=`M+ = Not Set`
    }
    else{
        memoryPlus.innerHTML=`M+ = ${localStorage.getItem("M+")}`
    }
    let memoryMinus=document.getElementById("memory-");
    if(localStorage.getItem("M-")=="" || localStorage.getItem("M-")==null){
        memoryMinus.innerHTML=`M- = Not Set`
    }
    else{
        memoryMinus.innerHTML=`M- = ${localStorage.getItem("M-")}`
    }

    //If everything is cleared in calculator
    if(element.innerHTML==""){
        element.innerHTML="0";
        element.setAttribute("style","color:rgb(0,0,0,0.4)")

    }
}

function errorHandle(e,element){
    let error=setInterval(() => {
        element.setAttribute("style","font-size:15px;")
        element.innerHTML="invalid Input Expression"
    }, 1000);
    setTimeout(()=>{
        clearInterval(error);
        element.innerHTML=input
        element.removeAttribute("style")
    },2000)
}
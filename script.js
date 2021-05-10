const div1=document.createElement("div");
div1.setAttribute("class","container-fluid calc text-center");
document.body.append(div1);

div2=document.createElement("div");
div2.setAttribute("class","card text-center");
div1.append(div2);


//HTML elements for screen part

div3=document.createElement("div");
div3.setAttribute("class","screen");
div2.append(div3);

p1=document.createElement("p");
p1.setAttribute("class","inline");
p1.setAttribute("id","screenText");
div3.append(p1);

div4=document.createElement("div");
div4.setAttribute("id","sup");
div3.append(div4);

sup1=document.createElement("sup")
div4.append(sup1);

span1=document.createElement("span");
span1.setAttribute("id","memory+")
sup1.append(span1);

spanSpace=document.createElement("span")
spanSpace.innerHTML="&ensp;&ensp;"
sup1.append(spanSpace)

span2=document.createElement("span");
span2.setAttribute("id","memory-")
sup1.append(span2);


//keypad part
div5=document.createElement("div");
div5.setAttribute("class","keypad");
div2.append(div5);

//Row1
divRow1=document.createElement("div")
divRow1.setAttribute("class","row");
div5.append(divRow1)

//to create button 11
let divCol11=document.createElement("div")
divCol11.setAttribute("class","col-3")
divRow1.append(divCol11);

let button11=document.createElement("button");
button11.setAttribute("id","1")
button11.setAttribute("onclick","myFunction(this.id)");
button11.setAttribute("type","button")
button11.setAttribute("class","btn btn-dark")
button11.innerHTML="1"
divCol11.append(button11);

//to create button 12
let divCol12=document.createElement("div")
divCol12.setAttribute("class","col-3")
divRow1.append(divCol12);

let button12=document.createElement("button");
button12.setAttribute("id","2")
button12.setAttribute("onclick","myFunction(this.id)");
button12.setAttribute("type","button")
button12.setAttribute("class","btn btn-dark")
button12.innerHTML="2"
divCol12.append(button12);

//to create button 13
let divCol13=document.createElement("div")
divCol13.setAttribute("class","col-3")
divRow1.append(divCol13);

let button13=document.createElement("button");
button13.setAttribute("id","3")
button13.setAttribute("onclick","myFunction(this.id)");
button13.setAttribute("type","button")
button13.setAttribute("class","btn btn-dark")
button13.innerHTML="3"
divCol13.append(button13);

//to create button 14
let divCol14=document.createElement("div")
divCol14.setAttribute("class","col-3")
divRow1.append(divCol14);

let button14=document.createElement("button");
button14.setAttribute("id","CE")
button14.setAttribute("onclick","myFunction(this.id)");
button14.setAttribute("type","button")
button14.setAttribute("class","btn btn-dark")
button14.innerHTML="CE"
divCol14.append(button14);


//Row2
divRow2=document.createElement("div")
divRow2.setAttribute("class","row");
div5.append(divRow2)

//to create button 21
let divCol21=document.createElement("div")
divCol21.setAttribute("class","col-3")
divRow2.append(divCol21);

let button21=document.createElement("button");
button21.setAttribute("id","4")
button21.setAttribute("onclick","myFunction(this.id)");
button21.setAttribute("type","button")
button21.setAttribute("class","btn btn-dark")
button21.innerHTML="4"
divCol21.append(button21);

//to create button 22
let divCol22=document.createElement("div")
divCol22.setAttribute("class","col-3")
divRow2.append(divCol22);

let button22=document.createElement("button");
button22.setAttribute("id","5")
button22.setAttribute("onclick","myFunction(this.id)");
button22.setAttribute("type","button")
button22.setAttribute("class","btn btn-dark")
button22.innerHTML="5"
divCol22.append(button22);

//to create button 23
let divCol23=document.createElement("div")
divCol23.setAttribute("class","col-3")
divRow2.append(divCol23);

let button23=document.createElement("button");
button23.setAttribute("id","6")
button23.setAttribute("onclick","myFunction(this.id)");
button23.setAttribute("type","button")
button23.setAttribute("class","btn btn-dark")
button23.innerHTML="6"
divCol23.append(button23);

//to create button 24
let divCol24=document.createElement("div")
divCol24.setAttribute("class","col-3")
divRow2.append(divCol24);

let button24=document.createElement("button");
button24.setAttribute("id","/")
button24.setAttribute("onclick","myFunction(this.id)");
button24.setAttribute("type","button")
button24.setAttribute("class","btn btn-dark")
button24.innerHTML="/"
divCol24.append(button24);



//Row3
divRow3=document.createElement("div")
divRow3.setAttribute("class","row");
div5.append(divRow3)

//to create button 31
let divCol31=document.createElement("div")
divCol31.setAttribute("class","col-3")
divRow3.append(divCol31);

let button31=document.createElement("button");
button31.setAttribute("id","7")
button31.setAttribute("onclick","myFunction(this.id)");
button31.setAttribute("type","button")
button31.setAttribute("class","btn btn-dark")
button31.innerHTML="7"
divCol31.append(button31);

//to create button 32
let divCol32=document.createElement("div")
divCol32.setAttribute("class","col-3")
divRow3.append(divCol32);

let button32=document.createElement("button");
button32.setAttribute("id","8")
button32.setAttribute("onclick","myFunction(this.id)");
button32.setAttribute("type","button")
button32.setAttribute("class","btn btn-dark")
button32.innerHTML="8"
divCol32.append(button32);

//to create button 33
let divCol33=document.createElement("div")
divCol33.setAttribute("class","col-3")
divRow3.append(divCol33);

let button33=document.createElement("button");
button33.setAttribute("id","9")
button33.setAttribute("onclick","myFunction(this.id)");
button33.setAttribute("type","button")
button33.setAttribute("class","btn btn-dark")
button33.innerHTML="9"
divCol33.append(button33);

//to create button 34
let divCol34=document.createElement("div")
divCol34.setAttribute("class","col-3")
divRow3.append(divCol34);

let button34=document.createElement("button");
button34.setAttribute("id","*")
button34.setAttribute("onclick","myFunction(this.id)");
button34.setAttribute("type","button")
button34.setAttribute("class","btn btn-dark")
button34.innerHTML="*"
divCol34.append(button34);




//Row4
divRow4=document.createElement("div")
divRow4.setAttribute("class","row");
div5.append(divRow4)

//to create button 41
let divCol41=document.createElement("div")
divCol41.setAttribute("class","col-3")
divRow4.append(divCol41);

let button41=document.createElement("button");
button41.setAttribute("id",".")
button41.setAttribute("onclick","myFunction(this.id)");
button41.setAttribute("type","button")
button41.setAttribute("class","btn btn-dark")
button41.innerHTML="."
divCol41.append(button41);

//to create button 42
let divCol42=document.createElement("div")
divCol42.setAttribute("class","col-3")
divRow4.append(divCol42);

let button42=document.createElement("button");
button42.setAttribute("id","0")
button42.setAttribute("onclick","myFunction(this.id)");
button42.setAttribute("type","button")
button42.setAttribute("class","btn btn-dark")
button42.innerHTML="0"
divCol42.append(button42);

//to create button 43
let divCol43=document.createElement("div")
divCol43.setAttribute("class","col-3")
divRow4.append(divCol43);

let button43=document.createElement("button");
button43.setAttribute("id","%")
button43.setAttribute("onclick","myFunction(this.id)");
button43.setAttribute("type","button")
button43.setAttribute("class","btn btn-dark")
button43.innerHTML="%"
divCol43.append(button43);

//to create button 44
let divCol44=document.createElement("div")
divCol44.setAttribute("class","col-3")
divRow4.append(divCol44);

let button44=document.createElement("button");
button44.setAttribute("id","-")
button44.setAttribute("onclick","myFunction(this.id)");
button44.setAttribute("type","button")
button44.setAttribute("class","btn btn-dark")
button44.innerHTML="-"
divCol44.append(button44);




//Row5
divRow5=document.createElement("div")
divRow5.setAttribute("class","row");
div5.append(divRow5)

//to create button 51
let divCol51=document.createElement("div")
divCol51.setAttribute("class","col-3")
divRow5.append(divCol51);

let button51=document.createElement("button");
button51.setAttribute("id","(")
button51.setAttribute("onclick","myFunction(this.id)");
button51.setAttribute("type","button")
button51.setAttribute("class","btn btn-dark")
button51.innerHTML="("
divCol51.append(button51);

//to create button 52
let divCol52=document.createElement("div")
divCol52.setAttribute("class","col-3")
divRow5.append(divCol52);

let button52=document.createElement("button");
button52.setAttribute("id","AC")
button52.setAttribute("onclick","myFunction(this.id)");
button52.setAttribute("type","button")
button52.setAttribute("class","btn btn-dark")
button52.innerHTML="AC"
divCol52.append(button52);

//to create button 53
let divCol53=document.createElement("div")
divCol53.setAttribute("class","col-3")
divRow5.append(divCol53);

let button53=document.createElement("button");
button53.setAttribute("id",")")
button53.setAttribute("onclick","myFunction(this.id)");
button53.setAttribute("type","button")
button53.setAttribute("class","btn btn-dark")
button53.innerHTML=")"
divCol53.append(button53);

//to create button 54
let divCol54=document.createElement("div")
divCol54.setAttribute("class","col-3")
divRow5.append(divCol54);

let button54=document.createElement("button");
button54.setAttribute("id","+")
button54.setAttribute("onclick","myFunction(this.id)");
button54.setAttribute("type","button")
button54.setAttribute("class","btn btn-dark")
button54.innerHTML="+"
divCol54.append(button54);


//Row6
divRow6=document.createElement("div")
divRow6.setAttribute("class","row");
div5.append(divRow6)

//to create button 61
let divCol61=document.createElement("div")
divCol61.setAttribute("class","col-3")
divRow6.append(divCol61);

let button61=document.createElement("button");
button61.setAttribute("id","MC")
button61.setAttribute("onclick","myFunction(this.id)");
button61.setAttribute("type","button")
button61.setAttribute("class","btn btn-dark")
button61.innerHTML="MC"
divCol61.append(button61);

//to create button 62
let divCol62=document.createElement("div")
divCol62.setAttribute("class","col-3")
divRow6.append(divCol62);

let button62=document.createElement("button");
button62.setAttribute("id","M+")
button62.setAttribute("onclick","myFunction(this.id)");
button62.setAttribute("type","button")
button62.setAttribute("class","btn btn-dark")
button62.innerHTML="M+"
divCol62.append(button62);

//to create button 63
let divCol63=document.createElement("div")
divCol63.setAttribute("class","col-3")
divRow6.append(divCol63);

let button63=document.createElement("button");
button63.setAttribute("id","M-")
button63.setAttribute("onclick","myFunction(this.id)");
button63.setAttribute("type","button")
button63.setAttribute("class","btn btn-dark")
button63.innerHTML="M-"
divCol63.append(button63);

//to create button 54
let divCol64=document.createElement("div")
divCol64.setAttribute("class","col-3")
divRow6.append(divCol64);

let button64=document.createElement("button");
button64.setAttribute("id","=")
button64.setAttribute("onclick","myFunction(this.id)");
button64.setAttribute("type","button")
button64.setAttribute("class","btn btn-dark")
button64.innerHTML="="
divCol64.append(button64);

div6=document.createElement("div");
div6.setAttribute("class","container")
div2.append(div6)

div7=document.createElement("div");
div7.setAttribute("class","card-footer")
div6.append(div7)

div8=document.createElement("div");
div8.setAttribute("style","text-align: center;")
div7.append(div8)

b1=document.createElement("b");
b1.innerHTML="Instructions to use";
div8.append(b1);

//Footer row1
divFooterRow1=document.createElement("div")
divFooterRow1.setAttribute("class","row row-footer")
div7.append(divFooterRow1)

divFooterCol11=document.createElement("div");
divFooterCol11.setAttribute("class","col-2 text-center")
divFooterRow1.append(divFooterCol11)

spanFooter1=document.createElement("span")
spanFooter1.innerHTML="MC";
divFooterCol11.append(spanFooter1)

divFooterCol12=document.createElement("div")
divFooterCol12.setAttribute("class","col-10");
divFooterCol12.innerHTML="Clear's the memory (To clear values stored in M+ and M-)"
divFooterRow1.append(divFooterCol12)

//Footer row2
divFooterRow2=document.createElement("div")
divFooterRow2.setAttribute("class","row row-footer")
div7.append(divFooterRow2)

divFooterCol21=document.createElement("div");
divFooterCol21.setAttribute("class","col-2 text-center")
divFooterRow2.append(divFooterCol21)

spanFooter2=document.createElement("span")
spanFooter2.innerHTML="M+";
divFooterCol21.append(spanFooter2)

divFooterCol22=document.createElement("div")
divFooterCol22.setAttribute("class","col-10");
divFooterCol22.innerHTML="Store's valid input if it is not set. If set already, then stored value will be added to current value"
divFooterRow2.append(divFooterCol22)


//Footer row3
divFooterRow3=document.createElement("div")
divFooterRow3.setAttribute("class","row row-footer")
div7.append(divFooterRow3)

divFooterCol31=document.createElement("div");
divFooterCol31.setAttribute("class","col-2 text-center")
divFooterRow3.append(divFooterCol31)

spanFooter3=document.createElement("span")
spanFooter3.innerHTML="M-";
divFooterCol31.append(spanFooter3)

divFooterCol32=document.createElement("div")
divFooterCol32.setAttribute("class","col-10");
divFooterCol32.innerHTML="Store's valid input if it is not set. If set already, then stored value will be substracted from current value"
divFooterRow3.append(divFooterCol32)


//Footer row4
divFooterRow4=document.createElement("div")
divFooterRow4.setAttribute("class","row row-footer")
div7.append(divFooterRow4)

divFooterCol41=document.createElement("div");
divFooterCol41.setAttribute("class","col-2 text-center")
divFooterRow4.append(divFooterCol41)

spanFooter4=document.createElement("span")
spanFooter4.innerHTML="AC";
divFooterCol41.append(spanFooter4)

divFooterCol42=document.createElement("div")
divFooterCol42.setAttribute("class","col-10");
divFooterCol42.innerHTML="Clear's the screen (* It does not clear the values from memory)"
divFooterRow4.append(divFooterCol42)

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
    if(eval(element.innerHTML==0)&& !element.innerHTML.includes("."))
    {
        if(id=="."){
            input="0"
        }
        else{
            input="";
        }
    }
    element.setAttribute("style","color:rgb(0,0,0)")

    if(id=="="){
        try{
            output=eval(input)
            if(output===undefined){
                output=0;
            }
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
                if(eval(input)==undefined){
                    input="0"
                }
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
                if(eval(input)==undefined){
                    input="0"
                }
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

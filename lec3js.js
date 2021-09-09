var cScrV = "0";
var num1 = 0; 
var oper = "";

function wNumb(num){
    if(cScrV=="0"){
        cScrV = ""
    }
    if(cScrV.indexOf(".")==true && num=="."){
        num = ""
    }
    if(cScrV=="" && num=="."){
        cScrV="0"
    }
    cScrV = cScrV + num
    document.getElementById("scr").innerHTML=cScrV
    
   
}
function sum(){ 
    if(oper!=""){
        runOp()
    }
    oper = "+"
    num1 = Number(cScrV)
    cScrV = ""
    document.getElementById("ascr").innerHTML=num1 + oper
}
function min(){ 
    if(oper!=""){
        runOp()
    }
    oper = "-"
    num1 = Number(cScrV)
    cScrV = ""
    document.getElementById("ascr").innerHTML=num1 + oper
}
function mul(){ 
    if(oper!=""){
        runOp()
    }
    oper = "*"
    num1 = Number(cScrV)
    cScrV = ""
    document.getElementById("ascr").innerHTML=num1 + oper
}
function dvi(){ 
    if(oper!=""){
        runOp()
    }
    oper = "/"
    num1 = Number(cScrV)
    cScrV = ""
    document.getElementById("ascr").innerHTML=num1 + oper
}
function mod(){ 
    if(oper!=""){
        runOp()
    }
    oper = "%"
    num1 = Number(cScrV)
    cScrV = ""
    document.getElementById("ascr").innerHTML=num1 + oper
}
function cle(){ 
    oper=""
    cScrV="0"
    document.getElementById("scr").innerHTML=cScrV
    document.getElementById("ascr").innerHTML=cScrV
}
function con(){
    cScrV = Number(cScrV) * -1
    document.getElementById("scr").innerHTML=cScrV
}



function runOp(){
    var result = 0;
    switch(oper){
        case "+":
            result = num1 + Number(cScrV)
            
        break;
        case "-":
            result = num1 - Number(cScrV)
            
        break;
        case "*":
            result = num1 * Number(cScrV)
            
        break;
        case "/":
            result = num1 / Number(cScrV)
            
        break;
        case "%":
            result = num1 % Number(cScrV)
            
        break;


    }
    oper = ""
    cScrV = result
    document.getElementById("scr").innerHTML=result    
    document.getElementById("ascr").innerHTML=result
    
}
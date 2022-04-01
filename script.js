let result = 0 ;
let operand2 = "";
let screenVal = document.getElementById('screen');
let bool = true;
let logic = "";
let decimal = false;
let operand1 = "";
let operand = "";
const dot = document.querySelector(".dot");
const equal = document.getElementById("equ");
const clear = document.getElementById("clr");
const numeric = document.querySelectorAll(".num");
const oprn = document.querySelectorAll(".opr");

//main logic 
document.addEventListener("keydown",e=>{
    console.log(e.key);
   if(
       e.key === '0' ||
       e.key === '1' ||
       e.key === '2' ||
       e.key === '3' ||
       e.key === '4' ||
       e.key === '5' ||
       e.key === '6' ||
       e.key === '7' ||
       e.key === '8' ||
       e.key === '9' ||
       e.key === '.' ||
       e.key === 'C' 
   )
   {
     clickButton(e.key);  
   }  
 
   else if(
       e.key==='*'||
       e.key === '/' ||
       e.key === '-' ||
       e.key === '+' 
       )
       {
           clickOperation(e.key);
       }
   
   else if(e.key === 'Enter' || e.key==='=')
   {
    equal.click();
   }    
 })


 function clickOperation(key)
 {
     oprn.forEach(button =>{
         if(button.innerText === key)
         {
             button.click();
         }
     })
 }

function clickButton(key)
{
    numeric.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    })
}

numeric.forEach(item => {

    item.addEventListener('click',(e)=>{
       str = e.target.innerHTML; 
        operand+=str;
        screenVal.innerText += str;
        
    })
 });

 clear.addEventListener('click',(e)=>{
     operand="";
     operand1 = "";
     operand2 = "";
     logic = "";
     bool = true;
     result = 0;
     decimal = false;
     screenVal.innerText = "";
     
 })

 equal.addEventListener('click',(e)=>{
     operand2 = operand;
     if(operand1 && operand2 && logic)
     calculate(logic);

     screenVal.innerText = result
     logic="";
     
 })

 dot.addEventListener('click',(e)=>{
     if(!decimal)
     {
       str = e.target.innerHTML;   
       operand+=str;
       screenVal.innerText += str;
       decimal = true;
     }
 })



oprn.forEach(item => {
    item.addEventListener('click',(e)=>{
        str = e.target.innerText;
       console.log(str);
        screenVal.innerText+=str;
        if(operand1 && operand2 && logic)
        calculate(logic);

        else if(bool)
        {
            
            operand1 = operand;
            console.log(operand1);
            bool = false;
            operand="";
            decimal = false;
        }
                
        else 
        {
            operand2 = operand;
            console.log(operand2);
            calculate(logic);
            screenVal.innerText = result+str;
            logic = str;
            decimal = false;
            operand = "";
        }

        logic = str;
        
    })
});

function calculate(operation)
{
    var a = parseFloat(operand1);
    var b = parseFloat(operand2);

    if(operation == "*")
    result =  a*b; 

    else if(operation=="+")
    result = a+b;

    else if(operation=="-")
    result = a-b;

    else if(operation == "/")
    {
        if(b===0)
        {
            result = "Cannot Divide by Zero";
            setTimeout(clickClear,2000)
        }
        else 
        result = a/b;
    }

    console.log(result);
    operand1 = result;
    operand2 = "";
}

function clickClear(){
  clear.click();
}
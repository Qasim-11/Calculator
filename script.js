let display1 = document.getElementById("display1")
let number = document.getElementById("number")


function Number(x){
    display1.innerHTML += parseInt(x)
    Value1 = parseInt( display1.innerHTML)
    console.log (Value1)
}


function Operation1(){
    display1.innerHTML =""
}
function Operation3(){
    display1.innerHTML += "+"
}
function Operation4(){
   display1.innerHTML += "-" 
}
function Operation5(){
   display1.innerHTML += "/" 
}
function Operation6(){
   display1.innerHTML += "*" 
}
function Operation7(){
   display1.innerHTML += "%" 
}


function Operation8(){
display1.innerHTML = eval(display1.innerHTML)
}



  function Operation2() {
    let text = display1.innerHTML;
    display1.innerHTML = text.substring(0, text.length - 1);
  }

function dot()
    {display1.innerHTML += '.'
}

function x10()
    {display1.innerHTML += '*10'
}

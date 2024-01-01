var temp = document.querySelector(".temp-result");
var input = document.querySelector("input");

var inputbtn = document.querySelectorAll("span");
var select = document.querySelectorAll("ol");
var current = document.getElementById("wrapper1");
var current2 = document.getElementById("wrapper2");

// current.style.display = "none"

//calculator
var cal = document.getElementById("calculator");

cal.addEventListener("click",()=>{
    current.style.display = "block";
    current2.style.display = "none";
});

for(let i=0; i< inputbtn.length;i++){
inputbtn[i].addEventListener("click",()=>{
    const value = inputbtn[i].textContent;
   
    if(value === "C"){
        input.value="";
        temp.textContent="";
    }else if(value === "x"){
        let tempTxt = input.value;
        input.value = tempTxt.substring(0,tempTxt.length-1);
        temp.textContent = eval(input.value);    
    }
    else if(value==="="){
        // alert(temp.textContent);
        input.value = temp.textContent;
        temp.textContent="";
    } else{
    input.value += inputbtn[i].textContent;  
    temp.textContent = eval(input.value);
    }
    
});
}

//exchange

var rate = document.getElementById("exchange");
rate.addEventListener("click",()=>{
    current.style.display = "none";
    current2.style.display = "block";
    
});

var prim_color = "#8a2be2";

var temp = document.querySelector(".temp-result");

var input = document.querySelector("input");

var inputbtn = document.querySelectorAll(".calculator-btn");
var select = document.querySelectorAll("ol");

var wrapper = document.getElementById("wrapper");
var wrapper1 = document.getElementById("wrapper1");
var current = wrapper1;
var wrapper2 = document.getElementById("wrapper2");
var wrapper3 = document.getElementById("wrapper3");
var selectedTxt = document.getElementById("calculator");


// border-bottom: 2.3px solid;

// current.style.display = "none"

//calculator
var cal = document.getElementById("calculator");

cal.addEventListener("click", () => {
    current.style.display = "none";
    current = wrapper1;
    current.style.display = "block";
    selectedTxt.classList.remove("selected");
    selectedTxt = document.getElementById("calculator");
    selectedTxt.classList.add("selected");
});

for (let i = 0; i < inputbtn.length; i++) {
    inputbtn[i].addEventListener("click", () => {
        const value = inputbtn[i].textContent;
        if (value === "C") {
            input.value = "";
            temp.textContent = "";
        } else if (value === "x") {
            let tempTxt = input.value;
            input.value = tempTxt.substring(0, tempTxt.length - 1);
            temp.textContent = eval(input.value);
        }
        else if (value === "=") {
            // alert(temp.textContent);
            input.value = temp.textContent;
            temp.textContent = "";
        } else {
            input.value += inputbtn[i].textContent;
            temp.textContent = eval(input.value);
        }

    });
}

//exchange
var inputbtn2 = document.querySelectorAll(".btn");

var rate = document.getElementById("exchange");
rate.addEventListener("click", () => {
    current.style.display = "none";
    current = wrapper2;
    wrapper2.style.display = "block";
    selectedTxt.classList.remove("selected");
    selectedTxt = document.getElementById("exchange");
    selectedTxt.classList.add("selected");
});

var exchangeinpt1 = document.getElementById("exchange-input-1");
var exchangeinpt2 = document.getElementById("exchange-input-2");

var selectedinpt = exchangeinpt1;
var outputinpt = exchangeinpt2;
var inputbtn2 = document.querySelectorAll(".exchange-btn");

selectedTxt.classList.add("selected");

selectedinpt.style.color = prim_color;

for (let i = 0; i < inputbtn2.length; i++) {
    inputbtn2[i].addEventListener("click", () => {
        const value = inputbtn2[i].textContent;
        if (value === "C") {
            selectedinpt.value = "0";
            outputinpt.value = "0";
        } else if (value === "x") {

            selectedinpt.value = selectedinpt.value.substring(0, selectedinpt.value.length - 1);
            outputinpt.value = "0";
            if (selectedinpt.value === "") {
                selectedinpt.value = "0";
            }
        }
        else {
            if (selectedinpt.value === "0") {

                selectedinpt.value = "";
            }
            selectedinpt.value += inputbtn2[i].textContent;

        }
        if (selectedinpt.id === "exchange-input-1") {
            outputinpt.value = selectedinpt.value / 83;
        } else {
            outputinpt.value = selectedinpt.value * 83;
        }
    });
}

outputinpt.addEventListener("click", changeinputs);

selectedinpt.addEventListener("click", changeinputs);

function changeinputs() {
    selectedinpt.style.color = "black";
    var temp = selectedinpt;
    selectedinpt = outputinpt;
    outputinpt = temp;
    selectedinpt.style.color = prim_color;
}

// converter

var converter = document.getElementById("converter");
converter.addEventListener("click", () => {
    current.style.display = "none";
    current = wrapper3;
    current.style.display = "grid";
    selectedTxt.classList.remove("selected");
    selectedTxt = document.getElementById("converter");
    selectedTxt.classList.add("selected");
});

var unitConverter = document.getElementById("converter-container");
wrapper3.addEventListener("click", () => {
    // alert("not completed yet");
    wrapper.style.display = "none";
    unitConverter.style.display = "block";
});

var exit = document.getElementById("exit");

exit.addEventListener("click", () => {
    wrapper.style.display = "block";
    unitConverter.style.display = "none";
});
var alertUser = document.getElementById("not-competed");

alertUser.addEventListener("click", () => {
    alert("this part is not completed yet");
});
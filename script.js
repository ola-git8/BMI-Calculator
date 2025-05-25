const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("m");
const female = document.getElementById("f");
const form = document.getElementById("form");
let resultArea = document.querySelector(".comment");


modelcontent = document.querySelector(".model.content");
modelText = document.querySelector("#modelText");
const model = document.getElementById("myModel");
const span = document.getElementsByClassName("close")[0];

function calculate(){
    // if AGE, HEIGHT, WEIGHT AND GENDER IS NOT FILLED THEN THE INNERHTML WILL POPOUT
    if(age.value == "" || height.value == "" || weight.value == "" || (male.checked == false && female.checked == false)){
        model.style.display = "block";
        // modelText.innerHtml = "All fields are required";

    }else{
        countBmi()
    }
}

function countBmi(){
    let p = [age.value, height.value, weight.value];
    if (male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female")
    }

    //formular for the bmi
    let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    let result = '';
    if(bmi<18.5){
        result = "underweight";
    }else if(18.5<=bmi&&bmi<=24.9){
        result = "Healthy";
    }else if(25<=bmi&&bmi<=29.9){
        result = "overwight";
    }else if(30<=bmi&&bmi<=34.9){
        result = "obese";
    }else if(35<=bmi){
        result = "Healthy";
    }

    resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="Comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}



// when the user click on <span> </span> (x), close the pop out model
span.onclick = function(){
    model.style.display = "none";
}

//when the user click anywhere outside of the model
window.onclick = function (event){
if (event.target == model){
    model.style.display = "none";
}
}
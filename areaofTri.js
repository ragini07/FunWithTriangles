const radio = document.querySelectorAll(".calcArea");
const input1 = document.querySelectorAll(".input1");
const input2 = document.querySelectorAll(".input2");
const input3 = document.querySelectorAll(".input3");
const output = document.querySelectorAll("#output");
const submitbtn = document.querySelectorAll(".submit");
const displaySection = document.querySelectorAll('.section');

function showDiv1(){
    displaySection[0].classList.remove('hide');
    displaySection[1].classList.add('hide');
    displaySection[2].classList.add('hide');
  
}
function showDiv2(){
    displaySection[1].classList.remove('hide');
    displaySection[0].classList.add('hide');
    displaySection[2].classList.add('hide');
}
function showDiv3(){
    displaySection[2].classList.remove('hide');
    displaySection[1].classList.add('hide');
    displaySection[0].classList.add('hide');
    
   
}

radio[0].addEventListener('click',showDiv1);
radio[1].addEventListener('click',showDiv2);
radio[2].addEventListener('click',showDiv3);

submitbtn[0].addEventListener('click',()=>{
    var area1 = 0.5*input1[0].value*input1[1].value;
    output[0].innerHTML = `Area of triangle is ${area1}`;
});
submitbtn[1].addEventListener('click',()=>{
    const a= Number(input2[0].value);
    const b= Number(input2[1].value);
    const c= Number(input2[2].value);
    var s = (a+b+c)/2;
    var area2 = (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(2);
    output[1].innerHTML = `Area of triangle is ${area2}`;
});
submitbtn[2].addEventListener('click',()=>{
    const b = Number(input3[0].value);
    const c = Number(input3[1].value);
    const A = Number(input3[2].value);
    var area3 = ((b*c*Math.sin(A*Math.PI/180))/2).toFixed(2);
    output[2].innerHTML = `Area of triangle is ${area3}`;
},false);

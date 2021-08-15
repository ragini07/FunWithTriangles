const inputangle = document.querySelectorAll(".angle");
const output = document.querySelector("#output");
const submitbtn = document.querySelector("#submit");
function errorHandler(angle)
{
    if(angle.value == ''|| angle.value<1)
        return true;
}
function isTriangle(e){
    
    //conversion of Nodelist to Array
    let arrayOfInputAngle = Array.from(inputangle);
    //check for error input angle
    var errorvalidation = false;
    for(var i =0; i<arrayOfInputAngle.length ;i++){
        if(errorHandler(arrayOfInputAngle[i])){
            errorvalidation = true;
            break;
        }
    }
    if(errorvalidation){
        output.innerHTML = 'Please provide valid input angle';
    }
    //summation of input angle
    else{
        const sum = arrayOfInputAngle.reduce(function (acc,curr) {
            acc+=Number(curr.value);
            return acc;   
        },0)
        console.log(sum);
        if(sum === 180)
        output.innerHTML = "Yes! these angles can make a triangle";
        else
        output.innerHTML = "Oops! these angles cannot make a triangle";

    }
    
}

submitbtn.addEventListener('click',isTriangle)
const inputSide = document.querySelectorAll(".inputSide");
const output = document.querySelector("#output");
const submitbtn = document.querySelector("#submit");
function errorHandler(side)
{
    if(side.value == ''|| side.value == 0)
        return true;
}
//Calculate Hypotenus
function calculateHypotenus(){
    var errorvalidation = false;
    for(let i =0; i<inputSide.length ;i++){
        if(errorHandler(inputSide[i])){
            errorvalidation = true;
            break;
        }
    }
    if(errorvalidation){
        output.innerHTML = 'Please provide valid input angle';
    }
    else{
    let sumOfSq = 0;
    for(let i=0; i<inputSide.length;i++)
        sumOfSq+= Number(inputSide[i].value)*Number(inputSide[i].value);
    
    let hypotenus = Math.sqrt(sumOfSq);
    output.innerHTML = `Hypotenues is ${hypotenus}`;
     console.log(inputSide[0].value,inputSide[1].value,hypotenus);
    }
}

submitbtn.addEventListener('click',calculateHypotenus);
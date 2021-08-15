const formQuiz = document.querySelector('.form-quiz');
const submitbtn = document.querySelector('#submit');
const outpur = document.querySelector('#output');
const questionDiv = document.querySelectorAll('.question')

function calculateScore(){
    const answers = ['Scalene Triangle' ,'Right' ,'180 degrees' ,'60' ,'6cm' ,'Scalene Triangle' , '40cm' ,'36' ,'No' ,'Yes'];
    let score = 0;
    let index =0;
    const formResult = new FormData(formQuiz);
    for(let value of formResult.values())
    {
        if(value === answers[index])
        {
            questionDiv[index].style.backgroundColor = 'lightgreen';
            score++;
        }
        else
            questionDiv[index].style.backgroundColor = 'pink';
        index++;
    }
    output.innerText = `You Scored ${score} out of 10`;

}



submitbtn.addEventListener('click',calculateScore);




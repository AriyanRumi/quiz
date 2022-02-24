const quizDb =[

    {
        id:1,
        question:'Inside which HTML element do we put the JavaScript?',
        a:'<javascript>',
        b:'<scripting>',
        c:'<js>',
        d:'<script>',
        ans:'ans4'
    },
    
    
    
    {
        id:2,
        question:'Where is the correct place to insert a JavaScript?',
        a:'head',
        b:'body',
        c:'both head and body',
        d:'outside',
        ans:'ans3'
    },
    
    
    {
        id:3,
        question:'What is the correct syntax for referring to an external script called "xxx.js"?',
        a:'<javascript href>',
        b:'<script src>',
        c:'<js src>',
        d:'<script href>',
        ans:'ans2'
    },
    
    
    
    ]





const question =document.querySelector('.question')
const op1 =document.querySelector('.option1')
const op2 =document.querySelector('.option2')
const op3 =document.querySelector('.option3')
const op4 =document.querySelector('.option4')
const submit =document.querySelector('.submit')
const input =document.querySelectorAll('.answer')
const wrong =document.querySelector('.wrong')
const right =document.querySelector('.right')
const dark =document.querySelector('.dark')
const moon =document.querySelector('#moon')
const sun =document.querySelector('#sun')
const total =document.querySelector('.total')
let wrapper =document.querySelector('.wrapper')
let quizSection =document.querySelector('.quizSection')
let scoreSection =document.querySelector('.scoreSection')

// global scope
let questions = 0
let score = 0
let serial =1
let wr =0
// end global scope


// load first question
const loadQuestion=()=>{
let changeQuestion =quizDb[questions]
question.textContent =`${serial}. ${changeQuestion.question}`
op1.textContent =changeQuestion.a
op2.textContent =changeQuestion.b
op3.textContent =changeQuestion.c
op4.textContent =changeQuestion.d
}
loadQuestion()
// end load first question

total.innerHTML=quizDb.length
const checkedAnswers=()=>{
    let getAnswerId;
    input.forEach( (curEle)=>{
        if(curEle.checked){
             getAnswerId =curEle.id
             
        }
    } )
    return getAnswerId
}





const uncheck =()=>{
    input.forEach( (curEle)=>{
        curEle.checked = false
    } )
    
}


// submit

submit.addEventListener('click',()=>{
  let checkedAnswer =checkedAnswers()
    if( checkedAnswer == quizDb[questions].ans){
        score++;
        right.textContent=score
        questions++;
        serial++;
        
    }else{
       wr++
       wrong.textContent=wr;
       questions++;
       serial++;
    }


    if(questions < quizDb.length){
      loadQuestion()
    }else{
        inner.style.display='none'
    }


  
    uncheck()

})
// end submit




// dark mood
dark.addEventListener('click',()=>{
    let pop=document.getElementById('pop')
    moon.classList.toggle('moonActive')
    sun.classList.toggle('sunRemove') 
    wrapper.classList.toggle('darkmode')
    pop.play()    
})
// end dark mood










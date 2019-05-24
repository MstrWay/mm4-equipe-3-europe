document.addEventListener('DOMContentLoaded', () => {
    // Set variables
    let totalQuestions = 0;
    let userStep = -1;
    let questionNumber = 1;
    let numberQuestion = document.querySelector('#numberQuestion')
    
    const reponses = document.querySelector('.reponses');
    // Get json data from Fetch API
    const asyncFetch = async () => {
        const response = await fetch('./questions.json');
        const data = await response.json();
        totalQuestions = data.length;
        displayQuestions(data)
    }
    // Add DOM element after Fetching data
    const displayQuestions = (data) => {
        data.map( item => {
            reponses.innerHTML += `
                <li class="questionTag hidden">
                    <h2>${item.question}</h2>
                    <ul class="reponses">
                        <li class="userChoice oui ouiphoto texteoui"><img src="${item.response.oui}" alt="oui"><p>OUI</p></li>
                        <li class="userChoice non nonphoto textenon"><img src="${item.response.non}" alt="non"><p>NON</p></li>
                    </ul>
                </li>
            `   
        })
        // Launch game
        gamePlay()
    }
    // Start game after adding DOM elements
    const gamePlay = () => {
        // Start game
        changeStep(0)
        // Get all possibilities
        let userChoice = document.querySelectorAll('.userChoice');
        // Bind click for each responses
        for( let item of userChoice ){
            item.addEventListener('click', () => {
                // Change game step
                changeStep(userStep + 1)
            })
        }
    }
    // Define step and action
    const changeStep = (step) => {
        // Get all questionns
        let questionTag = document.querySelectorAll('.questionTag');
        if( step  < totalQuestions ){
            // Check game step
            if( userStep === -1 ){
                // Frist step
                numberQuestion.innerHTML = 'Question 1/' + totalQuestions 
                questionTag[step].classList.remove('hidden')
            }
            else{
                // All steps (not first)
                questionNumber++;
                numberQuestion.innerHTML + `${questionNumber}/${totalQuestions}`
                questionTag[step -1 ].classList.add('hidden')
                questionTag[step].classList.remove('hidden')

                numberQuestion.innerHTML = `Question ${questionNumber}/${totalQuestions}`
            }
        }
        else{
            // Redirection
            location = "/Formulaire.html";
        }
        // Change user step
        userStep = step;
    }
    // Get questions
    asyncFetch();
});
// function play(){
//     // step-1: hide the home screen. to hide the screen add the hidden to the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the playground
    
//         const playgroundSection = document.getElementById('play-ground');
//        playgroundSection.classList.remove('hidden');
//     }

function handleKeyboardUpEvent(event){
    const PlayerPressed = event.key;
    console.log('player pressed', PlayerPressed);

    // stop the game if player pressed 'esc'
    if(PlayerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   //console.log(PlayerPressed,expectedAlphabet)
   //check matched or not
   if (PlayerPressed===expectedAlphabet){
    console.log('you got a point');
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    
    // //update score
    // // 1.get the current score
    // const currentScoreElement = document.getElementById('current-score')
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseFloat(currentScoreText);
    // console.log(currentScore);

    // //increase the score by 1
    // const newScore = currentScore + 1;

    // //show the updated score
    //  currentScoreElement.innerText = newScore;
    
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
   }
   else{
    console.log('you missed. you lost a life')
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if(updatedLife === 0){
        gameOver();
    }


    // //reduce life
    
    // // step-1: get the life value
    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseFloat(currentLifeText);
    // console.log(currentLife);

    // //step-2: reduce life
    // const newLife = currentLife - 1;

    // //step-3: show reduced life
    // currentLifeElement.innerText = newLife;


   }
     
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardUpEvent);

function continueGame(){
    //step-1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet :', alphabet);

    // display randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    //set key background colour
    setBackgroundColorById(alphabet);

    }


function play(){
    //hide home screen & final score,show playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset life & score
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    //get final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
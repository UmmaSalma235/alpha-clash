// function play(){
//     // step-1: hide the home screen. to hide the screen add the hidden to the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the playground
    
//         const playgroundSection = document.getElementById('play-ground');
//        playgroundSection.classList.remove('hidden');
//     }

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
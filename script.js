let userScore = 0;
let aiScore = 0;

// access the each choice from choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBord = document.querySelector(".user-score");
const aiScoreBord = document.querySelector(".ai-score");

/* for playing game we need user as well as ai choices
access user choice
generate ai choice 
compare both choice 
score update */


//Play Game Code:
const playGame = (userChoice) => {

    console.log("User Choice = ", userChoice); // now we have user Choice

    const aiChoice = genAiChoice();  //Generate AI choice -> modular way of functions(reusable,small functions)
    console.log("AI Choice = ", aiChoice);  // now we have user Choice


    //compare the results
    if (userChoice === aiChoice) {
        drawGame(); //draw game
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // ai choice will scissor/paper
            userWin = aiChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // ai choice will scissor/rock
            userWin = aiChoice === "scissor" ? false : true;
        }
        else {
            // ai choice will paper/rock
            userWin = aiChoice === "rock" ? false : true;

        }
        showWinner(userWin,userChoice,aiChoice);
    }

}



//UserChoice : for each selected choice we print the user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice); //call playGame and pass UserChoice
    })
})

// Generate AI choice
const genAiChoice = () => {
    const options = ["rock", "paper", "scissor"]

    //rock paper scissors  generate randomly any one
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}


//Winning Conditions:
const drawGame = () => {
    console.log("Game Draw, Play again.");
    msg.innerHTML = "Game Draw";
    msg.style.backgroundColor = "#5358ed";
}

const showWinner = (userWin,userChoice,aiChoice) => {
    if (userWin) {
        // Update Scores
        userScore++;
        userScoreBord.innerText = userScore;

        console.log("You Win !!!");
        // update msg
        msg.innerHTML =`You Win !!! your ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // Update Scores
        aiScore++;
        aiScoreBord.innerText =aiScore;

        console.log("You Lose");
        // update msg
        msg.innerHTML = `You Lose.. ${aiChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}





 
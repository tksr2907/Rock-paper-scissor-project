//(make two variable to track user score and computer score)
let userscore=0;
let compscore=0;
// (To select all HTML elements with the class name "choice" and store them in a variable called choices.)
//(actually we are accessing our all choices)
//(Query selector)-:
//document.querySelector("my id/.my class/tag")(return first element)
//(query selector all)-:
//document.querySelectorAll("my id/my class/tag")(returns node list of all elements)

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
// Math.random()it generate random number(randomly string generation is not possible)
//(we can genearte whole number from math.random() and we treat this whole number as an index of array)
//(random number always generate between 0 and 1 and we want to generate between 0 to 2)


};
//inner text-:only text is coming purely
//inner HTML-:text+HTML tag is also coming
const drawGame =() =>{
    msg.innerText="Game was draw.play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userscore++;
    userScorePara.innerText=userscore;
    msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compscore++;
    compScorePara.innerText=compscore;
    msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
}
};


const playGame=(userChoice)=>{
    
//Generate computer choice
const compChoice=genCompChoice();


if(userChoice==compChoice){
//draw game
drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin =compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
//rock scissors
userWin = compChoice === "scissors" ? false : true;

    }else{
        // rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
//(get attribute)-to get the attribute value
//set attribute(to set the attribute value)
//we add event listener because if we select any choices then this particular id is coming to ours and we start our game.
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);//we pass user choice
    });
});



//(window object)-:the window object represent an window in a browser.it is a browser object(not javascript) and is
//automatically created by the browser.it is a global object with lots of properties and methods.

//(DOM(Document object model))-:whatever codes we write in HTML we can access them in javascript these HTML Codes are 
//converted into object in javascript and these object are known as document(tree like structure)and these document are available
//inside the window object.

//we use javascript to change the code during runtime(dynamically).we can't use HTML/CSS.

//(DOM Manipulation)-:
//(1).selecting with id-:
//let heading=document.getElementById("header");
//(2).selecting with class-:
//let para=document.getElementsByClassName("header2");
//(3).selecting with tag-:
//let ptags=document.getElementsByTagName("p");
//(4).Query selector-:
//(5).query selector all-:
 

const beginGame = (() => {
   
const board = document.querySelector(".board")
const gameboard = new Array(9).fill("_",0);
   
const btns = document.querySelectorAll(".btn");
const markers = document.querySelector('.markers')


let player1;
btns.forEach((button)=> {
        button.addEventListener('click', ()=> {
            (() => {
            markers.style.display = "none"
            })()
            console.log(button.value + "Jackdaniels")
            player1 = button.value;
            console.log(player1)
        })
    })

    gameboard.forEach((item)=> {
       
        const inputSquare = document.createElement('button');
        inputSquare.className = "input";
        inputSquare.textContent = '';
        board.append(inputSquare)
        inputSquare.addEventListener('click', ()=> {

            if(player1 === 'o' && inputSquare.textContent === "" ){
                inputSquare.textContent = "o"
            } else if(player1 === 'x' && inputSquare.textContent === ""){
                inputSquare.textContent = "x"
            }
        })
    })



})


function createPlayer(name){
const playerName = name;

let score = 0;
const getScore = () => score;
const addScore = () => { score++; }
console.log(name, score);


return{ playerName, getScore, addScore}
}


let josh = createPlayer("Josh")
let jaden = createPlayer("Jaden")

jaden.getScore();
jaden.addScore();
beginGame();
console.log({
    playerName: jaden.playerName,
    score: jaden.getScore()
})

const play = (()=> {
    console.log("Play")
    const winlogic = () => {
        if(x){
            console.log(x)
        }
    }
});



const newGame = (() => {
    beginGame();
    console.log("Points Reset. Starting New Game")
    console.log();


})



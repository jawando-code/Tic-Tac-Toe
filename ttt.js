 

const beginGame = (() => {
    const markers = document.querySelector('.markers')
    const btns = document.querySelectorAll(".btn");
    const board = document.querySelector(".board")
    const gameboard = new Array(9).fill("_",0);
    let player1;
    let player2;
    btns.forEach((button)=> {
            button.addEventListener('click', ()=> {
                (() => {
                markers.style.display = "none"
                })()
               
                player1 = button.value;

                (()=>{
                    if(player1 === 'x'){
                        player2 = 'o';
                    } else if(player1 === "o"){
                        player2 = "x";
                    }
                })()
                
                
            })
        })
    
            
     
    

    gameboard.forEach((item)=> {
       
        const inputSquare = document.createElement('button');
        inputSquare.className = "input";
        inputSquare.textContent = '';
        board.append(inputSquare)
       
        inputSquare.addEventListener('click', ()=> {

            const inputs = document.querySelectorAll('.input')
            if(player1 === 'o' && inputSquare.textContent === "" ){
                inputSquare.textContent = "o"
                player2 = "x"
            } else if(player1 === 'x' && inputSquare.textContent === ""){
                inputSquare.textContent = "x"
                player2 = "o"
                console.log("click")
            }
            console.log("this is player 2" + player2)
        })
        
    })

})
  let botMove = function (){
             inputs[3].click();
            if(player1 === 'o' && inputSquare.textContent === ''){
                player2 = 'x'
                inputSquare.textContent = 'x'
               
                console.log('human ' + player1, 'bot ' + player2);
            }  else if(player1 === 'x' && inputSquare.textContent === ''){
                player2 = 'o';
                inputSquare.textContent = "o";
                inputs[1].click();
                console.log('human ' + player1, 'bot ' + player2);
            }}  
            
const botResponse = () => {
     const board = document.querySelector('.board');
     const inputs = document.querySelectorAll('.input')
    board.addEventListener("click", event => {
     if(event.target !== event.currentTarget) {                
      
            

            }

})}
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


let clicker = function() {
    const board = document.querySelector('.board');
    const inputs = document.querySelectorAll(".input")
    board.addEventListener("click",()=> {

    inputs[0].click();
    inputs[1].click();
    inputs[4].click()
    
    console.log("Clicked")



    })
   
}

clicker();
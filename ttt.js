
let humanMark;
let botMark;

const board = document.querySelector('.board')
const startEvent = (()=>{
    const start = document.querySelector("#start");
    start.addEventListener('click', ()=> {
        start.style.display = 'none';   
        getNameMark();
    })

})()

const getNameMark = (()=>{
    const nameEntry = document.querySelector(".nameEntry");
    nameEntry.style.display = 'flex';
    const playerName = document.querySelector('.playerName')
    const submit = document.querySelector('#submit');
        
    submit.addEventListener('click', (event)=>{
        event.preventDefault();
        const getName = function(){
                if(playerName.value === ''){
                    playerName.value = "Player1"
                } else {
                    return playerName.value;
                }
            }

        getName();
        
       
        nameEntry.style.display = 'none'
        getMark();
        });
        const getMark = (()=> {
            const xoSelctor = document.querySelector('.xoSelect')    
            xoSelctor.style.display = 'flex';
            xoSelctor.addEventListener('click',(event) =>{
                    humanMark = event.target.value;
                        if(humanMark === 'o'){
                        botMark = 'x'
                        } else if(humanMark === 'x'){
                        botMark = "o";
                        }
                    
                xoSelctor.style.display = 'none';
                const guiName = document.querySelector('.guiName');
                const div = document.createElement('div');
                const symbol = document.createElement('div')
                const symbol2 = document.createElement('div')
                const div2 = document.createElement('div');
                const symbolContainer = document.querySelector('.symbol')
                div.textContent = playerName.value;
                symbol.textContent = humanMark
               symbol.classList = 'symbol'
                div2.textContent = 'ai.Bot'
                symbol2.textContent = botMark;
                symbol2.classList = 'symbol'
                symbolContainer.append(symbol,symbol2)
                guiName.append(div,div2)
                    board.style.display = 'grid';
                    showGame();
                })
        })
})
    


const showGame = (()=>{
    let gameboard = [];

    let rows = 3;
    let columns = 3;

    for(let i = 0; i < rows; i++){
       newRow = [];
       newRow.push(i);
       gameboard.push(newRow )
        for(let j = 0; j < columns; j++){
            gameboard[i][j] = null;
        }
    }
   
    gameboard.forEach((row)=>{

        row.forEach((cell)=>{
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.textContent = '';
            board.append(cellDiv)
        })
    
    })
     gamePlay();
     const gamePlay = (()=>{

        
     })  
    
})

const gamePlay = (()=>{
    

})


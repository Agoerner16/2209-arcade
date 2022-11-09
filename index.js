//state 

const state = {
players: ['X', '0'],
currentPlayer: 0, 
}

// helper functions 

const changeTurn = () => {
    state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
}

const getCurrentPlayer = () => state.players[state.currentPlayer];

const renderGame = () => {
    generatePlayer();
    changeTurn();
}


//dom selectors
const cell = document.getElementById('cell');
const  board = document.getElementById('board');
const restartButton = document.getElementById('restart');
const playerTurn = document.getElementById('playerTurn')

const generatePlayer = () => {
    const text = `It's currently ${getCurrentPlayer()}'s turn!`
    playerTurn.innerText = text;
}
// event listeners 

board.addEventListener('click', (event) => {
   event.target.innerText = 'x';
   // event.target.classList.add(classname)
   renderGame();
})

restartButton.addEventListener('click', (event) => {
 board.innerText = '';
 //board.classList.remove
})



//bootstrapping 
renderGame(); 
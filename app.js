const buttonP1 = document.querySelector('#p1-button');
const buttonP2 = document.querySelector('#p2-button');
const buttonReset = document.querySelector('#reset');
const scoreP1Display = document.querySelector('#p1-display');
const scoreP2Display = document.querySelector('#p2-display');
const winPoinMax = document.querySelector('#winPoin')

let player1Score = 0;
let player2Score = 0;
let winpoin = 0;
let isgameover = false;

function disableButton() {
	if (winpoin == 0) {
		buttonP1.setAttribute('disabled', '');
		buttonP2.setAttribute('disabled', '');
	} else {
		buttonP1.removeAttribute('disabled');
		buttonP2.removeAttribute('disabled');
	}
}

function reset(){
    isgameover = false;
    player1Score = 0;
    player2Score = 0;
    scoreP1Display.textContent = 0;
    scoreP2Display.textContent = 0;
}
buttonReset.addEventListener('click', reset)

buttonP1.addEventListener('click', () =>{
    if(!isgameover){
        player1Score += 1;
        if(player1Score === winpoin){
            isgameover = true;
        }
        scoreP1Display.textContent = player1Score
    }
})
buttonP2.addEventListener('click', () =>{
    if(!isgameover){
        player2Score += 1;
        if(player2Score === winpoin){
            isgameover = true;
        }
        scoreP2Display.textContent = player2Score
    }
})


winPoinMax.addEventListener('change', function() {
    winpoin = parseInt(this.value);
    disableButton();
    reset()  ;  
})

disableButton();
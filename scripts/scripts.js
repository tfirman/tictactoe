var cells = [0,0,0,0,0,0,0,0,0];
var gameOver = false;

function turn(t) {
  var t = 0;
  cells.forEach(function(i) {if(i!=0)t++;});
  return t;
}

function checkThreeForWin(i,j,k){
  if (cells[i]===1 && cells[j]===1 && cells[k]===1) {
    alert ('X wins!');
    gameOver = true;
  } else if (cells[i]===2 && cells[j]===2 && cells[k]===2) {
    alert ('O wins!');
    gameOver = true;
  };
}

function checkForWin(){
  checkThreeForWin(0,1,2);
  checkThreeForWin(3,4,5);
  checkThreeForWin(6,7,8);
  checkThreeForWin(0,3,6);
  checkThreeForWin(1,4,7);
  checkThreeForWin(2,5,8);
  checkThreeForWin(0,4,8);
  checkThreeForWin(2,4,6);
}

function clickedCell(i) {
  if (cells[i] === 0 && !gameOver) {
    if (turn() % 2 === 0) {
        $("#cell"+i).text("X");
        cells[i] = 1;
    } else {
        $("#cell"+i).text("O");
        cells[i] = 2;
    };
    checkForWin();
    if(turn()===9 && !gameOver) {
      alert ('Game was a draw!')
      gameOver = true;
    };
  };
}

$(document).ready(function(){
  for (var i = 0; i < cells.length; i++) {
    $("#cell" + i).val(i);
    $("#cell" + i).click(function(event){
      event.preventDefault();
      if (cells[$(this).val()] === 0) {clickedCell($(this).val());}
    });
  };
});

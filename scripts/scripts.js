var cells = [0,0,0,0,0,0,0,0,0];

function turn(t) {
  var t = 0;
  cells.forEach(function(i) {if(i!=0)t++;});
  return t;
}

function clickedCell(i) {
  console.log (cells);
  console.log (turn());
  console.log (i);
  if (cells[i] === 0) {
    if (turn() % 2 === 0) {
        $("#cell"+i).text("X");
        cells[i] = 1;
    } else {
        $("#cell"+i).text("O");
        cells[i] = 2;
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
  }

});

























// $("#cell0").click(function(event){
//   event.preventDefault();
//   if (cellArray[0] === 0) turn = clickedCell(cellArray,turn,0);
// });
// $("#cell1").click(function(event){
//   event.preventDefault();
//   if (cellArray[1] === 0) turn = clickedCell(cellArray,turn,1);
// });
// $("#cell2").click(function(event){
//   event.preventDefault();
//   if (cellArray[2] === 0) turn = clickedCell(cellArray,turn,2);
// });
// $("#cell3").click(function(event){
//   event.preventDefault();
//   if (cellArray[3] === 0) turn = clickedCell(cellArray,turn,3);
// });
// $("#cell4").click(function(event){
//   event.preventDefault();
//   if (cellArray[4] === 0) turn = clickedCell(cellArray,turn,4);
// });
// $("#cell5").click(function(event){
//   event.preventDefault();
//   if (cellArray[5] === 0) turn = clickedCell(cellArray,turn,5);
// });
// $("#cell6").click(function(event){
//   event.preventDefault();
//   if (cellArray[6] === 0) turn = clickedCell(cellArray,turn,6);
// });
// $("#cell7").click(function(event){
//   event.preventDefault();
//   if (cellArray[7] === 0) turn = clickedCell(cellArray,turn,7);
// });
// $("#cell8").click(function(event){
//   event.preventDefault();
//   if (cellArray[8] === 0) turn = clickedCell(cellArray,turn,8);
// });

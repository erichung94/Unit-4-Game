$(document).ready(function(){
  var randomNum = Math.floor(Math.random()*101+19);
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(randomNum);

  //Initializing random jewels. 
  var jewels = [0,0,0,0]
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  reset();
  function winLose(){
    //Win Condition
    if (userTotal == randomNum)
    {
      alert("You Win!");
      wins++;
      $('#numberWins').text(wins);
      reset();
    }
    
    //Lose Condition
    else if (userTotal > randomNum){
      alert("You Lose! ):");
      losses++;
      $('#numberLosses').text(losses);
      reset();
    }
  }

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      randomNum = Math.floor(Math.random()*101+19);
      console.log(randomNum);
      $('#randomNumber').text(randomNum);
      for (i=0; i<jewels.length; i++){
        jewels[i]=Math.floor(Math.random()*11 + 1);
      }
      userTotal= 0;
      $('#total').text(userTotal);
      } 
      $('#blue').on("click", function(){
        userTotal = userTotal + jewels[0];
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        winLose();
      })  
      $('#green').on ('click', function(){
        userTotal = userTotal + jewels[1];
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        winLose();
      })  
      $('#red').on ('click', function(){
        userTotal = userTotal + jewels[2];
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        winLose(); 
      })  
      $('#yellow').on ('click', function(){
        userTotal = userTotal + jewels[3];
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal);
        winLose(); 
      }); 
}); 
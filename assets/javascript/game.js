$(document).ready(function(){

// PICKS RANDOM NUMBER BETWEEN 19-120
var Random=Math.floor(Math.random()*101+19)

// APPENDS NUMBER TO MATCH TO DIV
$('#randomNumber').text(Random);

// ASSIGNS EACH GEM WITH A RANDOM NUMBER BETWEEN 1-12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1) 

// SETS UP CLICK FUNCTION FOR EACH GEM
$('#diamond').on ('click', function(){
  userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
})  
$('#sapphire').on ('click', function(){
  userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
})  
$('#ruby').on ('click', function(){
  userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
        if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
})  
$('#amber').on ('click', function(){
  userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        if (userTotal === Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
});  

// VARIABLES FOR SCORES
var userTotal= 0; 
var wins= 0;
var losses = 0;

// APPENDS SCORES TO DIVS
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// ALERTS USER OF A WIN AND APPENDS WIN TO TOTAL SCORE
function yay(){
  alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
// ALERTS USER OF A LOSS AND APPENDS LOSS TO TOTAL SCORE
function loser(){
  alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

// RESETS THE GAME 
function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
    $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
} 

}); 
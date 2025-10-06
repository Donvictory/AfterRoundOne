
let display = document.getElementById('Gamenumber');
let UserGuess ;
let computerGuess ;
function Play(){
    UserGuess =  Number((display.value));
    computerGuess = Math.floor(Math.random() * 6);
   if( UserGuess > 10 || !UserGuess){
        alert("Please enter a number from 0 to 10");
        return;
    }
    else{
         document.querySelector('.notice').innerHTML = `You picked ${UserGuess},  computer picked ${computerGuess}`
    }
    if(UserGuess === computerGuess){
      alert(`Eenter a different number. \nComputer picked ${computerGuess}`);
    }
}

function theGame(number ) {
     if(UserGuess === undefined || computerGuess === undefined){
      alert('Click Play button first');
      return
     }
       let computerGuess1 = Math.floor(Math.random() * 6);
       number  = Number(number);
      let result = number + computerGuess1 ;
     
       document.querySelector(`.calc`)
       .innerHTML = `You <img src="${number}-finger-emoji.jpeg" alt="">  
       computer <img src="${computerGuess1}-finger-emoji.jpeg" alt="">`;
       document.querySelector('.Add')
       .innerHTML = `<img src="${number}-finger-emoji.jpeg" alt=""> + 
       <img src="${computerGuess1}-finger-emoji.jpeg" alt=""> = ${result}`;

        let score = Number(JSON.parse(localStorage.getItem('score'))) || {
        Wins: 0,
        Losses: 0,
        }
      if(Number(UserGuess) === result){
        document.querySelector('.result').innerHTML = `You Win!`;
        score.Wins += 1;
         document.querySelector(`.calc`)
       .innerHTML = '';
        document.querySelector('.score').
        innerHTML = `Wins: ${score.Wins} , Losses: ${score.Losses};`
      
      } else if (Number(computerGuess)  === result){
        document.querySelector('.result').innerHTML = `You Lose!`;
         score.Losses += 1;
          document.querySelector(`.calc`)
       .innerHTML = '';
        document.querySelector('.score').
        innerHTML = `Wins: ${score.Wins} , Losses: ${score.Losses}`
      } else{
        document.querySelector('.result').innerHTML = `Try Again! Your Game number is ${UserGuess}`;  
      }
           localStorage.setItem('score', JSON.stringify(score));
    }

 
 
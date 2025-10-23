let buttons = document.querySelectorAll(".button");  
let restartBtn = document.querySelector("#reset-btn");  
let msg = document.getElementById('msg');
let arr =[0,0,0,0,0,0,0,0,0];
let counter=false;

document.getElementById('btn1').addEventListener('click',check(document.getElementById('btn1'),0));
document.getElementById('btn2').addEventListener('click',check(document.getElementById('btn2'),1));
document.getElementById('btn3').addEventListener('click',check(document.getElementById('btn3'),2));
document.getElementById('btn4').addEventListener('click',check(document.getElementById('btn4'),3));
document.getElementById('btn5').addEventListener('click',check(document.getElementById('btn5'),4));
document.getElementById('btn6').addEventListener('click',check(document.getElementById('btn6'),5));
document.getElementById('btn7').addEventListener('click',check(document.getElementById('btn7'),6));
document.getElementById('btn8').addEventListener('click',check(document.getElementById('btn8'),7));
document.getElementById('btn9').addEventListener('click',check(document.getElementById('btn9'),8));

function check(btn,ind){
 
  btn.addEventListener('click', () => {
    if(counter){
    btn.textContent = 'O';  
    btn.style.color = 'red';  
    arr[ind]=1;
    counter=false;
    }
    else{
      btn.textContent = 'X';  
      btn.style.color = 'blue';  
      arr[ind]=2;
      counter=true
      
    }
    console.log(arr)
    if(win()){

      msg.textContent="YOU WIN !!!"
      

    }
    
  });

}

function win(){
  if((arr[0]==1 && arr[1]==1 && arr[2]==1) || (arr[0]==2 && arr[1]==2 && arr[2]==2)){
    return true;
  }
  // else if((arr[3] && arr[4] && arr[5]) || (!arr[3] && !arr[4] && !arr[5])){
  //   return true;
  // }
  // else if((arr[6] && arr[7] && arr[8]) || (!arr[6] && !arr[7] && !arr[8])){
  //   return true;
  // }
  // else if((arr[0] && arr[3] && arr[6]) || (!arr[0] && !!arr[3] && !arr[6])){
  //   return true;
  // }
  // else if((arr[1] && arr[4] && arr[7]) || (!arr[1] && !arr[4] && !arr[7])){
  //   return true;
  // }
  // else if((arr[2] && arr[5] && arr[8]) || (!arr[2] && !arr[5] && !arr[8])){
  //   return true;
  // }
  // else if((arr[0] && arr[4] && arr[8]) || (!arr[0] && !arr[4] && !arr[8])){
  //   return true;
  // }
  // else if((arr[2] && arr[4] && arr[6]) || (!arr[2] && !arr[4] && !arr[6])){
  //   return true;
  // }
  return false;
}
restartBtn.addEventListener("click", function(){ alert("Hello World!"); });
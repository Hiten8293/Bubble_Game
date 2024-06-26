var hitrn; 

function GetNewHit() {
     hitrn = Math.floor(Math.random()*10) ;
    document.querySelector("#newHit").textContent=hitrn;

}

function MakeBubble(){
 var clutter = "";

     for(var i=0; i<=74; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
     }
     document.querySelector("#panelBottom").innerHTML=clutter;
}

let timer = 60;
function timeRunner(){
     let timeint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#countdown").textContent=timer;
        } 
        else{
            clearInterval(timeint);
            document.querySelector("#panelBottom").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000)

}

let score = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#panelBottom").addEventListener("click",
    function(dets){
      var clickedNumber = (Number(dets.target.textContent));
      if (clickedNumber === hitrn ){
        increaseScore();
        MakeBubble();
        GetNewHit();
      }
})
GetNewHit();
timeRunner();
MakeBubble();
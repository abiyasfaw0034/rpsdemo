var player1Score = 0;
var player2Score = 0;
var player1 = document.querySelector(".p1");
var player2 = document.querySelector(".p2");
var score = document.querySelector(".result");

var size = document.querySelectorAll(".item").length;
for(var i=0; i<size; i++){
    document.querySelectorAll(".item")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        clicked(text);
        buttonanim(text);
    })
}

function clicked(event){
    
    var comp = Math.floor(Math.random()*3)+1;
    var computerChoice;
        if(comp===1){
            computerChoice="R";
        }
        else if(comp===2){
            computerChoice="P";
        }
        else{
            computerChoice="S";
        }
    if(event==="R" && computerChoice==="P"){
        player2Score++;
        player2.innerHTML = `${player2Score}`;
        score.innerHTML = "you chose rock and the computer chose paper so The computer won";
    }
    else if(event==="R" && computerChoice==="S"){
        player1Score++;
        player1.innerHTML = `${player1Score}`;
        score.innerHTML = "you chose rock and the computer chose scissor so You won";
    }
    else if(event==="P" && computerChoice==="R"){
        player1Score++;
        player1.innerHTML = `${player1Score}`;
        score.innerHTML = "you chose paper and the computer chose rock so You won";
    }
    else if(event==="P" && computerChoice==="S"){
        player2Score++;
        player2.innerHTML = `${player2Score}`;
        score.innerHTML = "you chose paper and the computer chose scissor so The computer won";
    }
    else if(event==="S" && computerChoice==="R"){
        player2Score++;
        player2.innerHTML = `${player2Score}`;
        score.innerHTML = "you chose scissor and the computer chose rock so The computer won";
    } 
    else if(event==="S" && computerChoice==="P"){
        player1Score++;
        player1.innerHTML = `${player1Score}`;
        score.innerHTML = "you chose scissor and the computer chose paper so You won";
    }
    else{
        score.innerHTML = `you chose ${event} and the computer chose ${computerChoice} so It's a draw`;
    }
};
function buttonanim(currentkey){
    var activeb = document.querySelector("."+currentkey);
    activeb.classList.add("pressed");
    setTimeout(() => {
        activeb.classList.remove("pressed");
    }, 100);
}
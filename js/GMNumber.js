var randomNum =Math.round(Math.random()*20);
var btn = document.getElementById("btnCheck");

document.getElementById("highscore").innerText=getItem();



var score=20;
btn.addEventListener("click",function(){
    var number = document.getElementById("inputNum").value;
    
    document.getElementById("lowMsg").style.display="none";
    document.getElementById("guessMsg").style.display="none";
    document.getElementById("highMsg").style.display="none";
    document.getElementById("correctMsg").style.display="none";


    if(number == ""){
        document.getElementById("guessMsg").style.display="block";
    }
    else if(number < randomNum){
        document.getElementById("lowMsg").style.display="block";

        score--;
    }
    else if(number > randomNum){
        document.getElementById("highMsg").style.display="block";

        score--;

    }
    else{
        document.getElementById("correctMsg").style.display="block";
        document.getElementsByTagName("body")[0].style.backgroundColor="rgb(40, 173, 74)";
        document.getElementById("inputNum").style.pointerEvents="none";
    
        if(score>getItem()){
            setItem("high score",score);
            document.getElementById("highscore").innerText=score;
        }
    }
    document.getElementById("score").innerText=score;
});


document.getElementById("inputAgain").addEventListener("click",function(){
    location.reload();
});



function setItem(key , value){
    sessionStorage.setItem(key,value);
}

function getItem(){
    return sessionStorage.getItem("high score");
}
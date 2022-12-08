
const answer=Math.floor(Math.random()*10 +1);

let chances=0;

document.getElementById("submitButton").onclick=function(){

    let guess=document.getElementById("guessNumber").value
    guess+=1;

    if(guess==answer){
        alert(`$(answer) is the answer, it took you ${chances} times`)
    }
    else if(guess<answer){
        alert("Too small")
    }
    else{
        alert("Too biggeeeerrrr")
    }
    console.log(guess);
}
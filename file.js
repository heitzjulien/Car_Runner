let container = document.querySelector("container");
let car_player = document.querySelector("car_player");
let road = document.querySelector("road");

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

window.addEventListener("keydown", (start)=>{
    //console.log(start);
    if(start.code == "Space"){
        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

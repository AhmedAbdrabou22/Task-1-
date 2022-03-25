import {snakeSpeed , update as updateSnake , draw as drawSnake , getSnakeHead , snakeheat} from "./snake.js"
import {update as updateFood , draw as drawFood} from "./food.js"
import {outSideGrid} from "./grid.js"

let gameover = 0;
let lastRendertime = 0;
const gameBoard = document.querySelector(".gameBoard")
function main(currentTime){
    if(gameover){
        if(confirm("You Lost Try again or not TYA LOSER")){
            window.location = "/";
        }
        return;
    }
    window.requestAnimationFrame(main);

    //هنجيب الثواني اللي بين استدعاء الفانكشن الحالي والاستدعاء اللي فات 
    const secondSincelastrende = (currentTime - lastRendertime) / 1000; // القسمه علي 1000 علشان نجيب الزمن بالثواني

    //هنعمل شرط السرعة للتعبان علشان يتحرك في الوقت اللي هو 2

    if(secondSincelastrende < 1/snakeSpeed) return;

    // console.log(secondSincelastrende);//الفرق بين استدعاء الفانكشن في الوقت الخالي والوقت الماضي بيتحرك بسرعه وهو السرعه اللي     هيتحرك فيها التعبان علشان كدا هنخلي سرعة للتعبان


    lastRendertime  = currentTime;


    update(); // => مسوله انها تخدث المتغيرات في main
    draw(); // => مسووله انها تطلع الاكل كل ما داله المين تشتعل 

}
window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

//احنا هنحط تعبان اذا كان اتخبط في نفسه او طلع بره المساحه
//gameover => true of false
function checkDeath(){
    // outSideGrid => file grid.js
    //getSnakeHead => file snake.js هيرجع اول مكان في التعبان علشان هو اول مكان ممكن يتخبط
    //snakeheat => file snake.js
    gameover = outSideGrid(getSnakeHead()) || snakeheat();
}
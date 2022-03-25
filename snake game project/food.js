import {expanSnake , onSnake} from "./snake.js"
import {randomgridPosition} from "./grid.js"
//مكان الطعام

// بما ان النقطه 0 0 وتكون خارج الجريد ف لازم تكون الواي بواحد والاكس 1 علي الاقل
let food = getRandomfoodposition();

// متغير لمقدار الزياده في التعبان
let growRate = 5;
export function update(){
    if(onSnake(food)){
        expanSnake(growRate)
        food = getRandomfoodposition();
    }
}

export function draw(gameBoard){
    /*
    هبنقول ان كل  نقطه داخل الثعبان او داخل جسم الثعبان كانها سيجمنت 
    احنا كده في الاول اللي احنا هنحط عنصر الثعبان داخل الجيم بورد بتاعتنا ونحطها من خلال اكس واي اللي هو الجريد
    السجمنت دوت اكس معناها ان انا احط عنصر الثعبان في المكان اكس
    السجمنت دوت واي معناها ان انا احط عنصر الثعبان في المكان واي
    */
        const foodElement = document.createElement('div');
        foodElement.style.gridColumnStart = food.x;
        foodElement.style.gridRowStart = food.y;
        foodElement.classList.add("food")
        gameBoard.appendChild(foodElement);
}

/**
 * 
 * هذه هي داله بتحسب مكان الاكل عشوائيه لو كان الاكل او مكان الاكل يساوي ما فيش او طلع مكان جسد الثعبان بحسب مكان اكل جديد لو ده ما حصلش رجع لي مكان الاكل
 * 
 * هذه الداله هنستخدمها في let food;
 */
function getRandomfoodposition(){
    let newFoodposition ;
    while(newFoodposition == null || onSnake(newFoodposition)){
        //randomgridPosition => هي دي الداله اللي هتحسب المكان العشوائي
        // هتكون موجود في ملف grid.js
        newFoodposition = randomgridPosition();
    }

    return newFoodposition;
}
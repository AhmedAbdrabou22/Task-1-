import { getInputdirction } from "./input.js"

//الاكواد الخاصة بالتعبان 
export const snakeSpeed =8;
let newSegment = 0;

/* شكل التعبان هيكون عبارة عن ارراي من النقط كل نقطة كانها اوبجكت والمكان بتاعها بيتحدد بي اكس وا واي 
وعملنا نقطة البدايه من النص 11 و 11
وهنرسم التعبان في داله الدرو

ال 3 اماكن للاكس و الواي هما التعبان

*/
const snakeBody = [{x : 11 , y : 11}]

export function update(){

    addSegment();

    let inputDirection = getInputdirction();
    /*
        حنا هنا بتقول ان احنا هنتحرك  نقطه او  كل مربع داخل جسمي تعبان  نفسه يتحرك 
    الي اللي قبل  يعني عنصر الثالث هيبقى مكان العنصر  ثاني 

    */
    for(let i  = snakeBody.length -2 ; i >= 0 ; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    /*
    معنى كده ان راس الثعبان تكون او هتتحرك بمقدار واحد نحيه الاكس بس المفروض اليوزر هو اللي هيحرك كا دا
    بما ان كل مره الثعبان هيتحرك في المربع هيزيد لا احنا محتاجين تخليه يتحرك من غير ما زود في المربعات بتاعته
فهو نروح له الداله اسمها درو علشان نفضي الجيم بورد
    */
    // snakeBody[0].x += 0;
    // snakeBody[0].y += 1; 

    /*
    علي حسب اتجاه اليوزر هنقدر نحرك راس الثعبان الاتجاه اللي هو دخله
    */
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function getSnakeHead(){
    return snakeBody[0];
}
export function snakeheat(){
    return onSnake(snakeBody[0],{ignoreHead : true})
}
export function draw(gameBoard){
    /*
    هبنقول ان كل  نقطه داخل الثعبان او داخل جسم الثعبان كانها سيجمنت 
    احنا كده في الاول اللي احنا هنحط عنصر الثعبان داخل الجيم بورد بتاعتنا ونحطها من خلال اكس واي اللي هو الجريد
    السجمنت دوت اكس معناها ان انا احط عنصر الثعبان في المكان اكس
    السجمنت دوت واي معناها ان انا احط عنصر الثعبان في المكان واي
    */
    snakeBody.forEach(segment=>{
        const snakeElemnt = document.createElement('div');
        snakeElemnt.style.gridColumnStart = segment.x;
        snakeElemnt.style.gridRowStart = segment.y;
        snakeElemnt.classList.add("snake")
        gameBoard.appendChild(snakeElemnt);
    })
}

export function expanSnake(amount){
    newSegment += amount;
}
//داله اختبر اذا كان هناك مكان طعام في جسم التعبان
export function  onSnake(position , {ignoreHead = false} = {}){
    //سنيك بدي تتسبب بعمل لوب على كل عنصر في الاراي اللي هي  جسم الثعبان
    return snakeBody.some((segment ,index) => {
        if(ignoreHead && index === 0) return false;
        //(الطعام دا ارجيومنت من ملف فوود)هنا بتقول ان لو نقطة في جسم التعبان موقعها بيساوي مكان الطعام
        return equalPositions(segment , position)
    })
}

//هنا بيقول لو مكان الطعام جه في اي نقطة في جسم التعبان رجعلي تروو
function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

// هنا في الداله كل مرةالتعبان هياكل هيزيد غي الحجم 
//new segment = 0; => علشان لما ياكل ويزيد ميزيدش ع طول
function addSegment(){
    for (let  i = 0 ; i<newSegment; i++){
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length -1]}
    }

    newSegment = 0;
}
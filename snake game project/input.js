//فايل ده هيكون مسؤول عن الانبوتس من اليوزر
/** 
 * انا باحط الاكس بصفر والواي بصفر علشان الثعبان ميتحركش الا لما اليوزر يدخل الاتجاهات
*/
let inputDirection = { x : 0 , y : 0 };
let lastInputDitrection = {x : 0 , y : 0};

/**
 * حنا هنا بنقول ان لما تضغط على زرار من الاتجاهات الاسهم الثعبان يتحرك في الاتجاه انت ضغطت عليه
 */
window.addEventListener("keydown" , (e)=>{
    // ظاهر لنا مشكله ان لما الثعبان يتحرك في الاتجاه اكس تقدر تحركوا في الناحيه العكس وفي اللعبه الاصليه ده ما بيحصلش فا هنعمل شرط يصلح داا

    /*
        الحل 
    ان وهو بيتحرك فيه الاتجاه اكس لايستقبل انبوت فيه  الاتجاه اكس والعكس
    */
    switch (e.key) {
        case "ArrowUp":
            if(lastInputDitrection.y !== 0 ) break;
            inputDirection = {x : 0 , y : -1}
            break;
        case "ArrowDown":
            if(lastInputDitrection.y !== 0 ) break;
            inputDirection = {x : 0 , y : 1}
            break;
        case "ArrowLeft":
            if(lastInputDitrection.x !== 0 ) break;
            inputDirection = {x : -1 , y : 0}
            break;
        case "ArrowRight":
            if(lastInputDitrection.x !== 0 ) break;
            inputDirection = {x : 1 , y : 0}
            break;
    
        default:
            break;
    }
})

//في هذه الداله احنا محتاجين نعمل ريتيرن الانبوت بتاع اليوزر اللي دخله
export function getInputdirction(){
    lastInputDitrection  = inputDirection;
    return inputDirection;
}
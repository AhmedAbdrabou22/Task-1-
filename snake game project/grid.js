const gridSize = 21;
export function randomgridPosition(){
    return {
        x:Math.floor(Math.random()*gridSize)+1 ,// 1 => 21
        y:Math.floor(Math.random()*gridSize)+1 
    };
}

export function outSideGrid(position){
    return(
        position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize
    )
}
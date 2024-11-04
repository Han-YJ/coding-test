
function solution(park, routes) {
    const maxY = park[0].length
    const maxX = park.length
    
    const move = {
    'E' : [0, 1],
    'W' : [ 0, -1],
    'S' : [1, 0],
    'N' : [-1, 0]
}

    const initX = park.findIndex((e=> e.includes('S')))
    const initY = park[initX].indexOf('S')
    let location = [initX, initY]
    
    routes.forEach((route) => {
        const [direction, amount] = route.split(" ")
        let [movedX, movedY] = location
        
        let movedAmt = 0
        while(movedAmt < amount) {
            movedX += move[direction][0]
            movedY += move[direction][1]
            if(movedX < 0 || movedY < 0 || movedX >= maxX || movedY >= maxY || park[movedX][movedY] ==='X') break;
            movedAmt++
        }
        
        if(movedAmt === ~~amount) {
           location = [movedX, movedY]
        }  
    })
    return location    
}
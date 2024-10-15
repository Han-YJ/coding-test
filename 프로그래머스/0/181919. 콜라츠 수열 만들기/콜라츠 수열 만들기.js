function solution(n) {
    let result = [n]
    let x = n
    
    while (x !== 1) {
        const isEven = x % 2 === 0
        if (isEven) {
            x = x/2
        } else {
            x = 3 *x + 1
        }
        result.push(x)
    }
    
    return result    
}
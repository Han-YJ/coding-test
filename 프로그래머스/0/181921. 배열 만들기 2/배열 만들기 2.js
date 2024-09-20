function solution(l, r) {
    let result = []
    for (let i = l; i <=r; i++) {
        if(i%5 === 0 && i.toString().split('').every((c) => ~~c === 5 || ~~c === 0)) {
            result.push(i)
        }
    }    
    return result.length === 0 ? [-1] : result
}
function solution(a, b, c, d) {
    const result = [a, b, c, d].reduce((res, curr) => {
        if(!res[curr]) {
            res[curr] = 0
        }
        res[curr] +=1
        return res
    }, {})
    
    const diffKeys = Object.keys(result).map(e => ~~e)
    const diffValues = Object.values(result)
    
    if(diffValues.length === 1) {
        return 1111 * ~~diffKeys[0]
    }
    
    if(diffValues.includes(3)) {
        let p = ~~diffKeys[diffValues.indexOf(3)]
        let q = ~~diffKeys[diffValues.indexOf(1)]
        return Math.pow(10 * p + q , 2)  
    }
    
    if(diffKeys.length === 2) {
        let [p, q] = diffKeys.sort().reverse()
        return (p + q) * (p-q)
    }
    
    if(diffKeys.length === 3) {      
        const prev = diffKeys.slice(0, diffValues.indexOf(2))
        const next = diffKeys.slice(diffValues.indexOf(2)+1)
        let [p, q] = [...prev, ...next]
        return p*q
    }
    
    if(diffKeys.length === 4) {
        return diffKeys.sort()[0]
    }
}
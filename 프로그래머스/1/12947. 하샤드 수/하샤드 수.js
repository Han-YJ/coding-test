function solution(x) {
    const tot = x.toString().split('').reduce((res, curr) => res + ~~curr, 0)
    return x % tot === 0
}
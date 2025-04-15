function solution(n) {
    let answer = 0;
    for (let i = 2; i<= n/2; i++) {
        if((n-1) % i ===0) {
            answer = i
            break;
        }
    }
    return answer === 0 ? n-1 : answer;
}
function solution(numbers) {
    const testStr = numbers.join('')
    let answer = 0
    for (let i = 1; i<=9; i++) {
        if(!testStr.includes(i)) answer += i
    }    
    return answer;
}
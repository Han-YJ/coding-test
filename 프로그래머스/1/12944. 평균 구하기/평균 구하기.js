function solution(arr) {
    return arr.reduce((tot, curr) => tot + curr) / arr.length;
}
function solution(my_string, index_list) {
    const dict = my_string.split('').reduce((res, curr, idx) => {
        return {...res, [idx]:curr}
    }, {})
    
    return index_list.map((index) => dict[index]).join('')
}
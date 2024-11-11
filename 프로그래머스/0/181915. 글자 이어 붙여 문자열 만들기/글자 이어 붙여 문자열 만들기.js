function solution(my_string, index_list) {    
    return index_list.reduce((res, curr) => res += my_string[curr] , '')
    }
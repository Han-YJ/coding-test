function solution(name, yearning, photo) {
    const dict = name.reduce((res, curr, idx) => {
        res[curr] = yearning[idx]
        return res
    } , {})

    return photo.map((nameArr) => {
        return nameArr.reduce((tot, curr) => {
            const currScore = dict[curr]
            if(!currScore) return tot
            return tot + currScore
        }, 0)
    })
}
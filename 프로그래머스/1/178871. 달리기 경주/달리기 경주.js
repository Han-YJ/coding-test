function solution(players, callings) {
    const dict = players.reduce((res, curr, idx) => {
        res[curr] = idx
        return res
    }, {})
    
    callings.forEach(calling => {
        const callPlayerIdx = dict[calling]
        const prevPlayer = players[callPlayerIdx-1]
        
        players[callPlayerIdx -1] = calling
        players[callPlayerIdx] = prevPlayer
        
        dict[calling] -= 1
        dict[prevPlayer] += 1
    })
    
    return players
}
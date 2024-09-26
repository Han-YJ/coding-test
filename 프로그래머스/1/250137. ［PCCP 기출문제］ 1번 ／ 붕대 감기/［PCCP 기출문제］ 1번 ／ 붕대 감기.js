function solution(bandage, health, attacks) {
    const [maxHealTime, healAmount, aditionalHealAmount] = bandage    
    let totalHealth = health
    
    const lastAttack = attacks[attacks.length - 1]    
    let totalTurns = Array(lastAttack[0]).fill(0).map((_, idx) => idx + 1)
    
    let healTime = 0
    let isContinue = true    
    totalTurns.every((turn) => {
        let isAttack = attacks[0][0] === turn
        if (isAttack) {
            totalHealth -= attacks[0][1]
            attacks = attacks.splice(1)
            healTime = 0            
        } else {
            healTime += 1    
            totalHealth += healAmount
        }
            
        if (healTime === maxHealTime) {
            totalHealth += aditionalHealAmount
            healTime = 0
        }
        
        if(totalHealth > health) {
            totalHealth = health
        }
        
        if(totalHealth < 0) {
            isContinue = false
        }
        return isContinue
    })
    
    return totalHealth <= 0 ? -1 : totalHealth
}
export function damages(caracter, target){
    if(!doHit(caracter.hitChance, target.missChance)){
        return 0
    }
    let dmgs = caracter.dmg
    if(doCrit(caracter.critChance)){
        dmgs = dmgs*caracter.critDmg
    }
    return dmgs
}

function doCrit(critChance){
    const rand = Math.floor(Math.random()*10000)/10000

    return rand <= critChance ? true : false
}

function doHit(hitChance, missChance){
    const rand = Math.floor(Math.random()*10000)/10000
    
    let miss = (1-missChance)*hitChance
    return rand <= miss ? true : false
}
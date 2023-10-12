export const calcul_macros = function(info){
    let cal = 0
    let low_cal = 0
    let high_cal = 0
    let result = []

    ///

    if(info.sexe === "h"){
        cal = (13.707*info.poids)+(4.923*info.taille)-(6.673*info.age)+66.479
    
    }
    else if(info.sexe === "f"){
        cal = (9.740*info.poids)+(1.729*info.taille)-(4.737*info.age)+667.051
    }

    ///

    if(info.activity === "low" && info.training <= 2){
        cal = cal*1.375
    }
    else if(info.activity === "medium" && info.training <= 2){
        cal = cal*1.55
    }
    else if(info.activity === "high" && info.training <= 2){
        cal = cal*1.725
    }
    if(info.activity === "low" && (info.training >= 3 && info.training <= 6)){
        cal = cal*1.55
    }
    else if(info.activity === "medium" && (info.training >= 3 && info.training <= 6)){
        cal = cal*1.725
    }
    else if(info.activity === "high" && (info.training >= 3 && info.training <= 6)){
        cal = cal*1.9
    }

    ///

    if(info.objectif === "seche"){
        low_cal = cal * 0.90
        high_cal = cal * 0.95 
    }

    if(info.objectif === "pdm"){
        low_cal = cal * 1.05
        high_cal = cal * 1.1

    }

    result.push(cal, low_cal, high_cal)

    return result

}
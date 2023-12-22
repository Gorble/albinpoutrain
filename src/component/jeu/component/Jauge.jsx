export function Jauge({caracter}){

    const hp = (caracter.hp/caracter.hp_max)*100

    return <div className="jauge">

        <div style={{ width: hp + "%" }}></div>
        
        <p>{(caracter.hp).toFixed(0)}/{(caracter.hp_max).toFixed(0)}</p>

    </div>
}
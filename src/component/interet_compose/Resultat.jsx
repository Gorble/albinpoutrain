import { useState } from "react"

export function Resultat({values}){

    const [state, setState] = useState([])

    const calcul = ()=>{
        let tab = []
        let pocket = []
        let last = 0

        let calc = (values.initial+values.regulier)*(1+(values.interet/100))
        if(isNaN(calc)) return tab

        tab.push(calc)
        last = calc

        pocket.push(parseFloat(values.initial)+parseFloat(values.regulier))

        for(let i = 0; i < (values.duree-1); i++){
            
            calc = (calc +values.regulier)*(1+(values.interet/100))
            tab.push(calc)
            pocket.push(pocket[pocket.length-1]+parseFloat(values.regulier))

            if(i == values.duree-2) last = calc
        }
        return [tab, last, pocket]
    }

    const formatNumberWithSpaces = (number) =>{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const flyOverMoney = (e) =>{
        e.currentTarget.classList.add("mouse_over")
    }

    const flyOutMoney = (e) =>{
        e.currentTarget.classList.remove("mouse_over")
    }

    
    const [tab, last, pocket] = calcul()
    console.log(tab)

    return <div className="bloc">

        {

            calcul().length === 0 ? 
                <p><strong>Attente d'un calcul...</strong></p>
                :
                <table>
                    <thead>
                        <tr>
                            <th colSpan={3}>Au bout de {tab.length} ans vous disposerez de: <span className="chiffre">{formatNumberWithSpaces(last.toFixed(2))}€</span></th>
                        </tr>
                        <tr>
                            <th>Année</th>
                            <th className="center">Total investi</th>
                            <th className="end">Montant avec intérêts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tab.map((elem, key) => 
                                <tr key={key} 
                                    onMouseEnter={flyOverMoney}
                                    onMouseLeave={flyOutMoney}
                                >
                                    <td className="chiffre">{key+1}</td> 
                                    <td className="chiffre center">{formatNumberWithSpaces(pocket[key])}</td> 

                                    <td className="chiffre end">{formatNumberWithSpaces(elem.toFixed(2))}€</td>
                                </tr>
                            )
                        }

                    </tbody>
                    

                    
                </table>
                                    
        }

    </div>
}
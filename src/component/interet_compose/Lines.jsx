const formatNumberWithSpaces = (number) =>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const flyOverMoney = (e) =>{
    e.currentTarget.classList.add("mouse_over")
}

const flyOutMoney = (e) =>{
        e.currentTarget.classList.remove("mouse_over")
}

export function Lines({tab, last, pocket}){

    return <table>
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
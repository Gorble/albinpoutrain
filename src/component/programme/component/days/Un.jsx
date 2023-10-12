export function Un({info}){
    return <>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title"  colSpan={3}>Lundi (Type 1 voir conseils et explications)</th>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                    <td>2 séries de 12 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                    <td>2 séries de 12 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                    <td>2 séries de 12 à 15 répétitions</td>
                </tr>

            </table>

        </div>
        <div className="day" >
            <table>
                <tr>
                    <th className="th_title" colSpan={3}>Lundi  (Type 2 voir conseils et explications)</th>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[4]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                    <td>2 séries de 12 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[3]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                    <td>2 séries de 12 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[3]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                    <td>2 séries de 12 à 15 répétitions</td>
                </tr>

            </table>
        </div>
    </>
}
export function Trois({info}){
    return <>
        <div className="day">
            
            <table>
                <tr>
                    <th className="th_title" colSpan={2}>Lundi</th>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[0]}</th>
                    <td>4 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[0]}</th>
                    <td>4 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[0]}</th>
                    <td>4 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>Elevations latérales</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>

            </table>

        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title">Mercredi</th>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[4]}</th>
                    <td>4 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[3]}</th>
                    <td>4 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[3]}</th>
                    <td>4 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>Elevations latérales</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>

            </table>
        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title">Vendredi</th>
                </tr>
                <tr>
                    <td>Effectuer l'avant dernière séance (car vous effectuer une même séance une fois sur deux.)</td>
                </tr>
            </table>
        </div>
    </>
}
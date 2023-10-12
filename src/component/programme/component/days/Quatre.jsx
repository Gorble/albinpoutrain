export function Quatre({info}){

    return <>
        <div className="day">
        
            <table>
                <tr>
                    <th className="th_title" colSpan={2}>Lundi</th>
                </tr>
                <tr>
                    <th>{info.exercices.pec[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[1]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[1]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
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
                    <th className="th_title" colSpan={2}>Mardi</th>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[1]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[2]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[3]}</th>
                    <td>5 séries de 6 à 8 répétitions</td>
                </tr>

            </table>
        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title" colSpan={2}>Jeudi</th>
                </tr>
                <tr>
                    <th>{info.exercices.dos[3]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[3]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[4]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[4]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
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
                    <th className="th_title" colSpan={2}>Vendredi</th>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[4]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[5]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                
                <tr>
                    <th>{info.exercices.jambe[6]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.jambe[7]}</th>
                    <td>5 séries de 10 à 15 répétitions</td>
                </tr>

            </table>

        </div>
    </>
}
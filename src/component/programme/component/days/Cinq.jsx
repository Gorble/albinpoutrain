export function Cinq({info}){
    console.log(info)
    return <>
        <div className="day">
    
            <table>
                <tr>
                    <th className="th_title">Lundi</th>
                </tr>
                <tr>
                    <th>{info.exercices.pec[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>Elevations latérales</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[1]}</th>
                    <td>3 séries de 8 à 10 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[2]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>Barre au front</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>


            </table>

        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title">Mardi</th>
                </tr>
                <tr>
                    <th>{info.exercices.dos[0]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[1]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[2]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>Elevation latéral buste penché</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>Curl haltère assis en supination</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>

            </table>
        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title">Mercredi</th>
                </tr>
                <tr>
                    <th>Crunch au sol</th>
                    <td>3 séries de 10 à 15 répétitions</td>
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
                    <td>5 séries de 10 à 15 répétitions</td>
                </tr>

            </table>

        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title">Vendredi</th>
                </tr>
                <tr>
                    <th>{info.exercices.pec[3]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[3]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.pec[4]}</th>
                    <td>3 séries de 6 à 8 répétitions</td>
                </tr>
                <tr>
                    <th>{info.exercices.dos[4]}</th>
                    <td>3 séries de 10 à 15 répétitions</td>
                </tr>
                <tr>
                    <th>Elevations latérale</th>
                    <td>5 séries de 10 à 15 répétitions</td>
                </tr>

            </table>

        </div>
        <div className="day">
            <table>
                <tr>
                    <th className="th_title">Samedi</th>
                </tr>
                <tr>
                    <th>Relevés de jambes suspendu</th>
                    <td>3 séries de 10 à 15 répétitions</td>
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
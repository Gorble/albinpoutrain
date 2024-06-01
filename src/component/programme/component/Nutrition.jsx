import { calcul_macros } from "../function/calcul_macros"
import conseil_diete  from "../bdd/conseil_diet.json"
import { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"


export function Nutrition({info, setGridSize}){

    const {theme} = useContext(ThemeContext)

    const calories = calcul_macros(info)
    const prot = parseInt(info.poids*1.8)
    const lipide = info.poids
    const total_calorie_prot_lipide = (prot*4) + (lipide*9)
    const diete = info.objectif === "pdm" ? conseil_diete[0].pdm : conseil_diete[1].seche


    const div = useRef()
    const title = useRef()
    const table = useRef()
    const about = useRef()

    const tableData = [
        { label: "Protéine", values: [prot, prot, prot] },
        { label: "Glucides", values: [
            parseInt((calories[0] - total_calorie_prot_lipide) / 4),
            parseInt((calories[1] - total_calorie_prot_lipide) / 4),
            parseInt((calories[2] - total_calorie_prot_lipide) / 4)
            ] 
        },
        { label: "Lipides", values: [lipide, lipide, lipide] },
        { label: "Total calorie", values: [
        parseInt(calories[0]),
        parseInt(calories[1]),
        parseInt(calories[2])
        ] },
    ];

    const divSize = () => {

        const gridSize = title.current.offsetHeight + 
                        table.current.offsetHeight +
                        about.current.offsetHeight + 
                        70

        setGridSize(gridSize)
        div.current.style.height = gridSize + "px"
    }

    useEffect(()=>{
        divSize()
    }, [])

    useEffect(()=>{

        window.addEventListener("resize", divSize)

        return () =>{
            window.removeEventListener("resize", divSize)
        }

    }, [])



    const handleMouseEnter = (e) => {
        const target = e.target
        const th = Array.from(document.querySelectorAll("th")).filter(elem => {
            if(elem.dataset.row || elem.dataset.col){
                return elem
            }
        })

        th.map(elem => {
            if(elem.dataset.row === target.dataset.row){
                elem.classList.add("red")
            }
            if(elem.dataset.col === target.dataset.col){
                elem.classList.add("red")
            }
        })
    }

    const handleMouseLeave = (e) => {
        const target = e.target
        const th = Array.from(document.querySelectorAll("th")).filter(elem => {
            if(elem.dataset.row || elem.dataset.col){
                return elem
            }
        })

        th.map(elem => {
            if(elem.dataset.row === target.dataset.row){
                elem.classList.remove("red")
            }
            if(elem.dataset.col === target.dataset.col){
                elem.classList.remove("red")
            }
        })
    }



    return <div className={`nutrition bloc bloc_${theme}`} ref={div}>
        <h2 ref={title}>Nutrition</h2>

        <table className="table-diet" ref={table}>
            <thead>
                <tr>
                <th data-col="1"></th>
                <th data-col="2">Maintient</th>
                <th data-col="3">Besoin minimum</th>
                <th data-col="4">Besoin maximum</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <th data-row={rowIndex + 2}>{row.label}</th>
                        {row.values.map((cellValue, colIndex) => (
                        <td
                            key={colIndex}
                            data-col={colIndex + 2}
                            data-row={rowIndex + 2}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {cellValue}
                        </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="about" ref={about}>
            <p><span className="red">Attention ! Ceci est à titre indicatif, vous pourriez avoir besoin de plus ou de moins en terme de calories.</span> Les protéines et lipides définies ici correspondent aux besoin recommandés dans le cadre d'un programme de musculation. <br /> {diete} </p>
        </div>
    </div>
}


/*

        <table className="table-diet" ref={table}>
            <tbody>
                <tr>
                    <th data-col="1"></th>
                    <th data-col="2">Maintient</th>
                    <th data-col="3">Besoin minimum</th>
                    <th data-col="4">Besoin maximum</th>
                    
                </tr>
                <tr>
                    <th data-row="2">Protéine</th>
                    <td data-col="2" data-row="2">{prot}</td>
                    <td data-col="3" data-row="2">{prot}</td>
                    <td data-col="4" data-row="2">{prot}</td>
                    
                </tr>
                <tr>
                    <th data-row="3">Glucides</th>
                    <td data-col="2" data-row="3">{parseInt((calories[0]-total_calorie_prot_lipide )/4)}</td>
                    <td data-col="3" data-row="3">{parseInt((calories[1]-total_calorie_prot_lipide )/4)}</td>
                    <td data-col="4" data-row="3">{parseInt((calories[2]-total_calorie_prot_lipide )/4)}</td>
                    
                </tr>
                <tr>
                    <th data-row="4">Lipides</th>
                    <td data-col="2" data-row="4">{lipide}</td>
                    <td data-col="3" data-row="4">{lipide}</td>
                    <td data-col="4" data-row="4">{lipide}</td>
                    
                </tr>
                <tr>
                    <th data-row="5">Total calorie</th>
                    <td data-col="2" data-row="5">{parseInt(calories[0])}</td>
                    <td data-col="3" data-row="5">{parseInt(calories[1])}</td>
                    <td data-col="4" data-row="5">{parseInt(calories[2])}</td>
                    
                </tr>
            </tbody>  
        </table>


*/
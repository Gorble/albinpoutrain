import { Radio } from "./form/Radio"
import { initialeEnMajuscule } from "../../../function/initialeEnMajuscule"


export function Morphologie ({infos, state, onCheck, onClickHelp, children}){
    return <div className="morphologie_bloc">
    <h4>{children}</h4><span className="what_is_it" id={infos.name} onClick={(e) => onClickHelp(e.target.id)}>?</span>
    <ul>
        <li><Radio id={infos.id[0]} name={infos.name} state={state} onCheck={onCheck}>{initialeEnMajuscule(infos.id[0])}</Radio></li>
        <li><Radio id={infos.id[1]} name={infos.name} state={state} onCheck={onCheck}>{initialeEnMajuscule(infos.id[1])}</Radio></li>
    </ul>
    
</div>
}
import { Paragraphe } from "./Paragraphe"
import program from "../bdd/program.json"

export function Explication({info}){

    const text = info.conseils


    return <div className="explication bloc">
        <h2>Conseils & explications</h2>
        <Paragraphe text={program[info.generale.training-1].program}>Votre programme</Paragraphe>
        <Paragraphe text={text.cage}>La cage thoracique</Paragraphe>
        <Paragraphe text={text.ligne}>La ligne</Paragraphe>
        <Paragraphe text={text.epaule}>Les épaules</Paragraphe>
        <Paragraphe text={text.hanche}>Les hanches</Paragraphe>
        <Paragraphe text={text.pec}>Les pectoraux</Paragraphe>
        <Paragraphe text={text.dorsaux}>Les dorsaux</Paragraphe>
        <Paragraphe text={text.trapeze}>Les trapèzes</Paragraphe>
        <Paragraphe text={text.delto}>Les deltoïdes</Paragraphe>
        <Paragraphe text={text.chaineAnterieur}>Les quadriceps</Paragraphe>
        <Paragraphe text={text.chainePosterieur}>Les ischios et quadriceps</Paragraphe>
        <Paragraphe text={text.mollets}>Les mollets</Paragraphe>
        <Paragraphe text={text.biceps}>Les biceps</Paragraphe>
        <Paragraphe text={text.triceps}>Les triceps</Paragraphe>
    </div>
}
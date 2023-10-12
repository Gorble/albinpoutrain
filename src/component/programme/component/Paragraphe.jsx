export function Paragraphe({text, children}){
    return <div className="paragraphe">
        <h3>{children}</h3>
        <p>{text}</p>
    </div>
}
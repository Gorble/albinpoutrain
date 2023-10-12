export function Field({id, reference, signe, children}){
    return <div className="field">
        <label htmlFor={id}>{children} </label>
        <input type="text" id={id} name={id}ref={reference}/>
        <span className="signe">{signe}</span>
    </div>
}
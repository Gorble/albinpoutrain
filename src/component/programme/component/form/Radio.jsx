export function Radio({id, name, state, onCheck, children}){

    return <div className="radio">
        
        <input 
            type="radio" 
            name={name} 
            id={id} 
            value={id}
            checked={state === id ? true : false}
            onChange={(e) => onCheck(e.target.id)}
        />
        
        <label htmlFor={id}>{children}</label>
    </div>
}
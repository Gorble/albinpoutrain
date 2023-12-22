export function Tab({display, className="", children}){

    
    
    return <div className={className + " tab"} style={{opacity: display ? 1 : 0}}>
        {children}
    </div>
}
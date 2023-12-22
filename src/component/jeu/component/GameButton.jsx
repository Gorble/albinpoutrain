export function GameButton({id, onDisplay,children}){
    return <button 
    className="game_button" 
    id={id ? id : "game_button"}
    onClick={() => onDisplay(state => !state)}>{children}</button>
}
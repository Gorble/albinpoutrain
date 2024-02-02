import logo from "../imgs/logo.png"
import "../style/component/logo.css"
import { Link } from 'react-router-dom';

const Logo = ({onSetRoute}) =>{

  const handleClick = (e) =>{
    onSetRoute(e.currentTarget.dataset.to)
  }

    return (<>
        <Link to="/albinpoutrain/" data-to="/albinpoutrain/" onClick={handleClick}>
          <img src={logo} alt="Logo du site" id="logo"></img>
        </Link>
      </>
    )
}
  
export default Logo
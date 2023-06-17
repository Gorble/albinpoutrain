import logo from "../imgs/logo.png"
import "../style/component/logo.css"
import { Link } from 'react-router-dom';

const Logo = () =>{
    return (<>
        <Link to="/"><img src={logo} alt="Logo du site" id="logo"></img></Link>
      </>
    )
}
  
export default Logo
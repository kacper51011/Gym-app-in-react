
import * as FiIcons from "react-icons/fi"

const NavbarButton = ({setNavVis}) => {
    
  return (
        <button className="navbar--button" onClick={setNavVis}>
            <FiIcons.FiMenu/>
        </button>    
    )
}

export default NavbarButton
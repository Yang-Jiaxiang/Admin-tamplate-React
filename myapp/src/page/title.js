import { AiOutlineMenu} from "react-icons/ai";
import { FiSearch} from "react-icons/fi";
import NtunhsLoGo from '../img/NtunhsLoGo.png'
const Title=()=>{
    return(
        <div className="main">
            <div className="topbar">
                <div className="toggle">
                    <div className="icons"><AiOutlineMenu/></div>
                </div>
                <div className="search">
                    <label>
                        <input type="text" placeholder="Seach here"/>
                        <div className="icons"><FiSearch/></div>
                    </label>
                </div>
                <div className="user">
                    <img src={NtunhsLoGo} alt="" width="50px"/>
                </div>
            </div>
        </div>
    )
}
export default Title;
import { FiFilePlus,FiCopy,FiGrid,FiImage,FiPower,FiLayers} from "react-icons/fi";
import { AiOutlineUsergroupAdd,AiFillMail} from "react-icons/ai";
const Menu=()=>{
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><FiLayers/></div></span>
                        <span className="title">北護期刊後台管理</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><FiFilePlus/></div></span>
                        <span className="title">新增期刊</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><FiCopy/></div></span>
                        <span className="title">期刊管理</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><FiGrid/></div></span>
                        <span className="title">分類管理</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><FiImage/></div></span>
                        <span className="title">輪播管理</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><AiOutlineUsergroupAdd/></div></span>
                        <span className="title">成員管理</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><AiFillMail/></div></span>
                        <span className="title">發送郵件</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><div className="icons"><FiPower/></div></span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
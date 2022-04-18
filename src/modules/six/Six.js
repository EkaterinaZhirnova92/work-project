
import { Routes, Route, useMatch, Link } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai"; 


import SixA from './SixA.js';
import SixB from './SixB.js';

function Six() {
    return (
        <div className="workspace">

            <nav>
                <div  className='subMenu'>
                <Link className = 'itemSubMenu' to="A"><AiOutlineDashboard size = '30px'/><br/>Sub A</Link>
                <Link className = 'itemSubMenu' to="B"><AiOutlineDashboard size = '30px'/><br/>Sub B</Link>
                </div>
                </nav>
            <Routes>
                <Route path="A" element={<SixA />} />
                <Route path="B" element={<SixB />} />
            </Routes>
            This is the interface of module Six.<br/>
            Three has internal routes!<br/>
        </div>
    );
}

export default Six;

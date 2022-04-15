
import { Routes, Route, useMatch, Link } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai"; 

import ThreeA from './ThreeA.js';
import ThreeB from './ThreeB.js';

function Three() {
    return (
        <div className="workspace">

            <nav>
                <div  className='subMenu'>
                <Link className = 'itemSubMenu' to="A"><AiOutlineDashboard size = '30px'/><br/>Sub A</Link>
                <Link className = 'itemSubMenu' to="B"><AiOutlineDashboard size = '30px'/><br/>Sub B</Link>
                </div>
                </nav>
            <Routes>
                <Route path="A" element={<ThreeA />} />
                <Route path="B" element={<ThreeB />} />
            </Routes>
            This is the interface of module Three.<br/>
            Three has internal routes!<br/>
        </div>
    );
}

export default Three;

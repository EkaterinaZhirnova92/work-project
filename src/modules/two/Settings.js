

import { Routes, Route, useMatch, Link } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai"; 


import General from './General.js';
import TimeDate from './TimeDate.js';
import Certificates from './Certificates.js';

function Settings() {
    return (
        <div className="workspace">

            <nav>
                <div  className='subMenu'>
                <Link className = 'itemSubMenu' to="one"><AiOutlineDashboard size = '30px'/><br/>General</Link>
                <Link className = 'itemSubMenu' to="two"><AiOutlineDashboard size = '30px'/><br/>Time & Date</Link>
                <Link className = 'itemSubMenu' to="three"><AiOutlineDashboard size = '30px'/><br/>Certificates</Link>
                </div>
                </nav>
            <Routes>
                <Route path="one" element={<General />} />
                <Route path="two" element={<TimeDate />} />
                <Route path="three" element={<Certificates />} />
            </Routes>
        </div>
    );
}

export default Settings;

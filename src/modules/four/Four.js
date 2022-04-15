import { Routes, Route, useMatch, Link } from 'react-router-dom';
import FourA from "./FourA";
import FourB from "./FourB";
import { AiOutlineDashboard } from "react-icons/ai"; 
import FourC from './FourC';
import FourD from './FourD';

function Four() {
    return (
        <div className="workspace">
<p className='block'></p>


            <div className='menuLeftThree'>
<div className = 'container'>
<Link className = 'itemSubMenu' to="A"><AiOutlineDashboard size = '30px'/><br/>Sub A</Link>
<Link className = 'itemSubMenu' to="B"><AiOutlineDashboard size = '30px'/><br/>Sub B</Link>
</div>

<div className = 'container'>
<Link className = 'itemSubMenu' to="C"><AiOutlineDashboard size = '30px'/><br/>Sub C</Link>
<Link className = 'itemSubMenu' to="D"><AiOutlineDashboard size = '30px'/><br/>Sub D</Link>
</div>

</div>
            <Routes>
                <Route path="A" element={<FourA />} />
                <Route path="B" element={<FourB />} />
                <Route path="C" element={<FourC />} />
                <Route path="D" element={<FourD />} />
            </Routes>

        </div>
    );
}

export default Four;

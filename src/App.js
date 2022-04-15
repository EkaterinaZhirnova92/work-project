import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai"; 
import { AiOutlineQuestionCircle } from "react-icons/ai";
//@@ BeginSection imports
//
// THIS PART OF FILE IS GENERATED AUTOMAGICALLY VIA makeapp.js
//


import Three from './modules/three/Three.js';
import Profile from './modules/menuTop/Profile/Profile';
import Four from './modules/four/Four';
import Five from './modules/five/Five';
import Settings from './modules/two/Settings.js';

//@@ EndSection imports

function App () {

  return (
    <div className="wrapper">
        <BrowserRouter>

<nav>
                    <div className='menuLeft'>

                    <Link className='itemMenu'   to="/profile"><AiOutlineQuestionCircle size = '30px' /><br/> Profile </Link>

                    <Link className='itemMenu'  to="/two"><AiOutlineDashboard size = '30px'/><br/>Settings</Link>


                    <Link className='itemMenu' to="/three"><AiOutlineDashboard size = '30px'/><br/>Three</Link>


                    <Link className='itemMenu' to="/four"><AiOutlineDashboard size = '30px'/><br/>Four</Link>
                   
                    <Link className='itemMenu' to="/five"><AiOutlineDashboard size = '30px'/><br/>Five</Link>
                    </div>

</nav>
            <Routes>
                //@@ BeginSection routes
                //
                // THIS PART OF FILE IS GENERATED AUTOMAGICALLY VIA makeapp.js
                //
                <Route path="/profile" element={<Profile />} />
                <Route path="/two/*" element={<Settings />} />
                <Route path="/three/*" element={<Three />} />
                <Route path="/four/*" element={<Four />} />
                <Route path="/five/*" element={<Five />} />
                //@@ EndSection routes
            </Routes>
        </BrowserRouter>
      
    </div>
   );
}


export default App;

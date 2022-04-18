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
import Six from './modules/six/Six';
import Bottom from './modules/menuBottom/Bottom';

//@@ EndSection imports

function App () {

  return (
    <div className="wrapper">
        <BrowserRouter>

<nav>
                    <div className='menuLeft'>

                    <Link className='itemMenu fixItem'   to="/profile"><AiOutlineQuestionCircle size = '30px' /><br/> Profile </Link>

                    <Link className='itemMenu itemTwo'  to="/two"><AiOutlineDashboard size = '30px'/><br/>Settings</Link>


                    <Link className='itemMenu' to="/three"><AiOutlineDashboard size = '30px'/><br/>Three</Link>


                    <Link className='itemMenu' to="/four"><AiOutlineDashboard size = '30px'/><br/>Four</Link>
                   
                    <Link className='itemMenu' to="/five"><AiOutlineDashboard size = '30px'/><br/>Five</Link>

                    <Link className='itemMenu' to="/six"><AiOutlineDashboard size = '30px'/><br/>Six</Link>
                    
                    <Link className='itemMenu fixItemBottom'   to="/bottom"><AiOutlineQuestionCircle size = '30px' /><br/> Bottom </Link>
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
                <Route path="/six/*" element={<Six />} />
                <Route path="/bottom" element={<Bottom />} />
                //@@ EndSection routes
            </Routes>
        </BrowserRouter>
      
    </div>
   );
}


export default App;

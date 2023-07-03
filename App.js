
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HappinessLevel from './HappinessLevel';
import WellbeingLevel from './WellbeingLevel';
import SpiritualityLevel from './SpiritualityLevel';
import AboutUs from './Aboutus';

function App() {

  return (
    <div className="App" >
      
        <h1 className="">KNOW YOUR MENTAL STATE</h1>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <Link to="happy" className="nav-link px-3"><h2>Happiness level</h2></Link>
            </li>
            <li className="nav-item">
              <Link to="wellbeing" className="nav-link px-3"><h2>Wellbeing Level</h2></Link>
            </li>
            <li className="nav-item">
              <Link to="SpiritualityLevel" className="nav-link px-3"><h2> Spirituality Level</h2></Link>
            </li>
            <li class="nav-item">
                  <Link to="aboutus" class="nav-link">
                    <h2>AboutUs</h2>
                  </Link>
                </li>
          </ul>
        </div>
      </nav>

      <Routes>
      <Route path="happy" element={<HappinessLevel/>}/>
      <Route path="wellbeing" element={<WellbeingLevel/>}/>
      <Route path="SpiritualityLevel" element={<SpiritualityLevel/>}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      </Routes>
      </div>
  
  
  );
  }

export default App;
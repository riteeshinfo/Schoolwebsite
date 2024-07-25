import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './compoents/Home'
import About from './compoents/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './compoents/Navbar';
import Footer from './compoents/Footer';
import Academics from './compoents/Academics';
import Admissions from './compoents/Admissons';
import Faculty from './compoents/Faculty';
import Students from './compoents/Student';
import Contactus from './compoents/Contactus';
import Gallery from './compoents/Gallery';
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
     
    </div>
      
  );
}

export default App;

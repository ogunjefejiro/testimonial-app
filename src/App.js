import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import AddTestimonial from './pages/AddTestimonial';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/addtestimonial" element ={<AddTestimonial />} />
        <Route path="/thanks" element ={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

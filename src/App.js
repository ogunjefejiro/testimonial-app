import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import AddTestimonial from './pages/AddTestimonial';
import { TestimonyProvider } from './context/TestimonyContext';
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <DataProvider>
    <TestimonyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/addtestimonial" element ={<AddTestimonial />} />
          <Route path="/thanks" element ={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </TestimonyProvider>
    </DataProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import { TestimonyProvider } from './context/TestimonyContext';
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <DataProvider>
    <TestimonyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>} />
        </Routes>
      </BrowserRouter>
    </TestimonyProvider>
    </DataProvider>
  );
}

export default App;

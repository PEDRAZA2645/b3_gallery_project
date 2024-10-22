import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Maldivas1 from './components/maldivas1';
import Maldivas2 from './components/maldivas2';
import Maldivas3 from './components/maldivas3';
import Maldivas4 from './components/maldivas4';
import Maldivas5 from './components/maldivas5';
import Maldivas6 from './components/maldivas6';
import Maldivas7 from './components/maldivas7';
import Maldivas8 from './components/maldivas8';
import Maldivas9 from './components/maldivas9';
import Maldivas10 from './components/maldivas10';
import Navigation from './components/Navigation';


function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/maldivas1' element={<Maldivas1 className='main-img-container'/>}/>
            <Route path='/maldivas2' element={<Maldivas2 className='main-img-container'/>}/>
            <Route path='/maldivas3' element={<Maldivas3 className='main-img-container'/>}/>
            <Route path='/maldivas4' element={<Maldivas4 className='main-img-container'/>}/>
            <Route path='/maldivas5' element={<Maldivas5 className='main-img-container'/>}/>
            <Route path='/maldivas6' element={<Maldivas6 className='main-img-container'/>}/>
            <Route path='/maldivas7' element={<Maldivas7 className='main-img-container'/>}/>
            <Route path='/maldivas8' element={<Maldivas8 className='main-img-container'/>}/>
            <Route path='/maldivas9' element={<Maldivas9 className='main-img-container'/>}/>
            <Route path='/maldivas10' element={<Maldivas10 className='main-img-container'/>}/>
          </Routes>
        </div>
        <div className='container'>
          <Navigation/>
        </div>
      </BrowserRouter>
      
    </>
  );
};

export default App;

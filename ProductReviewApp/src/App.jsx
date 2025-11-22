import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import ViewReview from './pages/ViewReview';
import WriteReview from './pages/WriteReview';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import dt from '../db.json';
function App() {
  useEffect(()=>{
    const response = dt;
    localStorage.setItem("data",JSON.stringify(response.reviews));
  });
  return (
    <>
        <BrowserRouter>
            <HeaderComp/> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/review/writereview' element={<WriteReview/>}/>
                <Route path='/review/viewreview' element={<ViewReview/>}/>
            </Routes>
        </BrowserRouter>     
    </>
  )
}

export default App

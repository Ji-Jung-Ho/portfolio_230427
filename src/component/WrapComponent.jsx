import React from 'react';
import MainPageComponent from './MainPageComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MobileProject01 from './mobile/mobile-projectComponent/MobileProject01';
import MobileProject02 from './mobile/mobile-projectComponent/MobileProject02';
import MobileProject03 from './mobile/mobile-projectComponent/MobileProject03';

export default function WrapComponent() {

  return (
    <div id="wrap">
      {
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {/* <Route path='/' element={<HeaderComponent/>}/> */}
            <Route path='/' element={<MainPageComponent/> }/>
            <Route path='/mobile-project01' element={<MobileProject01/> }/>
            <Route path='/mobile-project02' element={<MobileProject02/> }/>
            <Route path='/mobile-project03' element={<MobileProject03/> }/>

            {/* <Route path='/project02' element={<KurlyReactProject/> }/>
            <Route path='/project03' element={<MyPortfolioProject/> }/> */}
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
};
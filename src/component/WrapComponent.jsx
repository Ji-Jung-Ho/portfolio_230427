import React from 'react';
import MainPageComponent from './MainPageComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MobileProject01 from './mobile/mobile-projectComponent/MobileProject01';
import MobileProject02 from './mobile/mobile-projectComponent/MobileProject02';
import MobileProject03 from './mobile/mobile-projectComponent/MobileProject03';
import TabletProject01 from './tablet/tablet-projectComponent/TabletProject01Component';
import TabletProject02 from './tablet/tablet-projectComponent/TabletProject02Component';
import TabletProject03 from './tablet/tablet-projectComponent/TabletProject03Component';

export default function WrapComponent() {

  return (
    <div id="wrap">
      {
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<HeaderComponent/>}/> */}
            <Route path='/' element={<MainPageComponent/> }/>
            <Route path='/mobile-project01' element={<MobileProject01/> }/>
            <Route path='/mobile-project02' element={<MobileProject02/> }/>
            <Route path='/mobile-project03' element={<MobileProject03/> }/>

            <Route path='/table-project01' element={<TabletProject01/> }/>
            <Route path='/table-project02' element={<TabletProject02/> }/>
            <Route path='/table-project03' element={<TabletProject03/> }/>

            {/* <Route path='/project02' element={<KurlyReactProject/> }/>
            <Route path='/project03' element={<MyPortfolioProject/> }/> */}
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
};
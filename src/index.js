import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import Demo from './components/Demo';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './databinding/DataBinding';
import HandleEvent from './handleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
import TangGiamFontSize from './State/TangGiamFontSize/TangGiamFontSize';
//import css
import './index.scss'
import DemoProps from './props/DemoProps/DemoProps';
import BaiTapShop from './props/BaiTapShop/BaiTapShop';
import BaiTapXemChiTiet from './props/BaiTapXemChiTiet/BaiTapXemChiTiet';
// Cấu hình React Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import HomeTemplate from './templates/HomeTemplate';
import Page404 from './Pages/Page404/Page404';
import BaiTapGioHang from './Pages/BaiTapGioHang/BaiTapGioHang';
import ReactForm from './Pages/Form/ReactForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
// JSX
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='btgiohang' element={<BaiTapGioHang />}></Route>
          <Route path='form' element={<ReactForm/>}></Route>
          {/* <Route path='*' element={<Page404/>}></Route> */}
          <Route path='*' element={<Navigate to='home'/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>

)

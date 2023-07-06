import React from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Outlet } from 'react-router-dom';

const User_layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default User_layout
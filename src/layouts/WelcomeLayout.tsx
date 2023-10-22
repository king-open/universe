import {Outlet} from 'react-router-dom';
import React from 'react';

export const WelcomeLayout:React.FC = ()=>{
  return <div>
    <Outlet/>
  </div>
}
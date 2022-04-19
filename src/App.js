import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  console.log('APP компонента');
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            {/*-45-работа с контекстом. Пропрсы не используем
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/profile/*' element={<Profile store={props.store} />} />*/}
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

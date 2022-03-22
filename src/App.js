import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs DialogsPage={props.state.DialogsPage} />} />
            <Route path='/profile/*' element={<Profile ile ProfilePage={props.state.ProfilePage} addPost={props.addPost} PushPostText={props.PushPostText} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

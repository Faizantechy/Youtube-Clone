import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Videos from './components/Videos'
import Feed from './components/Feed'
import {Routes,Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Details from './components/Details'




const App = () => {
  return (
    <div>
      <Navbar />
      <Feed />
      <Routes>
        <Route path='/videos/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App

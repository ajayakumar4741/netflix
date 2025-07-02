import React from 'react'
import NavBar from './Components/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/Banner/RowPost'
import {action,originals,rom,comedy,horror,anim} from './Components/Banner/urls'
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost urls={originals} title='Netflix Originals'/>
      <RowPost urls={action} title='Action' isSmall/>
      <RowPost urls={horror} title='Horror' isSmall/>
      <RowPost urls={comedy} title='Comedy' isSmall/>
      <RowPost urls={rom} title='Romance' isSmall/>
      <RowPost urls={anim} title='Animation' isSmall/>
    </div>
  )
}

export default App

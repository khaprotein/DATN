import { useState } from 'react'


import { Routes,Route } from "react-router-dom"

import Home from './component/Pages/Home'
import Layout from './component/Layout'

function App() {

  return (
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        
      </Route>
    </Routes>
  )
}

export default App

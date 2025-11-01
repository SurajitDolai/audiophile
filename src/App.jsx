import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './part/Home'
import Headphone from './part/Headphone'
import Speaker from './part/Speaker'
import Earphone from './part/Earphone'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/headphones" element={<Headphone />} />
        <Route exact path="/speakers" element={<Speaker />} />
        <Route exact path="/earphones" element={<Earphone />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

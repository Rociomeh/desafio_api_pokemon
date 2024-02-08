import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/views/Home';
import Personajes from './assets/views/Personajes';
import Detalles from './assets/views/Detalles';
import { Routes, Route } from 'react-router-dom';

function App() {

  return(  
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/personajes' element={<Personajes/>} />
      <Route path='/personajes/:id' element={<Detalles/>} />
    </Routes>
  </>
  )

}

export default App;
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Character from './components/Character.jsx'
import Game from './pages/game/Game';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/opponents' element={<Character/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

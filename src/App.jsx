import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Game from './pages/game/Game.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

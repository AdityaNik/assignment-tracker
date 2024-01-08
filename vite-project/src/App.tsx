import AppBar from './Components/AppBar'
import ComputerNetwork from './Components/ComputerNetwork'
import DiscreteMath from './Components/DiscreteMath'
import LogicGate from './Components/LogicGate'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return <div>
    <Router>
      <AppBar></AppBar>
      <Routes>
        <Route path='/'></Route>
        <Route path='/bcn' element={<ComputerNetwork />}></Route>
        <Route path='/ldco' element={<LogicGate />}></Route>
        <Route path='/ds' element={<DiscreteMath />}></Route>
      </Routes>
    </Router>
  </div>
}


export default App
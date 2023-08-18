import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StrategyTraining from './pages/StrategyTraining'
import SpeedCounting from './pages/SpeedCounting'
import CountingAndStrategy from './pages/CountingAndStrategy'
import Settings from './pages/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/StrategyTraining" element={<StrategyTraining />} />
        <Route path="/SpeedCounting" element={<SpeedCounting />} />
        <Route path="/CountingAndStrategy" element={<CountingAndStrategy />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App

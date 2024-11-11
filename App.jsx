import { Route, Routes } from 'react-router-dom'
import SalaryForm from './pages/LAP/LAP2/Lap_2'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SalaryForm />} />
      </Routes>
    </div>
  )
}

export default App

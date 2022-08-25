import Header from './components/Header/Header';
import BarChart from './components/BarChart/BarChart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homescreen/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<BarChart />} />
      </Routes>
    </Router>
  );
}

export default App;

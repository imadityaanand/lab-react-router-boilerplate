import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;

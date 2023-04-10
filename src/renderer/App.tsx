import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import CurrentDeck from './components/CurrentDeck';
import NewDeck from './components/NewDeck'

function Main() {
  return (
    <div>
    <TitleBar></TitleBar>
    <CurrentDeck></CurrentDeck>
    <NewDeck></NewDeck>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <Router> {/* Add this line */}
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;

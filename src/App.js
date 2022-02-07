
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Navbar} from './Components/Navbar/Index';
import {CountriesList} from './Components/CountriesList/Index';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Navbar />

    </BrowserRouter>  
    </div>
  );
}

export default App;

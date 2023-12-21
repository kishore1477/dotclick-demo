import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
   <div className='container my-4 '>
    <Navbar/>
    <Home/>
   </div>
  );
}

export default App;

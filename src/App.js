import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes'
import Navbar from './pages/nav';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes />
    </div>
  );
}

export default App;

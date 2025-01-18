import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Goods from './pages/goods';
import Sales from './pages/sales';
import Stock from './pages/stock';
import NoPage from './pages/nopage';

const AppRoutes = () => {
    return (
        <header className="App-header">
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="home" element={<Home/>} />
              <Route path="goods" element={<Goods/>} />
              <Route path="stock" element={<Stock/>} />
              <Route path="sales" element={<Sales/>} />
              <Route path="*" element={<NoPage />} />        
        </Routes>
        </BrowserRouter>
      </header>
    )
}

export default AppRoutes;
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header';
import About from './pages/About';
import Subpages from './pages/Subpages';
import Subpage from './pages/Subpage';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Header sitename="green" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:productname' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/subpages' element={<Subpages />}>
          <Route path=':id' element={<Subpage />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;

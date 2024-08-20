import { Routes, Route } from 'react-router-dom';

//Default layout
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Paginas
import Home from './Pages/Home/Home';
import Reserve from './Pages/Reserve/Reserve';
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login';
import Menu from './Pages/Menu/Menu';
import Confirmation from './Pages/Confirmation/Confirmation';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reserve />} />
          <Route path="/online-order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
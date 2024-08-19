import { Routes, Route } from 'react-router-dom';

//Default layout
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Paginas
import Home from './Pages/Home/Home';
import Reserve from './Pages/Reserve/Reserve';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reserve />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

/*

<Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Highlights />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        */
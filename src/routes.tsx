import Menu from 'components/menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/footer';
import NotFound from 'pages/notFound';
import Prato from 'pages/prato';

export default function AppRouter(){
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />}/>
            <Route path='sobre' element={<Sobre />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
          <Route path='prato/:id' element={<Prato />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
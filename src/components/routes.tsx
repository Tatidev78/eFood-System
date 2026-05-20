import { Routes, Route } from 'react-router-dom';
import Restaurante from './Restaurante';
import Home from '../components/Home';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path ="/restaurante" element={<Restaurante/>}/>
  </Routes>
);

export default Rotas;
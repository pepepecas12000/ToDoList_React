import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar';
import { Route, Routes } from "react-router-dom";
import BloqueTareas from './Componentes/BloqueTareas';
import ContactosPage from './Componentes/ContactosPage';
import Header from './Header';
function App() {
  return (
  <div className="App">
    <Header></Header>
  <Navbar></Navbar>
  <Routes>
    <Route
      path="/"
      element={
      <>
        <BloqueTareas />
        </>
      }
    ></Route>
    <Route path="/contactos" element={<ContactosPage />}></Route>
    <Route path="*" element={<h1>404</h1>} />
  </Routes>
</div>
  );
}


export default App;

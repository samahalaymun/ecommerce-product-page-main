import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import Header from './components/Header';


function App() {
  return (
    <Router basename="/">
      <Header/>
      <Routes>
        <Route path="/" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={[<Header/>, <Home />]} />
          <Route path="/login" element={[<Header/>, <Login />]} />
          <Route path="/checkout" element={[<Header/>,<Checkout/>]} />        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderRevied from './components/OrdersReview/OrderRevied';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderRevied></OrderRevied>}></Route>

      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;

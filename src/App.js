import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderRevied from './components/OrdersReview/OrderRevied';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderRevied></OrderRevied>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>

      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;

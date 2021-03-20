import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Hello There!!</h1>


      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>



      <Footer></Footer>
    </div>
  );
}

export default App;

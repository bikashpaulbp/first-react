import logo from './logo.svg';
import './App.css';

function App() {

  

  const products = [{name: "am", price: "80"}, {name: "jam", price: "100"}, {name: "gam", price: "20"}, {name: "lam", price: "380"}, {name: "pam", price: "380"}];

  return (
    <div className="App">
      
      <Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>
      <Product name={products[2].name} price={products[2].price}></Product>
      <Product name={products[3].name} price={products[3].price}></Product>
      <Product name={products[4].name} price={products[4].price}></Product>
    </div>
  );
}

function Product(props) {

  

  const productStyle = {
    border: "2px solid grey",
    margin: "10px",
    padding: " 10px",
    boxShadow: "5px 5px 40px green",
    float: "left"
  }

  return (
    <div style={productStyle}>
      <p >Product name: {props.name}</p>
      <p>Price: {props.price}  </p>
      <button>Buy Now</button>
      
    </div>
    
  );
  
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  

  const products = [{name: "am", price: "80"}, {name: "jam", price: "100"}, {name: "gam", price: "20"}, {name: "lam", price: "380"}, {name: "pam", price: "380"}];

  return (
    <div className="App">

      {
        products.map(pd => <Product name={pd.name} price={pd.price}></Product>)
      }
      
      <Counter></Counter>
      <div>
      <User></User>
      </div>
      
      
    </div>
  );
}



function User() {

  const productStyle = {
    border: "2px solid grey",
    margin: "10px",
    padding: " 10px",
    boxShadow: "5px 5px 40px green",
    float: "left"
  }

  const [user, setUser] = useState([]);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUser(data))

}, []);

  return (
    <div style= {productStyle}>
      <ul>
        {
          user.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
  
}

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
  
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

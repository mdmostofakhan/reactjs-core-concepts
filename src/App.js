import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Tasrif Khan', job: 'singer'}
const products = {name: 'laptop', price: '43333'}

const singerStyle= {
   color: 'black',
   backgroundColor: 'yellow'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>hello Dude. React. How are you?</h3>
          <p style={singerStyle}> name: {444 + number}</p>
          <p style={{color: 'black', backgroundColor: 'red'}}>name: {singer. name} {singer. job}</p>
          <p style={singerStyle}>name: {products.name} {products. price}</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

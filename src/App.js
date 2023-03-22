import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
                {name: 'Tasrif Khan', job: 'singer'},
                {name: 'Israfil Khan', job: 'developer'},
                {name: 'Rubek Khan', job: 'business'},
                {name: 'Mostofa Khan', job: 'market'},
              
              ]

const singerStyle= {
   color: 'black',
   backgroundColor: 'yellow'
}

function App() {
  const nayoks = ['Riaz Khan', 'Bapparaz', 'Israfil', 'Mostofa', 'Oli Knan', 'Mehedi', 'yachin']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name:{nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person> )
      }
{/* 
    <Person name={nayoks[0]} nayka="purnima"></Person>
    <Person name={nayoks[1]} nayka="popi"></Person>
    <Person name={nayoks[2]} nayka="cheka"></Person> */}

    <h1>New component, function</h1>
    <p>rock mama React mama</p>
    <Friend title="Israfil Chowdhury" job="Web devoloper"></Friend>
    <Friend title="Mostofa Khan" job="Devoloper"></Friend>
    <Friend title="i am so happy"></Friend>
    </div>
  );
}


function Person(props){
  // console.log(props)
  return (
    <div className='person'>
     <h1>{props.name}</h1>
     <p>{props.nayka}</p>
  </div>
  )
}

function Friend(props){
  return (
     <div className='container'>
        <h1>{props.title}</h1>
        <p>{props.job}</p>
     </div>
  )
}

export default App;

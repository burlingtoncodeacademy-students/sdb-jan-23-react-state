import { Fragment } from 'react';
import { useState  } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {
  // let firstName = "Paul Niemczyk"
  const [ names, setNames ] = useState(["Jose", "Tyler", "Alex", "Rishi", "Ian", "Michael"])
  //    [ state var, fx to change state ] = useStateHook(initial_value)
  const [ firstName, setFirstName ] = useState("Paul Niemczyk")

  const [ count, setCount ] = useState(0)


  return (
    <>
    <h1>Challenge</h1>
    <Welcome firstName={firstName} />
    {names.map((name, key) => {
      return <Welcome key={key} firstName={name} setNames={setNames} names={names} />
    })}
    <Counter count={count} setCount={setCount} />
    
    </>
  );
}

export default App;

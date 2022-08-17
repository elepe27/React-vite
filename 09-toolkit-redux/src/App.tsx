import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store/store'
import { decrement, increment, incrementBy } from './store/slices/counter';

import logo from './logo.svg'
import './App.css'

const App = ( )=> {


  const { counter } = useSelector((state:RootState)=> state.counter);

  const dispatch = useDispatch();




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> count is { counter }</p>
        <p>
          <button type="button" onClick={ ()=> dispatch( increment() ) } >
            Increment
          </button>
          <button type="button" onClick={ ()=> dispatch( decrement() ) } >
            Decrement
          </button>
          <button type="button" onClick={ ()=> dispatch( incrementBy( 4 ) ) } >
            Increment by 4
          </button>
        </p>
       
      </header>
    </div>
  )
}

export default App

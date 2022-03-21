import './App.css';
import People from './components/People/People';
import { removeAll } from './utilities/fakedb';

function App() {
  return (
    <div className="App">
      <button onClick={removeAll}>Remove ALL</button>
      <People> </People>
    </div>
  );
}

export default App;

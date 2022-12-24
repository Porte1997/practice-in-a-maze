import './App.css';
import Maze from './components/Maze';

function App() {
  return (
    <div className="App">
      <h1>Rat in a Maze</h1>
      <Maze></Maze>
        <div id = 'count'></div>
        <div id = 'routes'></div>
    </div>
  );
}

export default App;

import './App.css';
import imagePlanner from './planner.jpg';
import imageJournal from './journal.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={ imagePlanner } width='300px' alt='planner' />
      </div>
      <div className="container">
        <h1>TO-DO LIST</h1>
      </div>
      <ToDoList />
      <div className="container">
        <img src={ imageJournal } width='300px' alt='journal' />
      </div>
    </div>
  );
}

export default App;

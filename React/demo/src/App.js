import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='First Todo'/>
      <Todo text='Second Todo'/>
    </div>
  );
}

export default App;

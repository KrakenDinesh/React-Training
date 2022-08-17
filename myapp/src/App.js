// import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Greetings from './components/Greetings';
import Incre from './components/Incre';

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
    <Greetings/>
    <Employee name="Shreeya" age="21" Sex = "F"/>
    <Employee name="Dinesh" age="21" Sex="M"/>
    <Incre/>
    </div>
  );
}

export default App;

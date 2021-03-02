import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateFoodItem from './Components/CreateFoodItem/CreateFoodItem';
import ShowListFoodItem from './Components/ShowListFoodItem/ShowListFoodItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <CreateFoodItem />
        {/* <ShowListFoodItem /> */}
      </Router>
    </div>
  );
}

export default App;

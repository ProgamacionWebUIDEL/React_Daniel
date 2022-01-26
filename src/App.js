
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Create from "./Create"
import CreateSeries from './CreateSeries';


function App() {
  return (
    <div className="main">
      <div>
        <h2>
          CRUD con ReactJS
        </h2>
      </div>
      <br></br>
      <span></span>
      <div class="container">
        <div>
          <Create />
        </div>
        <div>
          <CreateSeries />
        </div>
      </div>
    </div>
  );
}

export default App;

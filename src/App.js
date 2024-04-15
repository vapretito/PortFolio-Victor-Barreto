import './App.css';
import Nav from "../src/Nav/nav";
import Content from './Content/content';
import Home from './Home/home';

function App() {
  return (
    <div className="App">
       <div className="point" style={{ top: '80px', left: '50px' }}></div> 
      <Home />
      <Nav />
   
      <Content />
    </div>
  );
}

export default App;



import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products';
// import Enterna from './Entera/Entera';

function App() {

  return (
    <div className="App">
      {/* <Enterna/> */}
      <Navbar/>
      <Products />
    </div>
  );
}

export default App;

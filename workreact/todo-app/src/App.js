import './App.css';
import Currency from './components/currency';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Route, Routes } from 'react-router-dom'
import Navbarservice from './components/navbar';
import Footer from './components/footer';
import Default_for_todo from './components/default_for_todo';


// let routes=(
// <Routes>

// <Route path="/" exact component={Default_for_todo} />
// <Route path="/currency" exact component={Currency} />
  
//   </Routes>

//)
function App() {
  return (
      <div >
      <div><Navbarservice /></div>
      <div className="main"><Default_for_todo /></div>
      <div><Footer /></div>
      </div>
  );
}
// <Route path='/' component={Currency} />



export default App;
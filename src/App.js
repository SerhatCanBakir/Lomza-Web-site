
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LoginComp from './loginComponets/LoginComp';
import RegisterComp from './loginComponets/RegisterComp';
import ChatWindowComp from './chatComponets/ChatWindowComp'
function App() {
 
  return (
<Router>
<Routes>
<Route path='/' element={LoginComp()}></Route>
<Route path='/register' element={RegisterComp()}></Route>
<Route path='/mesaj' element={ChatWindowComp()}></Route>
</Routes>
</Router>
 );
}

export default App;

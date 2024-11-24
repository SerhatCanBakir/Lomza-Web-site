
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComp from './loginComponets/LoginComp';
import RegisterComp from './loginComponets/RegisterComp';
import ChatWindowComp from './chatComponets/ChatWindowComp';
import GroupAndFriendManager from './friendComponets/FriendAndGroupComp';

function App() {
 
  return (
<BrowserRouter>
<Routes>
  <Route path='/' Component={LoginComp}></Route>
  <Route path='/register' Component={RegisterComp}></Route>
  <Route path='/chat' Component={ChatWindowComp}></Route>
  <Route path='/addfriend' Component={GroupAndFriendManager}></Route>
</Routes>
</BrowserRouter>
 );
}

export default App;

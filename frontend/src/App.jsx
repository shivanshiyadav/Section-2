import React from 'react'
import'./App.css';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/Signup';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';

import Nav_bar from './components/Navbar';
import Eventhandling from './components/Eventhandling';
import Notfound from './components/notfound';
import StateManagement from './components/StateManagement';
import TodoApp from './components/TodoApp';
import About from './components/About';
import Insta from './components/Insta';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav_bar />

<Routes>
  <Route path= '/' element={<Home /> }/>
  <Route path= '/login' element={<Login /> }/>
  <Route path= '/signup' element={<Signup />}/>
  <Route path='/Eventhandling' element={ <Eventhandling /> } />
  <Route path='/State' element={ <StateManagement /> } />
  <Route path= '*' element={<Notfound /> }/>
  <Route path= '/Todo App' element={<TodoApp />}/>
  <Route path= '/About' element={<About />}/>
  <Route path= '/Insta' element={<Insta />}/>
  

 
  
</Routes>
   </BrowserRouter>
   
    </div>
  )
}

export default App;

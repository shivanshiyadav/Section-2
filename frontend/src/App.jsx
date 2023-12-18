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
import ListPost from './components/ListPost';
import {Toaster} from 'react-hot-toast'
import Dev_to from './components/Dev_to';
import { SnackbarProvider } from 'notistack';

// import UdateUser from './components/UpdateUser';
import ManageUser from './components/ManageUser';
import UpdateUser from './components/UpdateUser';


const App = () => {
  return (
    <div>
      <SnackbarProvider anchorOrigin={{horizontal: 'right',vertical:'top'}}maxSnack={3}> 
      <Toaster position = 'top-center'/>
      <BrowserRouter>
      <Nav_bar />
      

<Routes>
  <Route path= '/' element={<Home /> }/>
  <Route path= '/login' element={<Login /> }/>
  <Route path= '/signup' element={<Signup />}/>
  <Route path='/Eventhandling' element={ <Eventhandling /> } />
  <Route path='/State' element={ <StateManagement /> } />
 
  <Route path= '/Todo App' element={<TodoApp />}/>
  <Route path= '/About' element={<About />}/>
  <Route path= '/Insta' element={<Insta />}/>
  <Route path= '/ListPost' element={<ListPost />}/>
  <Route path= '*' element={<Notfound /> }/>
  <Route path= '/Dev_to'element={<Dev_to /> }/>
  <Route path='/manage' element={ <ManageUser /> } />
   <Route path='/updateuser/:id' element={ <UpdateUser /> } />
  

 
  
</Routes>
   </BrowserRouter>
   </SnackbarProvider>
    </div>
  )
}

export default App;

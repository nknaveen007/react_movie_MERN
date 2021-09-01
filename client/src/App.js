import React from 'react';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Movie from './Screens/Movie';
import NotFound from './Screens/NotFound';
import Login from './Screens/Login';
import Signup from './components/SignUp';
import { LoginContext } from './context/LoginContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router >
     <LoginContext>
        <Routes  >
          <Route  path='/Signin' element={ <Signup/>}/>
          <Route path='/Login' element={ <Login/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/Movie/:MovieId' element={<Movie/>} />
          <Route path='/*' element={ <NotFound/>}/>
        </Routes>
      <GlobalStyle />
      <ToastContainer />
    </LoginContext>
  </Router>
  );


export default App;

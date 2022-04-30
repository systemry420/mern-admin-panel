import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { productReducer } from './redux/reducer/product.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { usersReducer } from './redux/reducer/users.reducer';

const composeEnhancers = composeWithDevTools({

})

const root = combineReducers({
  products: productReducer,
  users: usersReducer
})

const store = createStore(
  root,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<User />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<Products />} />
            </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './contexts/AuthContext'
//import './styles/styles.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );


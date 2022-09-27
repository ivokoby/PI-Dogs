import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';         
// importo todo

ReactDOM.render(                                          
  <React.StrictMode>                                        
    <Provider store={store}>
      <BrowserRouter>   
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,                       
  document.getElementById('root'),
);
// (ReactDOM)           React trae incorporado su propio virtual DOM. 
// <React.StrictMode>   Modo estricto de react, ayuda con problemas.
// <Provider>           hace que Redux store esté disponible para cualquier componente 
// <BrowserRouter>      es para que la Url quede mas prolija: http://url.com/lala
// <App>                Mi app, en app.js renderizo los componentes

// voy instalando: npm i redux-devtools-extension 
//                 npm i
//                 npm i axios


reportWebVitals();

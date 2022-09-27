import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

//  {composeWithDevTools} son las Devtools de Redux, ayudan con algunas cosas
//  applyMiddleware sobrecarga createStore con middlewares:
//  (thunk) permite a los creadores de acciones invertír el control despachando funciones.
export default store;
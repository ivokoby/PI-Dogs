import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Menu from './components/Menu/menu'
import DogDetail from './components/DogDetail/dogDetail'
import Home from './components/Home/home'
import Create from './components/Create/Create';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Menu} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/dogs" component={Create} />
      <Route exact path="/dogs/:id" component={DogDetail} />
    </BrowserRouter>
  );
}

// En app renderizo todos mis componentes con sus exact paths (rutas exactas) 

export default App;

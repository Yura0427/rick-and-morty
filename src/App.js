import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/index";
import Characters from "./components/characters/Characters";
import CharactersInfo from "./components/characters/CharactersInfo";
import Episodes from "./components/episodes/Episodes";
import Locations from "./components/locations/Locations";
import MyWatchList from "./components/myWatchList/MyWatchList";

function App() {
  return (
<Router>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={CharactersInfo} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/myWatchList" component={MyWatchList} />
        </Switch>
      
    </Router>
  );
}

export default App;

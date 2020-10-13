import React,{FunctionComponent } from "react";
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App: FunctionComponent = () => {
    
   
    return (
     <Router>
         <div>
            {/* navigator bar of all our Application */}
            <nav>
                <div className="nav-wrapper teal">
                <Link to="/" className="brand-logo center">Pokedex</Link>
                </div>
            </nav>
            {/* Gestionary System of for all our App router */}
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route exact path="/pokemons" component={PokemonList} />
                <Route path="/pokemons/:id" component={PokemonsDetail} />
            </Switch>
        </div>
     </Router>
    )
}


export default App;








import React,{FunctionComponent } from "react";
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';



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
                <PrivateRoute exact path="/" component={PokemonList} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/pokemons" component={PokemonList} />
                <PrivateRoute exact path='/pokemon/add' component={PokemonAdd} />
                <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
     </Router>
    )
}
export default App;








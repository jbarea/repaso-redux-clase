import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './components/Home.page'
import Error_404 from './components/Error404.page'
import Tarjetas from './components/Tarjetas.component';
import UnaTarjeta from './components/UnaTarjeta.component';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';


const Header = () => (
    <header>
        <h1>Prueba</h1>
        <NavLink activeClassName='is-active' to='/' exact>Home</NavLink>
        <NavLink activeClassName='is-active' to='/about'>About</NavLink>
        <NavLink activeClassName='is-active' to='/tarjetas'>Tarjetas</NavLink>
    </header>
);

const EditPage = (props) => {
    console.log(JSON.stringify(props.match, undefined, 2));

    return (
        <div>
            Edit Page
        </div>
    );
}

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/edit/:id' component={EditPage} exact/>
                <Route path='/tarjetas' component={Tarjetas} exact/>
                <Route path='/tarjetas/:id' component={UnaTarjeta} exact/>
                <Route component={Error_404}/>
            </Switch>
        </div>
    </BrowserRouter>
)

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <AppRouter/>
    </Provider>), document.getElementById('root'));

registerServiceWorker();

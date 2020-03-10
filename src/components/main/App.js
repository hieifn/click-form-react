import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../common/Header';
import HomePage from '../home/HomePage';
import PageNotFound from './PageNotFound';

const App = () => {
    return (
        <>
            <Header></Header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
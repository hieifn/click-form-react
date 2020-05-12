import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewHomePage from '../home/NewHomePage';
import PageNotFound from './PageNotFound';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={NewHomePage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
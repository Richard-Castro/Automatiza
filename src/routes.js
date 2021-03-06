import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default function Router (){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
        </BrowserRouter>
    );
}
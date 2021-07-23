import React from 'react';
import { Switch, Route } from "react-router-dom"
import MainLayout from './../layout/MainLayout';
import Login from './Login/Login';
import Main from './Main/Main';



const App = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
            </Switch>
        </MainLayout>
    )
}

export default App;
import React from 'react';
import { Switch, Route } from "react-router-dom"
import MainLayout from './../layout/MainLayout';
import Main from './../component/Main/Main';
import Login from './../component/Login/Login';

const Booking = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
            </Switch>
        </MainLayout>
    )
}

export default Booking;
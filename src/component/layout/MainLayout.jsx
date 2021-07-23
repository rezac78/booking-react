import React, { Fragment } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Main from '../Main/Main';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './../Login/Login';
const MainLayout = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default MainLayout;
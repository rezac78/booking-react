import React, { Fragment } from 'react';
import {withRouter} from "react-router-dom"
import Header from '../common/Header';
import Footer from '../common/Footer';
import Main from '../Main/Main';
import { Switch,Route } from 'react-router-dom';
import Login from './../Login/Login';
import Register from './../Register/Register';

const MainLayout = props => {
    const {pathname} = props.location;
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" exact component={Main} />
            </Switch>
            {pathname==="/"?<Footer/>:null}
        </Fragment>
    );
}

export default withRouter(MainLayout);
import React, { Fragment } from 'react';
import Header from './../component/common/Header';
import Footer from './../component/common/Footer';
import Main from './../component/Main/Main';
const MainLayout = () => {
    return (
        <Fragment>
            <Header />
            <Main/>
            <Footer />
        </Fragment>
    );
}

export default MainLayout;
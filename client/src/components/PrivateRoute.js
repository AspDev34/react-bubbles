import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest}
        render={props => {
            if (window.localStorage.getItem('token')) {
                return <Component {...props} />
            }
            else {
                return <Redirect to='/login'/>
            }
        }}
        />
    );
};

export default PrivateRoute;
// import { render } from '@testing-library/react';
import React from 'react'
import { Redirect, Route } from 'react-router'

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
    return(
        <Route
        {...rest}
        render={(props) => 
            authenticated === true ? <Redirect to ='/'/> : <Component {...props} />
        }
        />
    );
};


export default AuthRoute;
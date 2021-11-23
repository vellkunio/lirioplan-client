// import { render } from '@testing-library/react';
import React from 'react'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

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

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

AuthRoute.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AuthRoute);
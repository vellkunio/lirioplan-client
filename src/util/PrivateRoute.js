import React from 'react'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return(
        <Route
        {...rest}
        render={(props) => 
            authenticated === false ? <Redirect to ='/login'/> : <Component {...props} />
        }
        />
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

PrivateRoute.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(PrivateRoute);
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import MyButton from '../util/MyButton';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';
// import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router'

import { logoutUser } from '../redux/actions/userActions';
import CreateProject from './CreateProject';
import CreateMaterial from './CreateMaterial';


//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// const styles = (theme) => ({
//     ...theme.palette
// });


class Navbar extends Component {

    handleLogout= () => {
        this.props.logoutUser();
    }


    render() {
        const { authenticated, location } = this.props;

        return (
        <div>
        {location.pathname !== '/' && 

            <AppBar>
                <Toolbar className="nav-container">
                    {authenticated ? (
                        <Fragment>
                            {/* {location.pathname} DELETE LATER */}
                            {/* <MyButton tip="Create a project!">
                                <CreateNewFolderIcon fontSize="large"/>
                            </MyButton> */}
                            
                            <CreateProject />
                            <Link to="/">
                            <MyButton tip="Home" >
                                <HomeIcon fontSize="large" style={location.pathname === '/' ? {color:'#e9e8ed'} : {color:'#9d98a0'}}/>
                            </MyButton>
                            </Link>
                            <Link to="/projects">
                            <MyButton tip="Projects">
                                <FolderIcon fontSize="large" style={location.pathname === '/projects' ? {color:'#e9e8ed'} : {color:'#9d98a0'}}/>
                            </MyButton>
                            </Link>
                            <Link to="/materials">
                            <MyButton tip="Materials">
                                <CategoryIcon fontSize="large" style={location.pathname === '/materials' ? {color:'#e9e8ed'} : {color:'#9d98a0'}}/>
                            </MyButton>
                            </Link>
                            <Link to="/finance">
                            <MyButton tip="Finance">
                                <PaidIcon fontSize="large" style={location.pathname === '/finance' ? {color:'#e9e8ed'} : {color:'#9d98a0'}}/>
                            </MyButton>
                            </Link>
                            <CreateMaterial />
                            <MyButton tip="Logout" onClick={this.handleLogout}>
                                <LogoutIcon style={{color: '#202111'}}/>
                            </MyButton>
                            
                        </Fragment>
                    ) : (
                        <Fragment>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Link to="/">
                            <MyButton tip="Back to main page" >
                                <HomeIcon fontSize="large" style={{color:'#e9e8ed'}}/>
                            </MyButton>
                        </Link>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                        
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        }
        </div>
        )
        
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    user: state.user
})

export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));
// export default connect(mapStateToProps)(withStyles(styles)(Navbar));

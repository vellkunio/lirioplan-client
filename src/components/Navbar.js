import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import MyButton from '../util/MyButton';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';
// import { withStyles } from '@material-ui/styles';

import { logoutUser } from '../redux/actions/userActions';


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
        const { authenticated } = this.props;
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    {authenticated ? (
                        <Fragment>
                            <MyButton tip="Create a project!">
                                <CreateNewFolderIcon/>
                            </MyButton>
                            <Link to="/">
                            <MyButton tip="Home">
                                <HomeIcon/>
                            </MyButton>
                            </Link>
                            <Link to="/projects">
                            <MyButton tip="Projects">
                                <FolderIcon/>
                            </MyButton>
                            </Link>
                            <Link to="/materials">
                            <MyButton tip="Materials">
                                <CategoryIcon/>
                            </MyButton>
                            </Link>
                            <Link to="/finance">
                            <MyButton tip="Finance">
                                <PaidIcon/>
                            </MyButton>
                            </Link>
                            <MyButton tip="Logout" onClick={this.handleLogout}>
                                <LogoutIcon/>
                            </MyButton>

                            
                        </Fragment>
                    ) : (
                        <Fragment>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                        {/* <Button color="inherit" component={Link} to="/projects">Projects</Button>
                        <Button color="inherit" component={Link} to="/materials">Materials</Button>
                        <Button color="inherit" component={Link} to="/finance">Finance</Button> */}
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
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

export default connect(mapStateToProps, { logoutUser })(Navbar);
// export default connect(mapStateToProps)(withStyles(styles)(Navbar));

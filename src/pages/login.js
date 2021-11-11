import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppIcon from '../images/avatar.png';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import theme from '../util/theme';

const styles = (theme) => ({
    ...theme.authPalette
});



class login extends Component {

    constructor(){
        super();
        this.state ={
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('/login', userData)
        .then(res => {
            console.log(res.data);
            this.setState({
                loading: false
            });
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({
                errors: err.response.data,
                loading: false
            });
        });

    };



    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {

        const { classes } = this.props;
        const { errors, loading } = this.state;

        return (
            <Grid container 
            spacing={0}
            align="center"
            justifyContent="center"
            direction="column" className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    
                    <img src={AppIcon} alt="Avatar" className={classes.image}/>
                    <Typography variant="h2" className={classes.pageTitle}>
                        Login
                    </Typography>

                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" label="Email" className={classes.TextField}
                                    value={this.state.email} onChange={this.handleChange} helperText={errors.email}
                                    error={errors.email ? true : false} fullWidth/>
                        <TextField id="password" name="password" type="password" label="Password" className={classes.TextField}
                                    value={this.state.password} onChange={this.handleChange} helperText={errors.password}
                                    error={errors.password ? true : false} fullWidth/>
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" color="primary" 
                        className={classes.button} disabled={loading}>
                            Login
                            {loading && (
                                <CircularProgress size={30} className={classes.progress} color='secondary'/>
                            )}
                        </Button>
                        <br />
                        <small>Don't have an account? <Link to="/signup">Sign up here</Link> </small>

                    </form>

                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);

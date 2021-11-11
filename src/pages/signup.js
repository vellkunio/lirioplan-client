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


const styles = (theme) => ({
    ...theme.authPalette
});


class signup extends Component {

    constructor(){
        super();
        this.state ={
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            loading: false,
            errors: {}
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }

        axios.post('/signup', newUserData)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        })


    }

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
                        Signup
                    </Typography>

                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" label="Email" className={classes.TextField}
                                    value={this.state.email} onChange={this.handleChange} helperText={errors.email}
                                    error={errors.email ? true : false} fullWidth/>
                        <TextField id="password" name="password" type="password" label="Password" className={classes.TextField}
                                    value={this.state.password} onChange={this.handleChange} helperText={errors.password}
                                    error={errors.password ? true : false} fullWidth/>
                        <TextField id="confirmPassword" name="confirmPassword" type="confirmPassword" label="Confirm Password" className={classes.TextField}
                                    value={this.state.confirmPassword} onChange={this.handleChange} helperText={errors.confirmPassword}
                                    error={errors.confirmPassword ? true : false} fullWidth/>
                        <TextField id="handle" name="handle" type="handle" label="Handle" className={classes.handle}
                                    value={this.state.handle} onChange={this.handleChange} helperText={errors.handle}
                                    error={errors.handle ? true : false} fullWidth/>
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" color="primary" 
                        className={classes.button} disabled={loading}>
                            Signup
                            {loading && (
                                <CircularProgress size={30} className={classes.progress} color='secondary'/>
                            )}
                        </Button>
                        <br />
                        <small>Already have an account? <Link to="/lodin">Login here</Link> </small>

                    </form>

                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup);

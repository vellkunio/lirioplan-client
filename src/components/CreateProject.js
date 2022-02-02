import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import axios from 'axios';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Alert from '@mui/material/Alert';

//MUI Dialog stuff
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const styles = {
    
}

export class CreateProject extends Component {

    constructor(props){
        super(props);
        this.state ={
            bossCompany: '',
            address: '',
            isFinished: false,
            isFullyPaid: false,
            isStarted: false,
            makeMoney: '',
            spendMoney: '',
            room: '',
            size: '',
            errors: {},
            dialog: false,
            loading: false
        }
    }

    dialogToOpenState = e => {
        this.setState({
            dialog: true
        })
    }
    dialogToCloseState = e => {
        this.setState({
            dialog: false
        })
    }

    handleChange = (event) => {
    
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleChangeCheck = e => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    //Code to Edit Project
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const projectData = {
            bossCompany: this.state.bossCompany,
            address: this.state.address,
            isFinished: this.state.isFinished,
            isFullyPaid: this.state.isFullyPaid,
            isStarted: this.state.isStarted,
            makeMoney: this.state.makeMoney,
            spendMoney: this.state.spendMoney,
            room: this.state.room,
            size: this.state.size
        }

        axios.post(`/addProject`, projectData)
        .then((res) => {
            this.setState({
                bossCompany: '',
                address: '',
                isFinished: false,
                isFullyPaid: false,
                isStarted: false,
                makeMoney: '',
                spendMoney: '',
                room: '',
                size: '',
                errors: {},
                dialog: false,
                loading: false
            })
            
        })
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        })
        if(this.state.errors.length<0) {
            <Alert severity="success">This is a success alert — check it out!</Alert>
        }
    }


    render() {

        const {
            user: { credentials: {userStatus}}
        } = this.props;

        return (
            <Fragment>
            <MyButton tip="Add new project" onClick={this.dialogToOpenState}>
                <AddBusinessIcon />
            </MyButton>

            <Dialog 
            open={this.state.dialog} 
            onClose={this.dialogToCloseState}
            >
            <DialogTitle>Add project</DialogTitle>

            <DialogContent>
            <form noValidate onSubmit={this.handleSubmit}>

                {/* Project for *Name of the company* */}
            <TextField
                id="bossCompanyInput"
                type="text"
                name="bossCompany"
                label="Work for" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.bossCompany}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
            />

            {/* Address: *address* */}
            <TextField
                id="address"
                type="text"
                name="address"
                label="Address" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.address}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
            />

            

            {/* Value of the project: *makeMoney* */}
            <TextField
                id="makeMoney"
                type="number"
                name="makeMoney"
                label="Income from the project" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.makeMoney}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />

            {/* Expences for the project *spendMoney* */}
            <TextField
                id="spendMoney"
                type="number"
                name="spendMoney"
                label="Cost of project" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.spendMoney}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />

            {/* Size: *size* SqFt */}
            <TextField
                id="size"
                type="number"
                name="size"
                label="Size" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.size}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">sqft</InputAdornment>,
                }}
            />

            {/* Room: *room* */}
            <TextField
                id="room"
                type="text"
                name="room"
                label="Room" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.room}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
            />
            
            {/* Checkboxes */}

            <FormGroup>
                <FormControlLabel control={
                <Checkbox
                    name="isStarted"
                    checked={this.state.isStarted}
                    onChange={this.handleChangeCheck}
                    />} label="Started" />

                <FormControlLabel control={
                <Checkbox
                    name="isFinished"
                    checked={this.state.isFinished}
                    onChange={this.handleChangeCheck}
                    />} label="Finished" />

                    <FormControlLabel control={
                <Checkbox
                    name="isFullyPaid"
                    checked={this.state.isFullyPaid}
                    onChange={this.handleChangeCheck}
                    />} label="Paid" />
            </FormGroup>

            {/* LOADING LINE */}
            {this.state.loading && (
                <LinearProgress />
            )}
            {/* IF ERRORS */}
            <Typography variant="subtitle2" component="div" align="center" style={{color: "red"}}>
                {this.state.errors.general}
            </Typography>

            <Button 
            type="submit" 
            size="small" 
            variant="outlined" 
            color="success" 
            style={{marginTop: "25px"}}
            disabled={this.state.loading || userStatus != 'admin'}
            >
            <Typography variant="subtitle2">Done</Typography>
            </Button>

            </form>
            </DialogContent>


            </Dialog>
            </Fragment>
        )
    }
}

CreateProject.propTypes ={
    // addProject: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
  });

export default connect(mapStateToProps)(withStyles(styles)(CreateProject));
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

//MUI stuff
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
// import DeleteProject from './DeleteProject';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


//MUI Dialog stuff
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';




const styles = {
    card: {
        display: 'block',
        marginBottom: 20
    }
}

class Project extends Component {
    
    //ALL STATES
    constructor(props){
        super(props);
        this.state ={
            bossCompany: props.project.bossCompany,
            address: props.project.address,
            isFinished: props.project.isFinished,
            isFullyPaid: props.project.isFullyPaid,
            isStarted: props.project.isStarted,
            makeMoney: props.project.makeMoney,
            spendMoney: props.project.spendMoney,
            room: props.project.room,
            size: props.project.size,
            errors: {},
            loadingForEdit: false,
            isEditing: false,
            projectId: props.project.projectId,
            dialog: false,
            loadingForDelete: false
        }
    }


    handleChange = (event) => {
    
            this.setState({
                [event.target.name]: event.target.value
            });

    }

    handleChangeCheck = e => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    changeEditingState = e => {
        this.setState({
            isEditing: !this.state.isEditing
        })
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

    //Code to Edit Project
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loadingForEdit: true
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

        axios.post(`/editProject/${this.state.projectId}`, projectData)
        .then((res) => {
            this.setState({
                isEditing: !this.state.isEditing,
                loadingForEdit: false
            })
        })
        .then(()=>{
            window.location.reload();
        })
        
        // .catch(err => console.log(err));
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                loadingForEdit: false
            })
        })
    }

    //Code to delete a project
    handleDeleteProject = (event) => {
        event.preventDefault();
        this.setState({
            loadingForDelete: true
        })
        axios.delete(`/project/${this.state.projectId}`)
        .then((res) => {
            this.setState({
                dialog: false,
                loadingForDelete: false
            })
        })
        .then(()=>{
            window.location.reload();
        })
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                dialog: false
            })
        })
    }


    render() {
        const {
            classes, 
            project: {
                projectId, bossCompany, address, createdAt, isFinished, isFullyPaid, isStarted,
                makeMoney, spendMoney, room, size, userHandle },
            user: {credentials: {userStatus}} 
        } = this.props;
        const { errors, loadingForEdit, loadingForDelete } = this.state;


        //Transformation boolean to String
        let isFinishedString;
        let isPaidString;
        let isStartedString;
        
        if(isFinished){
            isFinishedString = 'Finished';
        } else {
            isFinishedString = 'Not Finished';
        }

        if(isFullyPaid){
            isPaidString = 'Fully Paid';
        } else {
            isPaidString = 'Not Fully Paid';
        }

        if(isStarted){
            isStartedString = 'Started';
        } else {
            isStartedString = 'Not started';
        }

        // const deleteButton = authenticated && isAdmin === true ? (
        //     <DeleteProject projectId={projectId}/>
        // ) : null

return (
<div>
    {/* To show text fields */}
    {!this.state.isEditing && 
        <div>
            <Card className={classes.card}>
                    <CardContent>
                        {/* Project for *Name of the company* */}
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Project for {bossCompany}
                        </Typography>

                        {/* Address: *address* */}
                        <Typography variant="h5" component="div">
                            Address: {address}
                        </Typography>

                        {/* Value of the project: *makeMoney* */}
                        <Typography variant="subtitle2" component="div">
                            Value of the project: {makeMoney}$
                        </Typography>

                        {/* Expences for the project *spendMoney* */}
                        <Typography variant="subtitle2" component="div">
                            Expences of the project: {spendMoney}$
                        </Typography>

                        {/* Size: *size* SqFt */}
                        <Typography variant="subtitle1" component="div">
                            Size: {size} SqFt
                        </Typography>

                        {/* Room: *room* */}
                        <Typography variant="subtitle1" component="div">
                            Room: {room}
                        </Typography>
                        
                        {/* Started/Not Started */}
                        <Typography variant="body1" component="div">
                            {isStartedString}
                        </Typography>
                        
                        {/* Finished/Not Finished */}
                        <Typography variant="body1" component="div">
                            {isFinishedString}
                        </Typography>

                        {/* Paid/Not Paid */}
                        <Typography variant="body1" component="div">
                            {isPaidString}
                        </Typography>

                        {/* TEST */}
                        <Typography variant="body1" component="div">
                            {projectId}
                        </Typography>

                        {/* Project created *createdAt* by *userHandle* */}
                        <Typography variant="body1" component="div">
                        Project created by {userHandle} was added {createdAt.toString().substring(0,10)}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button type="button" size="small" variant="outlined" color="warning" 
                        onClick={this.changeEditingState}>
                            <Typography variant="button">Edit</Typography>
                            </Button>
                    </CardActions>
            </Card>
        </div>
    }

    {/* To show input fields */}
    {this.state.isEditing && 
    <div>
    <Card className={classes.card}>
        <form noValidate onSubmit={this.handleSubmit}>
        <CardContent>
            {/* Project for *Name of the company* */}
            <TextField id="bossCompanyInput" name="bossCompany"
                label="Work for" variant="standard" size="small" 
                onChange={this.handleChange} value={this.state.bossCompany} placeholder={bossCompany}
                style={{marginBottom: '20px'}} fullWidth 
            />

            {/* Address: *address* */}
            <TextField id="address" name="address" label="Address" variant="standard" size="small" 
                onChange={this.handleChange} value={this.state.address} placeholder={address}
                style={{marginBottom: '20px'}} fullWidth 
            />

            {/* Value of the project: *makeMoney* */}
            <TextField id="makeMoney" name="makeMoney" label="Income from the project"
                    variant="standard" type="number" size="small" 
                    onChange={this.handleChange} value={this.state.makeMoney} placeholder={makeMoney}
                    style={{marginBottom: '20px'}} fullWidth
                    InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
            />

            {/* Expences for the project *spendMoney* */}
            <TextField id="margin-normal" name="spendMoney" label="Cost of project" 
                    variant="standard" type="number" size="small" 
                    onChange={this.handleChange} value={this.state.spendMoney} placeholder={spendMoney}
                    style={{marginBottom: '20px'}} fullWidth
                    InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
            />

            {/* Size: *size* SqFt */}
            <TextField id="margin-normal" name="size" label="Size" variant="standard" 
                    type="number" size="small" 
                    onChange={this.handleChange} value={this.state.size} placeholder={size}
                    style={{marginBottom: '20px'}} fullWidth
                    InputProps={{
                    startAdornment: <InputAdornment position="start">sqft</InputAdornment>,
                    }}
            />

            {/* Room: *room* */}
            <TextField id="room" name="room" label="Room" variant="standard" size="small" 
                    onChange={this.handleChange} value={this.state.room} placeholder={room}
                    style={{marginBottom: '20px'}} fullWidth
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

            {/* TEST */}
            <Typography variant="body1" component="div">
                {projectId}
            </Typography>

            {/* Project created *createdAt* by *userHandle* */}
            <Typography variant="body1" component="div">
            Project created by {userHandle} was added {createdAt.toString().substring(0,10)}
            </Typography>
            {/* IF ERRORS */}
            <Typography variant="subtitle2" component="div" align="center" style={{color: "red"}}>
                {errors.general}
            </Typography>
            {loadingForEdit && (
                <LinearProgress />
            )}
        </CardContent>
        <CardActions>
            <Button type="submit" size="small" variant="outlined" color="success" disabled={loadingForEdit}>
            <Typography variant="subtitle2">Done</Typography>
            </Button>
            <Button type="button" size="small" variant="outlined" color="warning" disabled={loadingForEdit}
                    onClick={this.changeEditingState}>
                    <Typography variant="subtitle2">Cancel</Typography>
            </Button>
            
            {/* {deleteButton} */}
                <MyButton tip="Delete project" onClick={this.dialogToOpenState}>
                    <DeleteOutlineIcon />
                </MyButton>
                <Dialog
                    open={this.state.dialog}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={this.dialogToCloseState}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{`Delete project for ${address} of ${room}?`}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            This will permanently delete this project and everything connected to this
                            {loadingForDelete && (
                                <LinearProgress />
                            )}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button  variant="outlined" disabled={userStatus !== 'admin'} style={{color: 'red'}}
                            onClick={this.handleDeleteProject}
                            // startIcon={<DeleteOutlineIcon />}
                            >
                                <Typography>
                                    Delete
                                </Typography>
                            </Button>
                        <Button variant="outlined" style={{color: 'black'}}
                            onClick={this.dialogToCloseState} 
                        //  endIcon={<HighlightOffIcon />}
                            >
                            <Typography>Cancel</Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
        </CardActions>
        </form>
    </Card>
    </div>
    }

</div>
); //end return
} //end render
} //end class


Project.propTypes = {
    user: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
  });


export default connect(mapStateToProps)(withStyles(styles)(Project));
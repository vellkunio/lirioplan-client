import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import axios from 'axios';

//MUI stuff
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



const styles = {
    card: {
        display: 'block',
        marginBottom: 20
    }
}

class Project extends Component {

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
            isEditing: false,
            projectId: props.project.projectId
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

    handleSubmit = (event) => {
        event.preventDefault();
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
                isEditing: !this.state.isEditing
            })
        })
        .catch(err => console.log(err));
    }




    render() {
        // const classes = this.props.classes; // same as const { Classes } = this.props;
        const {classes, project: { projectId, bossCompany, address, createdAt, isFinished, isFullyPaid, isStarted, makeMoney, spendMoney, room, size, userHandle } } = this.props;
        

        //TODO


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

        //ADD PLACEHOLDERS FOR ALL INPUTS

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
                                    <Button type="button" size="small" onClick={this.changeEditingState}>Edit</Button>
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
                                    <TextField id="bossCompanyInput" name="bossCompany" label="Work for" variant="standard" size="small" 
                                        onChange={this.handleChange} value={this.state.bossCompany} fullWidth 
                                    />

                                    {/* Address: *address* */}
                                    <TextField id="address" name="address" label="Address" variant="standard" size="small" 
                                        onChange={this.handleChange} value={this.state.address} fullWidth 
                                    />

                                    {/* Value of the project: *makeMoney* */}
                                    <TextField id="makeMoney" name="makeMoney" label="Income from the project" variant="standard" type="number" size="small" 
                                         onChange={this.handleChange} value={this.state.makeMoney} fullWidth
                                    />

                                    {/* Expences for the project *spendMoney* */}
                                    <TextField id="margin-normal" name="spendMoney" label="Cost of project" variant="standard" type="number" size="small" 
                                         onChange={this.handleChange} value={this.state.spendMoney} fullWidth
                                    />

                                    {/* Size: *size* SqFt */}
                                    <TextField id="margin-normal" name="size" label="Size" variant="standard" type="number" size="small" 
                                         onChange={this.handleChange} value={this.state.size} fullWidth
                                         InputProps={{
                                            startAdornment: <InputAdornment position="start">sqft</InputAdornment>,
                                          }}
                                    />

                                    {/* Room: *room* */}
                                    <TextField id="room" name="room" label="Room" variant="standard" size="small" 
                                         onChange={this.handleChange} value={this.state.room} fullWidth
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

                                </CardContent>
                                <CardActions>
                                    <Button type="submit" size="small">Done</Button>
                                    <Button type="button" size="small" onClick={this.changeEditingState}>Cancel</Button>
                                </CardActions>
                            </form>
                        </Card>
                    </div>
                }

            </div>
        );
    }
}

// export default Project
export default withStyles(styles)(Project);
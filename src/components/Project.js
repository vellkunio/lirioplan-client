import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';


//MUI stuff
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const styles = {
    card: {
        display: 'block',
        marginBottom: 20
    }
}

class Project extends Component {
    render() {
        // const classes = this.props.classes; // same as const { Classes } = this.props;
        const {classes, project: { bossCompany, address, createdAt, isFinished, isFullyPaid, isStarted, makeMoney, spendMoney, room, size, userHandle } } = this.props;
        
        //TODO
            //ADD projectId


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

        return (
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
                        Value of the project: {makeMoney}
                    </Typography>

                    {/* Expences for the project *spendMoney* */}
                    <Typography variant="subtitle2" component="div">
                        Expences of the project: {spendMoney}
                    </Typography>

                    {/* Size: *size* SqFt */}
                    <Typography variant="subtitle1" component="div">
                        Size {size} SqFt
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

                    {/* Project created *createdAt* by *userHandle* */}
                    <Typography variant="body1" component="div">
                    Project created by {userHandle} was added {createdAt.toString().substring(0,10)}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                </CardActions>
            </Card>
        );
    }
}

// export default Project
export default withStyles(styles)(Project);
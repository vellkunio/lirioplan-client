import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import axios from 'axios';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import AddIcon from '@mui/icons-material/Add';

//MUI Dialog stuff
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const styles = {
    
}

export class CreateMaterial extends Component {

    constructor(props){
        super(props);
        this.state ={
            materialType: '',
            materialExactName: '',
            uniqueCode: '',
            manufacturer: '',
            quantityInBox: '',
            length: '',
            width: '',
            height: '',
            price: '',
            quantity: '',
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
        const materialData = {
            materialType: this.state.materialType,
            materialExactName: this.state.materialExactName,
            uniqueCode: this.state.uniqueCode,
            manufacturer: this.state.manufacturer,
            quantityInBox: this.state.quantityInBox,
            length: this.state.length,
            width: this.state.width,
            height: this.state.height,
            price: this.state.price,
            quantity: this.state.quantity
        }

        axios.post(`/addMaterial`, materialData)
        .then((res) => {
            this.setState({
                materialType: '',
                materialExactName: '',
                uniqueCode: '',
                manufacturer: '',
                quantityInBox: '',
                length: '',
                width: '',
                height: '',
                price: '',
                quantity: '',
                errors: {},
                dialog: false,
                loading: false
            })
        })
        // .then(()=>{
        //     //ADD CONDITION THAT IF IT'S ON PROJECTS PAGE --- RELOAD PAGE
        //     // window.location.reload();
        // })
        
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        })
    }


    render() {

        const {
            user: { credentials: {isAdmin}}
        } = this.props;

        return (
            <Fragment>
            <MyButton tip="Add new material" onClick={this.dialogToOpenState}>
                <AddIcon />
            </MyButton>

            <Dialog 
            open={this.state.dialog} 
            onClose={this.dialogToCloseState}
            >
            <DialogTitle>Add material</DialogTitle>

            <DialogContent>
            <form noValidate onSubmit={this.handleSubmit}>

            {/* Material Type */}
            <TextField
                id="materialType"
                type="text"
                name="materialType"
                label="Type of material (Tile/PlasticClips/Stone/Dry_stuff)" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.materialType}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
            />

            {/* Material Exact Name */}
            <TextField
                id="materialExactName"
                type="text"
                name="materialExactName"
                label="Exact name of material" 
                variant="standard"
                size="small" 
                onChange={this.handleChange} 
                value={this.state.materialExactName}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
            />

            

            {/* Unique code */}
            <TextField
                id="uniqueCode"
                type="text"
                name="uniqueCode"
                label="Unique code" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.uniqueCode}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                />

            {/* Manufacturer */}
            <TextField
                id="manufacturer"
                type="text"
                name="manufacturer"
                label="Manufacturer" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.manufacturer}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                />

            {/* Quantity in box */}
            <TextField
                id="quantityInBox"
                type="number"
                name="quantityInBox"
                label="Quantity in one box (number of tiles, kg of glu, amount of clips..)" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.quantityInBox}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                />

            {/* Length*/}
            <TextField
                id="length"
                type="number"
                name="length"
                label="Length" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.length}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">Inch</InputAdornment>,
                }}
            />

            {/* Width */}
            <TextField
                id="width"
                type="number"
                name="width"
                label="Width" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.width}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">Inch</InputAdornment>,
                }}
            />

            {/* Height */}
            <TextField
                id="height"
                type="number"
                name="height"
                label="Height" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.height}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">Cm</InputAdornment>,
                }}
            />
            
            {/* Price */}
            <TextField
                id="price"
                type="number"
                name="price"
                label="Price per box" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.price}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />

            {/* Quantity */}
            <TextField
                id="quantity"
                type="number"
                name="quantity"
                label="Quantity in stock" 
                variant="standard" 
                size="small" 
                onChange={this.handleChange} 
                value={this.state.quantity}
                style={{marginBottom: '20px'}} 
                fullWidth 
                multiline
                InputProps={{
                startAdornment: <InputAdornment position="start">Qty</InputAdornment>,
                }}
            />

            

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
            disabled={this.state.loading || !isAdmin}
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

CreateMaterial.propTypes ={
    // addProject: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
  });

export default connect(mapStateToProps)(withStyles(styles)(CreateMaterial));
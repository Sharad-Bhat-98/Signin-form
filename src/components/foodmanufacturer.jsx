import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const FoodManufacturer = (props) => {
    const { name, handleChangeFood, handleimageupload, nextStep } = props
    const classes = useStyles();
    const { ProductName, ProductDescription } = props.Error

    const handledisabled = () => {
        if (ProductName === null && ProductDescription === null) {
            return false
        } else {
            return true
        }
    }

    return (<Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justify="center">
        <h2 Style='color:blue'>Food Manufacturer</h2>

        <Grid item xs={12}>
            <h4 style={{ textAlign: 'centre', color: 'blue' }}>{name}, tell us about your product</h4><br></br>

            <TextField style={{ minWidth: 325, maxWidth: 325 }}
                label='What is your Product'
                placeholder='Ex Vrigin Cocunut Oil'
                variant="outlined"
                name='ProductName'
                onChange={handleChangeFood}
                error={ProductName ? true : false}
                helperText={ProductName}
            />
        </Grid>

        <Grid item xs={12}>
            <TextField style={{ minWidth: 325, maxWidth: 325 }}
                id="outlined-multiline-static"
                label="Product Description"
                name='ProductDescription'
                multiline
                rows={4}
                onChange={handleChangeFood}
                error={ProductDescription ? true : false}
                helperText={ProductDescription}
                variant="outlined"
                placeholder='Type Something'
            />
        </Grid>
        <Grid item xs={12}>

            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                name='ProductImage'
                onChange={handleimageupload}
            />
            <label htmlFor="contained-button-file">
                <Button variant="outlined"
                    color="primary"
                    component="span"
                    style={{ minWidth: 325, maxWidth: 325 }}
                    endIcon={<PhotoCamera />}>
                    Upload Product Image
        </Button>
            </label>
        </Grid>

        <Grid item xs={12}>
            <TextField style={{ minWidth: 325, maxWidth: 325 }}
                label='Paste Video Link'
                variant="outlined"
                name='VideoLink'
                onChange={handleChangeFood}
            />

        </Grid>

        <Grid item xs={12}>

            <TextField style={{ minWidth: 325, maxWidth: 325 }}
                label='Video Link Description'
                variant="outlined"
                name="VideoLinkDescription"
                onChange={handleChangeFood}
            />

        </Grid>

        <Grid item xs={12}>
            <Button variant="contained" color="primary" disableElevation size='large' disabled={handledisabled()} onClick={() => nextStep()}> next</Button>

        </Grid>





    </Grid>);
}

export default FoodManufacturer;
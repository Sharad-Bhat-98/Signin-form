import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';


const SignupForm = (props) => {
    console.log(props)

    const { handleChange, nextStep, handlesubmit, handleSelected, selected } = props
    const { name, email, number, password } = props.values


    return (
        <React.Fragment>
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"  >
                <h2 Style='color:blue'>Sign-Up / Personal Info</h2>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='Name'
                        name='name'
                        placeholder='Enter Your Name'
                        onChange={handleChange}
                        value={name}
                        variant="outlined"
                        error={props.Error.name ? true : false}
                        helperText={props.Error.name}
                        type='text'
                        required="true"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='Email'
                        name='email'
                        placeholder='Enter Email'
                        onChange={handleChange}
                        defaultValue={email}
                        variant="outlined"
                        type='email'
                        error={props.Error.email ? true : false}
                        helperText={props.Error.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='phone number'
                        name='number'
                        placeholder='Enter Phone Number'
                        onChange={handleChange}
                        defaultValue={number}
                        variant="outlined"
                        type='number'
                        error={props.Error.number ? true : false}
                        helperText={props.Error.number}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        placeholder='enter password'
                        label=' password'
                        name='password'
                        onChange={handleChange}
                        defaultValue={password}
                        variant="outlined"
                        type='password'
                        error={props.Error.password ? true : false}
                        helperText={props.Error.password}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selected}
                                onChange={(e) => handleSelected(e)}
                                color='primary' />
                        }
                        label="I have Aggred To The Trems Of Services"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" disableElevation onClick={() => nextStep()} disabled={handlesubmit()} size='large' type='submit'> next</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default SignupForm;




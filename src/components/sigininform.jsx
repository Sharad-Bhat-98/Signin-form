import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from '@material-ui/core/FormHelperText'
import Joi from 'joi-browser'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    },
    textField: {
        width: "25ch"
    }
}));

const schema = {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string().required().min(8),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
}

const SigninFrom = () => {


    const classes = useStyles();
    const [values, setValues] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: "",
        confirmpassword: '',
        showPassword: false,
        showConfirmPassword: false,
    });
    const [Error, setError] = React.useState({
        Error: false,
        value: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleChange = (prop) => (event) => {


        setValues({ ...values, [prop]: event.target.value });
        const obj = { [prop]: event.target.value }
        const schema1 = { [prop]: schema[prop] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        setError({ ...Error, [prop]: res, })

    };
    const handleChangeConfirmPassword = (prop) => (event) => {
        const val = event.target.value
        setValues({ ...values, [prop]: event.target.value })
        changeError(val)
    };

    const changeError = (val) => {
        if (values.password !== val) {
            setError({ ...Error, Error: true, value: 'password dosent match' })
        } else {
            setError({ ...Error, Error: false, value: null })

        }
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleDisabled = () => {
        console.log(Error)
        if (Error.firstname === null && Error.lastname === null && Error.password === null && Error.email === null && Error.value === null) {
            return false
        } else {
            return true
        }
    }


    return (<React.Fragment>
        <Grid container
            spacing={5}
            direction="column"
            justify='center'
            alignItems='center'
        >
            <h2 Style='color:blue'>Create Your Account</h2>


            <Grid item xs={12}>
                <TextField style={{ minWidth: 325, maxWidth: 325 }}
                    label='First Name'
                    name='FirstName'
                    placeholder='Enter Your First Name'
                    variant='outlined'
                    onChange={handleChange('firstname')}
                    error={Error.firstname ? true : false}
                    helperText={Error.firstname}
                    required

                />
            </Grid>
            <Grid item xs={12}>
                <TextField style={{ minWidth: 325, maxWidth: 325 }}
                    label='Last Name'
                    name='lastname'
                    placeholder='Enter Your Last Name'
                    variant='outlined'
                    onChange={handleChange('lastname')}
                    error={Error.lastname ? true : false}
                    required
                    helperText={Error.lastname}

                />

            </Grid>
            <Grid item xs={12}>
                <TextField style={{ minWidth: 325, maxWidth: 325 }}
                    label='Email'
                    name='email'
                    placeholder='Enter Email'
                    variant="outlined"
                    type='email'
                    onChange={handleChange('email')}
                    error={Error.email ? true : false}
                    required
                    helperText={Error.email}

                />

            </Grid>
            <Grid item xs={12}>
                <FormControl style={{ minWidth: 325, maxWidth: 325 }}
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    error={Error.password ? true : false}
                    required

                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    <FormHelperText id="outlined-adornment-password">
                        {Error.password}
                    </FormHelperText>
                </FormControl>

            </Grid>
            <Grid item xs={12}>
                <FormControl style={{ minWidth: 325, maxWidth: 325 }}
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    error={Error.Error ? true : false}
                    required
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        Confirm Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showConfirmPassword ? "text" : "password"}
                        value={values.confirmpassword}
                        onChange={handleChangeConfirmPassword("confirmpassword")}

                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"

                                >
                                    {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>

                            </InputAdornment>

                        }

                        labelWidth={70}
                    />
                    <FormHelperText id="outlined-adornment-password">
                        {Error.value}
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Link to='/signup'>  <Button variant="contained" color="primary" disableElevation size='large' type='submit' disabled={handleDisabled()}> Submit</Button> </Link>

            </Grid>
        </Grid>

    </React.Fragment >);
}

export default SigninFrom;
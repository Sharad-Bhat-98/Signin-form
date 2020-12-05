import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import CompanyInfo from './companyinfoform';
import DisplayData from './dispdata';
import Joi from 'joi-browser'

const SignupForm = () => {
    const [selected, setSelected] = React.useState(false);

    const [sign, Setsignin] = useState({
        step: 1,
        name: '',
        email: '',
        number: '',
        password: '',
    })
    const [companyinfo, SetCompanyInfo] = useState({
        companyname: '',
        companylocation: '',
        companyoccupation: ''
    })

    const [Error, SetError] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        companyname: '',
        companylocation: '',
        companyoccuption: '',
    })

    const { step, name, email, number, password } = sign
    const { companyname, companylocation, companyoccuption } = companyinfo
    const info = { companyname, companylocation, companyoccuption }
    const values = { name, email, number, password }

    const schema = {
        name: Joi.string().required().min(6),
        password: Joi.string().required().min(8),
        email: Joi.string().required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        number: Joi.string().required().max(10).min(10),
        companyname: Joi.string().required().min(3),
        companyoccuption: Joi.string().required(),
        companylocation: Joi.string().required().min(3),
    }

    const nextStep = () => {
        const { step } = sign;
        Setsignin({ ...sign, step: step + 1 })
    }

    const handleChange = (e) => {
        Setsignin({ ...sign, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res, })
    }

    const handleChangeCompany = (e) => {
        SetCompanyInfo({ ...companyinfo, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res, })

    }

    const handlesubmit = () => {
        if (selected === true && Error.name == null && Error.password == null && Error.email == null && Error.number == null) {
            return false
        } else {
            return true
        }
    }

    if (step === 1) {
        return (<React.Fragment>
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"  >
                <h2 Style='color:blue'>Sign-Up / PersonalInfo</h2>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325 }}
                        label='Name'
                        name='name'
                        placeholder='Enter Your Name'
                        onChange={handleChange}
                        value={name}
                        variant="outlined"
                        error={Error.name ? true : false}
                        helperText={Error.name}
                        type='text'
                        required="true"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325 }}
                        label='Email'
                        name='email'
                        placeholder='Enter Email'
                        onChange={handleChange}
                        defaultValue={email}
                        variant="outlined"
                        type='email'
                        error={Error.email ? true : false}
                        helperText={Error.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325 }}
                        label='phone number'
                        name='number'
                        placeholder='Enter Phone Number'
                        onChange={handleChange}
                        defaultValue={number}
                        variant="outlined"
                        type='number'
                        error={Error.number ? true : false}
                        helperText={Error.number}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325 }}
                        placeholder='enter password'
                        label=' password'
                        name='password'
                        onChange={handleChange}
                        defaultValue={password}
                        variant="outlined"
                        type='password'
                        error={Error.password ? true : false}
                        helperText={Error.password}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selected}
                                onChange={(e) => setSelected(e.target.checked)}
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
    } else if (step === 2) {
        return (
            <CompanyInfo
                values={info}
                handleChangeCompany={handleChangeCompany}
                header={name}
                nextStep={nextStep}
                error={Error} />
        )
    } else if (step === 3) {
        return (<DisplayData
            values={info}
            data={values}
        />)
    }
}
export default SignupForm;




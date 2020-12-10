import React, { useState } from 'react';
import CompanyInfo from './components/companyinfoform';
import FoodManufacturer from './components/foodmanufacturer';
import Joi from 'joi-browser'
import SignupForm from './components/signupform'




const App = () => {
    //react states
    const [selected, setSelected] = React.useState();

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

    const [foodmanufacturer, SetFoodManufacturer] = useState({
        ProductName: '',
        ProductDescription: '',
        ProductImage: '',
        VideoLink: '',
        VideoLinkDescription: ''
    })

    const [Error, SetError] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        companyname: '',
        companylocation: '',
        companyoccuption: '',
        ProductName: '',
        ProductDescription: '',
        ProductImage: ''

    })
    //destructing the values in the states
    const { step, name, email, number, password } = sign
    const { companyname, companylocation, companyoccuption } = companyinfo
    const info = { companyname, companylocation, companyoccuption }
    const values = { name, email, number, password }
    const { ProductName, ProductDescription } = Error

    //validation of fields using JOI
    const schema = {
        name: Joi.string().required().min(6),
        password: Joi.string().required().min(8),
        email: Joi.string().required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        number: Joi.string().required().max(10).min(10),
        companyname: Joi.string().required().min(3),
        companyoccuption: Joi.string().required(),
        companylocation: Joi.string().required().min(3),
        ProductName: Joi.string().required().min(3),
        ProductDescription: Joi.string().required().min(10),
        ProductImage: Joi.required(),
        VideoLink: Joi.string(),
        VideoLinkDescription: Joi.string()
    }

    const nextStep = () => {
        const { step } = sign;
        Setsignin({ ...sign, step: step + 1 })
    }

    //sign up form functions
    const handleSelected = (e) => {
        setSelected(e.target.checked)
    }

    const handleChange = (e) => {
        Setsignin({ ...sign, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res, })
    }
    const handlesubmit = () => {

        if (selected === true && Error.name == null && Error.password == null && Error.number == null) {
            return false
        } else {
            return true
        }
    }

    //company info form functions
    const handleChangeCompany = (e) => {
        SetCompanyInfo({ ...companyinfo, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res })

    }
    const handledisabled = () => {
        if (Error.companyname === null && Error.companylocation === null && Error.companyoccuption === null) {
            return false
        } else {
            return true
        }

    }

    //food manufacturer form functions
    const handleChangeFood = (e) => {
        SetFoodManufacturer({ ...foodmanufacturer, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res })

    }

    const handleimageupload = (e) => {
        const img = e.target.files[0]
        SetFoodManufacturer({ ...foodmanufacturer, ProductImage: img })
    }

    const handledisabledfood = () => {
        if (ProductName === null && ProductDescription === null) {
            return false
        } else {
            return true
        }
    }

    //conditional Rendering
    if (step === 1) {
        return (
            <SignupForm
                handleChange={handleChange}
                nextStep={nextStep}
                handlesubmit={handlesubmit}
                values={values}
                selected={selected}
                handleSelected={handleSelected}
                Error={Error}

            />)

    } else if (step === 2) {
        return (
            <CompanyInfo
                values={info}
                handleChangeCompany={handleChangeCompany}
                header={name}
                nextStep={nextStep}
                error={Error}
                handledisabled={handledisabled}
            />
        )
    } else if (step === 3 && companyoccuption === 'Food Manufacturer') {
        return (<FoodManufacturer
            name={name}
            handleChangeFood={handleChangeFood}
            Error={Error}
            handleimageupload={handleimageupload}
            nextStep={nextStep}
            handledisabledfood={handledisabledfood}


        />)
    } else {
        return (<h2>nextpage</h2>)
    }
}

export default App;
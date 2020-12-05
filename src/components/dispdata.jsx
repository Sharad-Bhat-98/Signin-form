import React from 'react';

const DisplayData = (props) => {
    const { name, email, number, password } = props.data
    const { companyname, companylocation, companyoccuption } = props.values

    return (<div style={{ textAlign: 'center' }}>
        <h4>User Name= <span> {name}</span></h4>
        <h4> Email= <span>{email}</span></h4>
        <h4>Phone Number=<span>{number}</span></h4>
        <h4>Password=<span>{password}</span></h4>
        <h4>Company Name=<span>{companyname}</span></h4>
        <h4>Company Location=<span>{companylocation}</span></h4>
        <h4>Company Type= <span>{companyoccuption}</span></h4>

    </div>);
}

export default DisplayData;
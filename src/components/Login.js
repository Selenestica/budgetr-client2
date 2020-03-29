import React, {useState} from 'react'
import {connect} from 'react-redux'
import { setAuthenticationHeader } from '../utils/authentication'

const Login = (props) => {

    const [loginInfo, setLoginInfo] = useState([])

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    //BANK ACCOUNT FUNCTIONS (FROM LECTURE)
    const onHandleGetBankAccounts = () => {
        const token = localStorage.getItem('jsonwebtoken')
        fetch('', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    // LOGIN FUNCTION
    const onHandleLogin = () => {
        fetch('http://localhost:3301/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        }).then(response => response.json())
        .then(json => {
            const token = json.token
            localStorage.setItem('jsonwebtoken', token)
            setAuthenticationHeader(token)
            props.onLoginSuccess(token)
        })
    }

    return (<>
    
        <div className="login-container row">
          <div className="col">
            <h4>Login</h4>
            <input type="email" name="email" onChange={handleChange} placeholder="email" />
            <input type="password" name="password" onChange={handleChange} placeholder="password" />
            <button onClick={onHandleLogin}>Login</button>
            <button onClick={onHandleGetBankAccounts}>Get Bank Info</button>
          </div>
        </div>

    </>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (token) => dispatch({type: 'ON_LOGIN_SUCCESS', token: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)
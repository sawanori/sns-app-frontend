import React from 'react'
import "./Login.css"
const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Real SNS</h3>
                    <span className="loginDesc">
                        professionak SNS
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <p className="loginMsg">Login Here</p>
                        <input type="text" className='loginInput' placeholder='Email' />
                        <input type="text" className='loginInput' placeholder='Password' />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">forget password</span>
                        <button className="loginRegisterButton">create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
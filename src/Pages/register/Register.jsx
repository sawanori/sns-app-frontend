import React from 'react'
import "./Register.css"
const Register = () => {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Real SNS</h3>
                    <span className="registerDesc">
                        professionak SNS
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <p className="registerMsg">register Here</p>
                        <input type="text" className='registerInput' placeholder='UserName' />
                        <input type="text" className='registerInput' placeholder='Email' />
                        <input type="text" className='registerInput' placeholder='Password' />
                        <input type="text" className='registerInput' placeholder='Password' />
                        <button className="registerButton">Sign UP</button>
                        <button className="registerRegisterButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
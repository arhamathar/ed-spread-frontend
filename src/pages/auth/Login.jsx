import React from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = async () => {
        try {
            const response = await axios.post("https://localhost3000/login", {
                email: email,
                password: password,
            });
            if (response.status === 200) {
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-center h-100'>
                <div className='card logheight'>
                    <div className='card-header'>
                        <h3>Sign In</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='input-group form-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text'>
                                        <i className='fas fa-envelope'></i>
                                    </span>
                                </div>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='input-group form-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text'>
                                        <i className='fas fa-key'></i>
                                    </span>
                                </div>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    value='Login'
                                    className='btn float-right login_btn'
                                    onClick={() => onSubmit()}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='card-footer'>
                        <div className='d-flex justify-content-center links'>
                            Don't have an account?<a href='/signup'>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

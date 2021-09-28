import React from "react";
import "./Login.css";
import axios from "axios";

const Signup = () => {
    const [disabled, setDisabled] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [fullname, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const onSubmit = async () => {
        try {
            const response = await axios.post("https://localhost3000/signup", {
                email: email,
                fullname: fullname,
                phone: phone,
                password: password,
            });
            if (response.status === 200) {
            }
        } catch (e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        if (password === confirmPassword) setDisabled(false);
        else setDisabled(true);
    }, [password, confirmPassword]);

    return (
        <div className='container'>
            <div className='d-flex justify-content-center h-100'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Sign Up</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='input-group form-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text'>
                                        <i className='fas fa-user'></i>
                                    </span>
                                </div>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Full name'
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                />
                            </div>

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
                                        <i className='fas fa-phone-square'></i>
                                    </span>
                                </div>
                                <input
                                    type='tel'
                                    className='form-control'
                                    placeholder='Phone no.'
                                    onChange={(e) => setPhone(e.target.value)}
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
                            <div className='input-group form-group'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text'>
                                        <i className='fas fa-key'></i>
                                    </span>
                                </div>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Confirm password'
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    value='Signup'
                                    className='btn float-right login_btn'
                                    disabled={disabled}
                                    onClick={() => onSubmit()}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='card-footer'>
                        <div className='d-flex justify-content-center links'>
                            Don't have an account?<a href='./login'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

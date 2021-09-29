import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, Card } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const Signup = () => {
    const [signupUser, setSignupUser] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
    });

    const history = useHistory();

    const onChangeHandler = (e) => {
        setSignupUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async () => {
        try {
            const response = await axios.post("/api/user/signup", signupUser);
            toast.success("Signup Succesful");
            history.push("/");
        } catch (e) {
            toast.error("Something went Wrong!");
        }
    };

    return (
        <div className='w-100 vh-100 bg-info py-5' style={{ height: "130vh" }}>
            <Card
                style={{}}
                className=' login-card w-50 p-4 mx-auto mt-5 shadow'
            >
                <p className='h3 text-info center'>SIGN UP </p>
                <AvForm>
                    <AvField
                        name='name'
                        label='Full Name'
                        type='text'
                        required
                        placeholder='John Smith'
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <AvField
                        name='email'
                        label='Email'
                        type='email'
                        required
                        placeholder='john@gmail.com'
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <AvField
                        name='phone'
                        label='Phone No.'
                        type='phone'
                        placeholder='9999999999'
                        pattern='^[0-9]*$'
                        onChange={(e) => onChangeHandler(e)}
                        validate={{
                            required: {
                                value: true,
                                errorMessage: "Please enter your phone number",
                            },
                            minLength: {
                                value: 10,
                                errorMessage:
                                    "Your phone number must be 10 digits long",
                            },
                            maxLength: {
                                value: 10,
                                errorMessage:
                                    "Your phone number must be 10 digits long",
                            },
                        }}
                    />
                    <AvField
                        name='password'
                        label='Password'
                        type='password'
                        onChange={(e) => onChangeHandler(e)}
                        validate={{
                            required: {
                                value: true,
                                errorMessage: "Please enter your password",
                            },
                            minLength: {
                                value: 6,
                                errorMessage:
                                    "Your password must be atleast 6 charachters long",
                            },
                        }}
                    />
                    <Button color='info' onClick={onSubmitHandler}>
                        SIGN UP
                    </Button>
                </AvForm>
                <div className='d-flex justify-content-between my-2'>
                    <a href='/'>Forgot Password ?</a>
                    <Link
                        style={{ textDecoration: "none" }}
                        className=''
                        to='/login'
                    >
                        LOG IN
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Signup;

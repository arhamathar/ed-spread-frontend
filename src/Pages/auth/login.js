import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import useHttp from '../../hooks/useHttp';
import { AuthContext } from '../../context/authContext';

const Login = () => {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttp();

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setLoginUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async () => {
        try {
            const { user } = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/user/login`,
                'POST',
                loginUser,
                '/',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token,
                }
            );

            auth.login(
                user.id,
                user.token,
                user.role,
                user.mobile,
                user.name,
                user.email
            );
        } catch (e) {}
    };

    return (
        <div className="w-100 vh-100 bg-light py-5 routes-height">
            <Card className="login-card w-50 p-4 mx-auto mt-5 shadow">
                <p className="h3 text-dark center">LOG INTO YOUR ACCOUNT</p>
                <AvForm>
                    <AvField
                        name="email"
                        label="Email"
                        type="email"
                        required
                        placeholder="john@gmail.com"
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <AvField
                        name="password"
                        label="Password"
                        type="password"
                        onChange={(e) => onChangeHandler(e)}
                        validate={{
                            required: {
                                value: true,
                                errorMessage: 'Please enter your password',
                            },
                            minLength: {
                                value: 6,
                                errorMessage:
                                    'Your password must be atleast 6 charachters long',
                            },
                        }}
                    />
                    <Button color="dark" onClick={onSubmitHandler}>
                        LOG IN
                    </Button>
                </AvForm>
                <div className="d-flex justify-content-between my-2">
                    <a href="/">Forgot Password ?</a>
                    <Link
                        style={{ textDecoration: 'none' }}
                        className=""
                        to="/signup"
                    >
                        SIGN UP
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;

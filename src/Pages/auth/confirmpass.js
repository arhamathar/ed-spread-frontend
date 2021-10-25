import React, { useState } from 'react';
import { Button, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import useHttp from '../../hooks/useHttp';
import { useParams } from 'react-router-dom';

const ConfirmPass = () => {
    const { sendRequest } = useHttp();
    const { token } = useParams();
    console.log(token);

    const [password, setPassword] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const onChangeHandler = (e) => {
        setPassword((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async () => {
        if (password.newpassword === password.confirmpassword) {
            console.log('ssssssssssssssssssyo');
            try {
                const { user } = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL_PROD}/api/user/resetPassword/${token}`,
                    'POST',
                    password
                );
                // console.log(user.role);
                // auth.login(user.id, user.token, user.role);
            } catch (e) {}
        }
    };

    return (
        <div className="w-100 vh-100 bg-light py-5 routes-height">
            <Card className="login-card w-50 p-4 mx-auto mt-5 shadow">
                <p className="h3 text-dark center">Set New Password</p>
                <AvForm>
                    <AvField
                        name="newpassword"
                        label="New Password"
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

                    <AvField
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        onChange={(e) => onChangeHandler(e)}
                        validate={{
                            match: { value: 'newpassword' },
                            required: {
                                value: true,
                                errorMessage: 'Please confirm your password',
                            },
                            minLength: {
                                value: 6,
                                errorMessage:
                                    'Your password must be atleast 6 charachters long',
                            },
                        }}
                    />
                    <Button color="dark" onClick={onSubmitHandler}>
                        Save
                    </Button>
                </AvForm>
            </Card>
        </div>
    );
};

export default ConfirmPass;

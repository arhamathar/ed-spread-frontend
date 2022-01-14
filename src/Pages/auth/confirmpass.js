import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const ConfirmPass = () => {
    const history = useHistory();

    const { token } = useParams();

    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const onSubmitHandler = async () => {
        if (password === confirmPassword) {
            try {
                const { data } = await axios.patch(
                    `${process.env.REACT_APP_BACKEND_URL_PROD}/api/user/resetPassword/${token}`,
                    { resetPassword: password }
                );
                toast.success(data.message);
                history.push('/login');
            } catch (e) {
                toast.error(e.response.data.message);
            }
        } else {
            toast.warn('Password does not match');
        }
    };

    const onEnterKeyPressed = (e) => {
        if(e.key === 'Enter') {
            onSubmitHandler()
        }
    };

    return (
        <div className='w-100 vh-100 bg-light py-5 routes-height'>
            <Card className='login-card w-50 p-4 mx-auto mt-5 shadow'>
                <p className='h3 text-dark center'>Set New Password</p>
                <AvForm>
                    <AvField
                        name='newpassword'
                        label='New Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
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
                        name='confirmpassword'
                        label='Confirm Password'
                        type='password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        validate={{
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
                    <Button color='dark' onClick={onSubmitHandler} onKeyPress={onEnterKeyPressed}>
                        Save
                    </Button>
                </AvForm>
            </Card>
        </div>
    );
};

export default ConfirmPass;

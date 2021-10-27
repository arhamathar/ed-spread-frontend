import React, { useState } from 'react';
import { Button, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import useHttp from '../../hooks/useHttp';

const EmailVarification = () => {
    const { sendRequest } = useHttp();

    const [email, setEmail] = useState(null);

    const onChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = async () => {
        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/user/forgotPassword`,
                'POST',
                { email },
                '/login'
            );
        } catch (e) {}
    };

    return (
        <div className="w-100 vh-100 bg-light py-5 routes-height">
            <Card className="login-card w-50 p-4 mx-auto mt-5 shadow">
                <p className="h3 text-dark center">Verify Email</p>
                <AvForm>
                    <AvField
                        name="email"
                        label="Email"
                        type="email"
                        required
                        placeholder="john@gmail.com"
                        onChange={(e) => onChangeHandler(e)}
                        value={email}
                    />
                    <Button color="dark" onClick={onSubmitHandler}>
                        Send Token
                    </Button>
                </AvForm>
            </Card>
        </div>
    );
};

export default EmailVarification;

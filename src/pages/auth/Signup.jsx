import React from "react";
import { Card, CardBody, Button, Input, Label } from "reactstrap";
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
        <div>
            <h1 className='text-center mt-5'>Signup</h1>
            <Card className='w-25 p-3 mx-auto margin-top: 100 mb-5'>
                <CardBody>
                    <Label>Full Name</Label>
                    <Input
                        type='full name'
                        placeholder='Enter full name'
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <Label className='mt-3'>Email</Label>
                    <Input
                        type='email'
                        placeholder='Enter full name'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label className='mt-3'>Phone no.</Label>
                    <Input
                        type='tel'
                        placeholder='Enter phone no.'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p>we will never share your phone number with anyone</p>

                    <Label className='mt-3'>Password</Label>
                    <Input
                        type='password'
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Label className='mt-3'>Confirm Password</Label>
                    <Input
                        type='password'
                        placeholder='Enter password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        className='mt-3'
                        disabled={disabled}
                        color={`${disabled ? "secondary" : "primary"}`}
                        type='submit'
                        onClick={() => onSubmit()}
                    >
                        Submit
                    </Button>

                    <div>
                        <p>
                            Already a member? <a href='/login'>Login</a>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Signup;

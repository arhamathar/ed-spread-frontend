import React from "react";
import axios from "axios";
import { Card, CardBody, Label, Button, Input } from "reactstrap";

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
        <div>
            <h1 className='text-center mt-5'>Login</h1>
            <Card className='w-25 p-3 mx-auto margin-top: 100'>
                <CardBody>
                    <Label>Email</Label>
                    <Input
                        type='email'
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label className='mt-3'>Password</Label>
                    <Input
                        type='email'
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        color='primary'
                        className='mt-3 mb-1'
                        type='submit'
                        onClick={() => onSubmit()}
                    >
                        Submit
                    </Button>

                    <div>
                        <p>
                            No account?{" "}
                            <a
                                // className='text-green-400 cursor-pointer'
                                href='/signup'
                            >
                                Signup
                            </a>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;

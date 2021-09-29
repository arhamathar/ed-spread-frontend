import React from "react";
import { Button,Card,Row,Col } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const Login =()=>{
    return(
    <div className='w-100 bg-info py-5'>
    <Card className='w-50 sm:w-100 p-4 mx-auto mt-5 shadow'>
        <p className='h3 text-info center'>LOG INTO YOUR ACCOUNT</p>
        <AvForm>
            <AvField 
                name='email' 
                label='Email' 
                type='email' 
                required 
                errorMessage='Email is required' 
                placeholder='john@gmail.com'
            />
            <AvField 
                name='password' 
                label='Password' 
                type='password' 
                validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your password"
                    },
                    minLength: {
                      value: 6,
                      errorMessage: "Your password must be atleast 6 charachters long"
                    },
                }}
            />
            <Button color='info'>
                LOG IN
            </Button>
        </AvForm>    
        
    </Card>
    </div>)
}

export default Login
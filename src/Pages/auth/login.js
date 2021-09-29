import React,{useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
import { Button,Card } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const Login =()=>{
    const [loginUser, setLoginUser] = useState({
        email: '',
        password:''
    })

    const history = useHistory()

    const onChangeHandler=(e)=>{
        setLoginUser(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler=async()=>{
        try{
            const response = await axios.post('/api/user/login',loginUser)
            toast.success('Login Succesful')
            history.push('/')
        }catch(e){
            toast.error('Something went Wrong!')
        }
    }

    return(
    <div className='w-100 vh-100 bg-info py-5' style={{height: '100vh'}}>
        <Card style={{}} className=' login-card w-50 p-4 mx-auto mt-5 shadow'>
            <p className='h3 text-info center'>LOG INTO YOUR ACCOUNT</p>
            <AvForm>
                <AvField 
                    name='email' 
                    label='Email' 
                    type='email' 
                    required 
                    placeholder='john@gmail.com'
                    onChange={(e)=>onChangeHandler(e)}
                />
                <AvField 
                    name='password' 
                    label='Password' 
                    type='password' 
                    onChange={(e)=>onChangeHandler(e)}
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
                <Button color='info' onClick={onSubmitHandler}>
                    LOG IN
                </Button>
            </AvForm>    
            <div className='d-flex justify-content-between my-2'>
                <a href='/'>Forgot Password ?</a>
                <Link style={{textDecoration: 'none'}} className='' to='/signup'>SIGN UP</Link>
            </div>
        </Card>
    </div>)
}

export default Login
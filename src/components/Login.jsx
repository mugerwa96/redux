import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const data = {
        name: "mugerwa",
        age: 10,
        emailAddress: "mugerwa@gmail.com"
    }
    const Login = (data) => {
        dispatch(login(data))
    }
    return (
        <div>
            <button className='bg-green-400 text-white rounded text-sm py-1  px-6 ' onClick={() => Login(data)}>Login</button>
        </div>
    )
}

export default Login

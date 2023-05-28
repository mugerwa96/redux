import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/slices/userSlice'
import { changeTheme } from '../Redux/slices/themeSlice'

const Profile = () => {
    const { age, emailAddress, name } = useSelector(state => state.user.detials)
    const theme=useSelector(state=>state.theme);
   
    const [color,setColor]=useState("")
const dispatch =useDispatch();
    return (
        <div style={{color:`${theme.color}`}}>
        
            <h1 className='text-2xl font-bold text-center text-slate-700'>Profile information</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Email Address:{emailAddress}</p>
            <button className='bg-red-400 text-white rounded text-sm py-1  px-6 ' onClick={() =>dispatch(logout())}>LogOut</button>
            <p>CHange Color</p>
            <input type="text" className='border-2 border-slate-600 p-2 focus:outline-none  rounded' onChange={(e)=>setColor(e.target.value)} />
            <button className='bg-red-400 text-white rounded text-sm py-1  px-6 ' onClick={()=>dispatch(changeTheme(color))} >Change Color</button>
        </div>
    )
}

export default Profile

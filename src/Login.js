import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            alert(error.message);
        } else {
            navigate('/');
        }
    };

    const register = async () => {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            alert(error.message);
        } else {
            alert('Check your email to confirm your account!');
        }
    };

    return (
        <div className='bg-white h-100vh flex flex-col items-center mt-28'>
            <Link to='/'>
                <img
                    className='mt-2 mb-2 object-contain w-[100px] mr-auto ml-auto w-32'
                    src='https://imgs.search.brave.com/U3towAL9QSY6qen6MQtS3qWI1s22hAmCCJj_l6LaeH4/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9ncG5n/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/QW1hem9uLUxvZ28t/UE5HLnBuZw'                />
            </Link>
            <div className='w-[300px] h-fit flex flex-col rounded-xs border-1 border-gray-100 p-[20px]'>
                <h1 className='text-5xl mb-10'>Sign-In</h1>
                <form onSubmit={signIn}>
                    <h5 className='mb-1'>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} className='rounded-sm border-2 border-gray-600 w-full h-10 pl-2'/>
                    <h5 className='mb-1 mt-2'>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='rounded-sm border-2 border-gray-600 w-full h-10 pl-2'/>
                    <button type='submit' className='rounder-xs bg-orange-400 hover:bg-orange-300 w-full h-8 border-1 mt-6 border-[#a88734]'>Sign In</button>
                </form>
                <p className='mt-3 font-xs text-gray-500'>
                    By signing-in, you agree to the JULI'S FAKE AMAZON Conditions of Use & Sale.
                </p>
                <button onClick={register} className='hover:underline rounded-sm text-orange-400 hover:text-orange-300 w-full h-8 mt-2'>
                    Create an Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
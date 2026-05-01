import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./supabase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        setError('');
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
        } else {
            navigate('/');
        }
    };

    return (
        <div className='bg-white h-100vh flex flex-col items-center mt-28'>
            
            <div className='w-[300px] h-fit flex flex-col border border-gray-300 rounded p-[20px]'>
                <Link to='/'>
                <img
                    className='mt-4 mb-4 object-contain w-[100px]'
                    src='https://imgs.search.brave.com/U3towAL9QSY6qen6MQtS3qWI1s22hAmCCJj_l6LaeH4/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9ncG5n/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/QW1hem9uLUxvZ28t/UE5HLnBuZw'                />
                </Link>
                <h1 className='text-4xl font-bold mb-4'>Sign-In</h1>
                {error && (
                    <div className='flex items-center gap-2 bg-red-100 border border-red-400 text-red-700 text-sm rounded px-3 py-2 mb-3'>
                        <span>⚠️</span>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={signIn} className='flex flex-col gap-2'>
                    <h5 className='font-semibold'>E-mail</h5>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='border border-gray-400 rounded px-2 py-1 w-full'
                        required
                    />
                    <h5 className='font-semibold'>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='border border-gray-400 rounded px-2 py-1 w-full'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-[#f0c14b] border border-[#a88734] rounded w-full py-1 mt-2 font-semibold'
                    >
                        Sign In
                    </button>
                </form>

                <p className='mt-4 text-xs text-gray-600'>
                    By signing-in, you agree to JULI'S FAKE AMAZON Conditions of Use & Sale.
                </p>
                <p className='mt-4 text-sm'>
                    New to Juli's Fake Amazon?{' '}
                    <Link to='/signup' className='text-blue-600 hover:underline'>Create an account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
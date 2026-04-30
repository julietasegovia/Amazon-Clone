import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { supabase } from "./supabase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const singIn = async (e) => {
        e.preventDefault();
        const {error} = await supabase.auth.signInWithPassword({ email, password });
        if(error) {
            alert(error.message);
        } else {
            history.push('/');
        }
    };

    const register = async () => {
        const {error} = await supabase.auth.signUp({email, password});
        if(error){
            alert(error.message);
        } else {
            alert('Check your email to confirm your account!');
        }
}

  return (
    <div>
      
    </div>
  )
}

export default Login

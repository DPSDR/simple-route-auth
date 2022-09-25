import React from 'react';
import useFirebase from '../../hooks/useFirebase.';

const Login = () => {
    const { sighInWithGoogle } = useFirebase()

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={sighInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
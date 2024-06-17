import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    uid: user.uid,
                });
                console.log('User signed up:', user);
            })
            .catch((error) => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <form onSubmit={handleSignUp}>
            <input
                className='bg-primary'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            <br />
            <p>If you're alredy have an account?<Link to="/signin"><u>Sign In</u></Link></p>
        </form>
    );
};

export default SignUp;

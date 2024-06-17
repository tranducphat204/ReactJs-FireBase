import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from '../../../firebaseConfig';
import { NavLink, useHistory } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const SignIn: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed in:', user);
                alert("Successfull login!");
                history.push('/profile');
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    };
    
    const handleGoogleSignInWithGG = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                });
                console.log('User signed in:', user);
                history.push('/home');
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSignIn}>
                <input
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
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <NavLink to="/signup"><u>Sign Up</u></NavLink>
            </p>
            <button onClick={handleGoogleSignInWithGG}>
                Sign in with Google
            </button>
        </div>
    );
};

export default SignIn;
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [userData, setUserData] = useState<any>(null);
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                console.log("dâđâ",userDoc)
                setUserData(userDoc.data());
            } else {
                setUser(null);
                history.push('/signin');
            }
        });

        return () => unsubscribe();
    }, [history]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            history.push('/signin');
        });
    };

    if (!user || !userData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Welcome, {userData.displayName || userData.email}</h1>
            <p>Email: {userData.email}</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Profile;

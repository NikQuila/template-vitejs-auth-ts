import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase-config';
import { useUserStore } from './store/useUserStore';
import './App.css';
import AppRoutes from './routes/router';
import { createUserDoc, getUserById } from './firebase/user';

function App() {
  const { setUser, setIsLogIn, setIsChecked } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        setIsLogIn(true);
        await createUserDoc(userAuth);
        const result = await getUserById(userAuth.uid);
        setUser(result.user);
      } else {
        setIsLogIn(false);
        setUser(null);
      }
      setIsChecked(true);
    });

    return unsubscribe;
  }, []);
  return <AppRoutes />;
}

export default App;

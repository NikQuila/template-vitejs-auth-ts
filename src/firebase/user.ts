import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';

export const createUserDoc = async (
  user: User
): Promise<{ success: boolean; code: string; message: string }> => {
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        email: user.email,
        id: user.uid,
      });
      return {
        success: true,
        code: 'auth/success',
        message: 'Login successful',
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        code: 'auth/error',
        message: 'Error creating user',
      };
    }
  }
  return {
    success: false,
    code: 'auth/failure',
    message: 'User already exists',
  };
};

export const getUserById = async (
  uid: string
): Promise<{ success: boolean; code: string; message: string; user: any }> => {
  try {
    const userDocRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) {
      return {
        success: true,
        code: 'auth/success',
        message: 'User found',
        user: userSnapshot.data(),
      };
    } else {
      console.log('No such user!');
      return {
        success: false,
        code: 'auth/failure',
        message: 'No such user',
        user: null,
      };
    }
  } catch (error) {
    console.log('Error getting user:', error);
    return {
      success: false,
      code: 'auth/error',
      message: 'Error getting user',
      user: null,
    };
  }
};

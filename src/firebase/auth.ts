import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  UserCredential,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase-config';
import { FirebaseError } from 'firebase/app';

export const createUserAuth = async (
  email: string,
  password: string
): Promise<UserCredential | undefined> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true, code: 'auth/success', message: 'Login successful' };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      success: false,
      code: firebaseError.code,
      message: firebaseError.message,
    };
  }
};

export const logoutUser = async () => {
  try {
    await auth.signOut();
    return {
      success: true,
      code: 'auth/success',
      message: 'Logout successful',
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      success: false,
      code: firebaseError.code,
      message: firebaseError.message,
    };
  }
};

export const sendPasswordReset = async (
  email: string
): Promise<{ success: boolean; code: string; message: string }> => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      code: 'auth/success',
      message: 'Password reset link sent!',
    };
  } catch (err: any) {
    console.error(err);
    return {
      success: false,
      code: err.code,
      message: err.message,
    };
  }
};

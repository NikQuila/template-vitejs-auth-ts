import { create } from 'zustand';
import { UserFS } from '../utils/types';

type State = {
  user: UserFS | null;
  isLogIn: boolean;
  isChecked: boolean;
  setUser: (user: UserFS | null) => void;
  setIsLogIn: (isLogIn: boolean) => void;
  setIsChecked: (isChecked: boolean) => void;
};

export const useUserStore = create<State>((set) => ({
  user: null,
  isLogIn: false,
  isChecked: false,
  setUser: (user) => set(() => ({ user })),
  setIsLogIn: (isLogIn) => set(() => ({ isLogIn })),
  setIsChecked: (isChecked) => set(() => ({ isChecked })),
}));

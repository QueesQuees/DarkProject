import {createSlice} from '@reduxjs/toolkit';
import {User} from '../models/user';

interface UserState {
  user: User;
  accessToken: string;
  loginMessage: string;
}

const initialState: UserState = {
  user: {} as User,
  accessToken: '',
  loginMessage: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setAccessToken, setUser} = loginSlice.actions;
export default loginSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string,
  age: number,
  firstName: string,
  lastName: string,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
    firstName: '',
    lastName: '',
  } as User,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    resetUser: (state) => {
      state.name = '';
      state.age = 0;
      state.firstName = '';
      state.lastName = '';
    }
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

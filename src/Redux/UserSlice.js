import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser, checkUser } from './API/UserAPI';

const initialState = {
  users: [],
  status: 'idle',
  LoggedInUser: false,
  error: null
};

export const createUsersAsync = createAsyncThunk(
    'users/createUsers',
    async (values) => {
      const response = await createUser(values);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
  export const checkUserAsync = createAsyncThunk(
    'users/checkUser',
    async (loginInfo) => {
      const response = await checkUser(loginInfo);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );


export const userslice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserfromLocalstorage: (state,action) => {
      state.users = action.payload.user;
      state.LoggedInUser = true;
    },
    setUsersEmpty: (state) => {
      state.users = [];
      state.LoggedInUser = false;
    },
    setErrorNull: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUsersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
        state.LoggedInUser = true;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
        state.LoggedInUser = true;
        localStorage.setItem('user',JSON.stringify({user:state.users,LoggedInUser:state.LoggedInUser}))
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        console.log(action.error)
        state.error = action.error;
      })
      ;
  },
});

export const { setUserfromLocalstorage, setUsersEmpty, setErrorNull } = userslice.actions;

export const selectAllUsers = (state) => state.user.users;
export const selectLoggedInUser = (state) => state.user.LoggedInUser;
export const selectError = (state) => state.user.error;


export default userslice.reducer;
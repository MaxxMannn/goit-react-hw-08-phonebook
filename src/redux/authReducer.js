import {createSlice} from '@reduxjs/toolkit'
import { refreshUser,logIn, logOut,register } from './fetchAuth'

const initialState ={
    user: { name: null, email: null, password: null },
    error: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isFetching: false,
}

// -------------------------------------- REGISTER

const register_fulfilled = (state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}

// -------------------------------------- LOG-IN

const logIn_fulfilled = (state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}

// -------------------------------------- LOG-OUT

const logOut_fulfilled = (state, { payload }) =>{
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
}

// -------------------------------------- REFRESH

const  refresh_pending = (state, { payload }) =>{
    state.isRefreshing = true;
}

const  refresh_fulfilled = (state, { payload }) =>{
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const  refresh_rejected = (state, { payload }) =>{
    state.isRefreshing = false;
}

export const authSlice = createSlice({
    name:'auth',
    initialState,

    extraReducers: (builder)=>{
        builder
        .addCase(register.pending)
        .addCase(register.fulfilled, register_fulfilled)
        .addCase(register.rejected)
        .addCase(logIn.pending)
        .addCase(logIn.fulfilled, logIn_fulfilled)
        .addCase(logIn.rejected)
        .addCase(logOut.pending)
        .addCase(logOut.fulfilled, logOut_fulfilled)
        .addCase(logOut.rejected)
        .addCase(refreshUser.pending, refresh_pending)
        .addCase(refreshUser.fulfilled, refresh_fulfilled)
        .addCase(refreshUser.rejected, refresh_rejected)
  }
})

export const authReducer = authSlice.reducer;


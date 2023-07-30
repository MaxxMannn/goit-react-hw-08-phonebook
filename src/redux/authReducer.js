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

const register_pending = (state, { payload }) =>{

}

const register_fulfilled = (state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}

const register_rejected = (state, { payload }) =>{

}

// -------------------------------------- LOG-IN

const logIn_pending = (state, { payload }) =>{

}

const logIn_fulfilled = (state, { payload }) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
}

const logIn_rejected = (state, { payload }) =>{

}

// -------------------------------------- LOG-OUT

const logOut_pending = (state, { payload }) =>{

}

const logOut_fulfilled = (state, { payload }) =>{
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
}

const logOut_rejected = (state, { payload }) =>{

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
        .addCase(register.pending, register_pending)
        .addCase(register.fulfilled, register_fulfilled)
        .addCase(register.rejected, register_rejected)
        .addCase(logIn.pending, logIn_pending)
        .addCase(logIn.fulfilled, logIn_fulfilled)
        .addCase(logIn.rejected, logIn_rejected)
        .addCase(logOut.pending, logOut_pending)
        .addCase(logOut.fulfilled, logOut_fulfilled)
        .addCase(logOut.rejected, logOut_rejected)
        .addCase(refreshUser.pending, refresh_pending)
        .addCase(refreshUser.fulfilled, refresh_fulfilled)
        .addCase(refreshUser.rejected, refresh_rejected)
  }
})

export const authReducer = authSlice.reducer;


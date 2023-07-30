import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit' 
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

const wrongRegister = () => {
  return toast.error(`There is already an account with the same nickname or email.`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

const wrongLogin = () => {
  return toast.error(`Incorrect data, or such user does not exist.`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

const wrongLogout= () => {
  return toast.error(`Incorrect data, or such user does not exist.`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

const wrongRefresh= () => {
  return toast.error(`Reboot error.`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  console.log(credentials)
    try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;
      } catch (error) {
        wrongRegister()
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try{
        const response = await axios.post('/users/login', credentials);

        setAuthHeader(response.data.token);
        return response.data;
      } catch (error){
        wrongLogin()
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  )

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      
      clearAuthHeader();
    } catch (error) {
      wrongLogout()
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        wrongRefresh()
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
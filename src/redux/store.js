import { contactsReducer } from './contactsReducer'
import { filterListReducer } from './filterListReducer'
import { authReducer } from './authReducer'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({ 
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterListReducer,
      },
    },
)

export const persistor = persistStore(store);

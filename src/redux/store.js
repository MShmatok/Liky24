import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { dataReducer } from './data/slice';
import { rootReducer } from './root/slice';

const PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteList', 'preOrder'],
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    data: persistReducer(PersistConfig, dataReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  evTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

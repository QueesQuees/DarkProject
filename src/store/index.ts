import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import {setupListeners} from '@reduxjs/toolkit/query';

// import {myProfileApi} from 'app/services/myProfile.service';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

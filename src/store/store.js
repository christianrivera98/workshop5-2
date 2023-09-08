import { configureStore } from '@reduxjs/toolkit'

import { findySlice } from './findy/findySlice.js';
import { authSlice } from './auth/authslice';



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    findy: findySlice.reducer,
  },
})


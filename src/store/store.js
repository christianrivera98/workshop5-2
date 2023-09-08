import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authslice'
import { findySlice } from './findy/findySlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    findy: findySlice.reducer,
  },
})



import {configureStore} from '@reduxjs/toolkit'
import workReducer from './WorkItemSlice'



export const store = configureStore({
	reducer:{
		works:workReducer
	}
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type WorkItemType = {
	id: string,
	description: string,
	amount: number,
	measurement: string,
	time: Date | null,
	percent:number
}
export type InitialState = {
	list: WorkItemType[]
}
const workSlice = createSlice({
	name: 'works',
	initialState: {
		list: [
			{id:'sdsds',description:'Земляные работы', measurement:'квМ', time: new Date(), amount:100, percent:20}
		]
	},
	reducers: {
		addWork(state: InitialState, action: PayloadAction<WorkItemType>) {
			state.list.push({
				description: action.payload.description,
				measurement: action.payload.measurement,
				amount: action.payload.amount,
				time: action.payload.time,
				id: action.payload.id,
				percent:action.payload.percent
			})
		},
		removeWork(state: InitialState, action: PayloadAction<string>) {
			state.list.filter(el => el.id !== action.payload)
		},
		updateWork(state: InitialState, action: PayloadAction< WorkItemType>){
			const item = state.list.find(el=>el.id === action.payload.id )
			if(item){
				item.description = action.payload.description
				item.measurement = action.payload.measurement
				item.amount = action.payload.amount
				item.time = action.payload.time
				item.percent=action.payload.percent
			}
		}
	}

})

export const {addWork, removeWork, updateWork} = workSlice.actions
export default workSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type WorkItemType = {
    id: string,
    description: string,
    amount: number,
    measurement: string,
    time: Date | null,
    percent: number,
    price: number,
    sumWork?:number
    [key: string]: string | number | Date | null | undefined;
}
export type UnitUpdateType={
    value:string | number | Date | null
    type:keyof WorkItemType,
    id:string
}
export type InitialState = {
    list: WorkItemType[]
}
const workSlice = createSlice({
    name: 'works',
    initialState: {
        list: [
            { id: 'sdsds', description: 'Земляные работы', measurement: 'квМ', time: new Date(), amount: 100, percent: 20, price: 100, sumWork:1000 }
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
                percent: action.payload.percent,
                price: action.payload.price,
                sumWork: (action.payload.amount*action.payload.price) + ((action.payload.amount*action.payload.price)*action.payload.percent/100)
            })
        },
        removeWork(state: InitialState, action: PayloadAction<string>) {
            state.list.filter(el => el.id !== action.payload)
        },
        updateWork(state: InitialState, action: PayloadAction<UnitUpdateType>) {
            const item = state.list.find(el => el.id === action.payload.id)
            if(item){
               item[action.payload.type] = action.payload.value
               if (action.payload.type === 'amount' || action.payload.type === 'percent' || action.payload.type === 'price') {
                   item.sumWork = (item.amount * item.price) + ((item.amount * item.price) * item.percent / 100);
               }
            }
        }
    }

})

export const { addWork, removeWork, updateWork } = workSlice.actions
export default workSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name:'filter',
    initialState: '',
    reducers:{
        filterContacts(state, {payload}){
            return state = payload.filterValue;
        }
    }
})

export const { filterContacts } = filterSlice.actions
export const filterListReducer = filterSlice.reducer

// const filter = action.payload.filterValue
//             const contacts = action.payload.contacts
//             return state = contacts && contacts.filter(option => option.name.toLowerCase().includes(`${filter.toLowerCase()}`))
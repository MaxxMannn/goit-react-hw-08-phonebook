import { createSlice } from "@reduxjs/toolkit"
import { getContactsThunk, addContactsThunk , deleteContactsThunk } from "./fetchOperations"

const initialState = {
        items: [],
        isLoading: false,
        error: null
}
// --------------------------------------------------------------------------------------------------
const getContactsThunk_pending = (state) =>{
    state.isLoading = true
}

const getContactsThunk_fulfilled = (state, {payload}) =>{
    state.items = payload
    state.isLoading = false
    state.error = null
}

const getContactsThunk_rejected = (state, {payload}) =>{
    state.isLoading = false
    state.error = payload
}

// --------------------------------------------------------------------------------------------------

const addContactsThunk_pending = (state) =>{
    state.isLoading = true
}

const addContactsThunk_fulfilled = (state, {payload}) =>{
    state.items = [payload, ...state.items]
    state.isLoading = false
    state.error = null
}

const addContactsThunk_rejected = (state, {payload}) =>{
    state.isLoading = false
    state.error = payload
}

// --------------------------------------------------------------------------------------------------

const deleteContactsThunk_pending = (state) =>{
    state.isLoading = true
}

const deleteContactsThunk_fulfilled = (state, {payload}) =>{
    state.items = state.items.filter(item => item.id !== payload.id)
    state.isLoading = false
    state.error = null
}

const deleteContactsThunk_rejected = (state, {payload}) =>{
    state.isLoading = false
    state.error = payload
}

const contactsSlice = createSlice({
    name:'contacts',
    initialState,

    extraReducers:(builder) =>{
        builder
        .addCase(getContactsThunk.pending, getContactsThunk_pending)
        .addCase(getContactsThunk.fulfilled, getContactsThunk_fulfilled)
        .addCase(getContactsThunk.rejected, getContactsThunk_rejected) 
        .addCase(addContactsThunk.pending, addContactsThunk_pending)
        .addCase(addContactsThunk.fulfilled, addContactsThunk_fulfilled)
        .addCase(addContactsThunk.rejected, addContactsThunk_rejected) 
        .addCase(deleteContactsThunk.pending, deleteContactsThunk_pending)
        .addCase(deleteContactsThunk.fulfilled, deleteContactsThunk_fulfilled)
        .addCase(deleteContactsThunk.rejected, deleteContactsThunk_rejected) 
    },
    // reducers:{
    //     addContact(state,action) {
    //         state.push(action.payload.newContact)
    //     },
    //     deleteContact(state,action) {
    //         return state = action.payload.newState
    //     },
    // }
})

export const contactsReducer = contactsSlice.reducer
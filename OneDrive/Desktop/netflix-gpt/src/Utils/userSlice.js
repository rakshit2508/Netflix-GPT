import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user', // name of the slice
    initialState :null,
    reducers: {
        addUser :(state , action) => { // when user login
           return action.payload;
        },
        removeUser :(state, action) => {
            return null;
        },
    },

});

export const {addUser , removeUser} = userSlice.actions;
export default userSlice.reducer;
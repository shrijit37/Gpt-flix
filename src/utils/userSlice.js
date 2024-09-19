import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload; //this becomes the state then
        },
        removeUser: (state, action) => {
            return null; //set state back to null
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
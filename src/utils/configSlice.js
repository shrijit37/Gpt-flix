import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        prefferedLang: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.prefferedLang = action.payload;
        },
    },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
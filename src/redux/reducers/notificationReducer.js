
const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    message: ""
};

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        reset: (state, action) => {
            state.message = ""
        }

    },
    extraReducers: {
        "todo/add": (state) => {
            state.message = "todo is created!"
        },
        "note/add": (state) => {
            state.message = "Note is created!"
        }
    }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationAction = notificationSlice.actions;

export const notificationSelector = (state) => state.notificationReducer.message
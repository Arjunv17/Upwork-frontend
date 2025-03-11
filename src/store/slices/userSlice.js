import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    role: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserCredentials: (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                role: action.payload.role,
                token: action.payload.token,
            };
        },

        clearUserCredentials: () => {
            localStorage.removeItem('upwork_user_data');
            return initialState;
        },
    },
});


export const { setUserCredentials, clearUserCredentials } = userSlice.actions;
export default userSlice.reducer;

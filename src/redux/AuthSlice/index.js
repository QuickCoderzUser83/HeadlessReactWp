import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    user: {},
    error : ''
}

export const login = createAsyncThunk('auth/login', async({email, password}) => {
    const data = {username: email, password: password}
    const res = await axios.post(process.env.REACT_APP_API_AUTH_TOKEN, data)
    return res.data;
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = '';
            window.location.href = '/my-account/dashboard';
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export const {logout} = AuthSlice.actions;

export default AuthSlice.reducer;
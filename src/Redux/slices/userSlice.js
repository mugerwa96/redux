import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    detials: {
        name: "",
        age: 0,
        emailAddress: ""
    },
    isLogined: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login(state,action){
            state.detials=action.payload
        },
        logout(state,action){
            state.detials=initialState.detials
        }
    }
    
});
export const {login,logout} =userSlice.actions;
export default userSlice.reducer;
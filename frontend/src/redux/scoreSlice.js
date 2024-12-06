import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    totalScore: 0,
}

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers:{
        incrementScore(state, action){
            state.totalScore += action.payload;
        }
    }
});

export const {incrementScore} = scoreSlice.actions;
export default scoreSlice;
import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import scoreSlice from "./scoreSlice";

const store = configureStore({
    reducer: {
        quizzes: quizSlice.reducer,
        score: scoreSlice.reducer,
    },
});

export default store;
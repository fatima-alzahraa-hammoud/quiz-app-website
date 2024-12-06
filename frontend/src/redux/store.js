import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import scoreSlice from "./scoreSlice";

const store = configureStore({
    reducer: {
        quizState: quizSlice.reducer,
        scoreState: scoreSlice.reducer,
    },
});

export default store;
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [
        {
            id: 1,
            topic: "Hello",
            type: "C++",
            duration: "1h",
            nbOfQuestions: 4,
            solvedBy: 34,
            nbOfAttempts: 2,
            questions: [
                {
                  id: 1,
                  question: "What is the capital of France?",
                  options: ["Paris", "London", "Berlin", "Madrid"],
                  correct: "Paris",
                },
                {
                  id: 2,
                  question: "What is 5 + 7?",
                  options: ["10", "12", "13", "15"],
                  correct: "12",
                },
                {
                    id: 3,
                    question: "What is 6 + 7?",
                    options: ["10", "12", "13", "15"],
                    correct: "13",
                },
                {
                    id: 4,
                    question: "What is 8 + 7?",
                    options: ["10", "12", "13", "15"],
                    correct: "15",
                },
              ],
        },
        {
            id: 2, 
            topic: "Hello", 
            type: "C++", 
            duration:"1h", 
            nbOfQuestions: 4, 
            solvedBy: 34, 
            nbOfAttempts: 2, 
            quizId: 1,
            questions: [
                {
                  id: 1,
                  question: "What is the capital of France?",
                  options: ["Paris", "London", "Berlin", "Madrid"],
                  correct: "Paris",
                },
                {
                  id: 2,
                  question: "What is 5 + 7?",
                  options: ["10", "12", "13", "15"],
                  correct: "12",
                },
                {
                    id: 3,
                    question: "What is 6 + 7?",
                    options: ["10", "12", "13", "15"],
                    correct: "13",
                },
                {
                    id: 4,
                    question: "What is 8 + 7?",
                    options: ["10", "12", "13", "15"],
                    correct: "15",
                },
              ],
        },
        {id: 3, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 4, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 5, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 6, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 7, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 8, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1}
    ],

    currentQuiz : null,
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setCurrentQuiz(state, action){
            state.currentQuiz = state.quizzes.find((quiz) => quiz.id === action.payload);
        },
    },
});

export const {setCurrentQuiz} = quizSlice.actions;
export default quizSlice;
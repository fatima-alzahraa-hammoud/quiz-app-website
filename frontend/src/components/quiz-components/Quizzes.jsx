import React, {useState, useEffect} from "react";
//import { requestApi } from "../../utils/request";
import "../../styles/base/utilities.css";
import "../../styles/quizzes.css";
import QuizCard from "./QuizCard";

const Quizzes = () => {

    const [quizz, setQuizzes] = useState([]);
    const quizzes = [
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1}
    ]

    return (
        <div className="quizzes-container">
            <div className="quizzes-section">
                <h2 className="section-title">Quizzes</h2>
                <div className="flex center wrap quizzes-grid">
                    {quizzes.map((quiz) => (
                        <QuizCard
                            quiz={quiz}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quizzes;
import React, {useState, useEffect} from "react";
//import { requestApi } from "../../utils/request";
import "../../styles/base/utilities.css";
import "../../styles/quizzes.css";
import AttemptDialog from "../dialogs/AttemptDialog";
import QuizPage from "../../pages/QuizPage";
import QuizCard from "./QuizCard";

const Quizzes = () => {

    const [quizz, setQuizzes] = useState([]);
    const quizzes = [
        {id: 1, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1,
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
        {id: 2, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1,
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
    ];

    const [openAttemptDialog, setOpenAttemptDialog] = useState(false);
    const [selectedQuizId, setselectedQuizId] = useState(null);
    const [openQuiz, setOpenQuiz] = useState(false);

    const openDialog = (quizId) => {
        setOpenAttemptDialog(true);
        setOpenQuiz(false);
        setselectedQuizId(quizId);
    };

    const closeDialog = () => {
        setOpenAttemptDialog(false);
        setselectedQuizId(null);
    };

    const handleAttempt = () => {
        setOpenQuiz(true);
        closeDialog();
    }

    return (
        <div className="quizzes-container">
            <div className="quizzes-section">
                <h2 className="section-title">Quizzes</h2>
                <div className="flex center wrap quizzes-grid">
                    {quizzes.map((quiz) => (
                        <QuizCard
                            quiz={quiz}
                            key={quiz.id}
                            onStartQuiz={() => openDialog(quiz.id)} 
                        />
                    ))}
                </div>
            </div>

            {openAttemptDialog && (
                <AttemptDialog
                    quiz={quizzes.find((quiz) => quiz.id === openAttemptDialog)}
                    onClose={() => closeDialog()}
                    onSave={handleAttempt}
                />
            )}

            {openQuiz &&
                <QuizPage quizId={selectedQuizId}/>
            }
        </div>
    );
};

export default Quizzes;
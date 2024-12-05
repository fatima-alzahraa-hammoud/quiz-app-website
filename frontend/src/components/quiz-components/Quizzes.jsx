import React, {useState, useEffect} from "react";
//import { requestApi } from "../../utils/request";
import "../../styles/base/utilities.css";
import "../../styles/quizzes.css";
import AttemptDialog from "../dialogs/AttemptDialog";
import QuizCard from "./QuizCard";

const Quizzes = () => {

    const [quizz, setQuizzes] = useState([]);
    const quizzes = [
        {id: 1, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 2, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 3, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 4, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 5, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 6, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 7, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1},
        {id: 8, topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1}
    ];

    const [openAttemptDialog, setOpenAttemptDialog] = useState(null);
    const [openQuiz, setOpenQuiz] = useState(false);

    const openDialog = (quizId) => {
        setOpenAttemptDialog(quizId);
    };

    const closeDialog = () => {
        setOpenAttemptDialog(null);
    };

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

            {openAttemptDialog !== null && (
                <AttemptDialog
                    quiz={quizzes.find((quiz) => quiz.id === openAttemptDialog)}
                    onClose={() => closeDialog()}
                    onSave={() => setOpenQuiz(true)}
                />
            )}
        </div>
    );
};

export default Quizzes;
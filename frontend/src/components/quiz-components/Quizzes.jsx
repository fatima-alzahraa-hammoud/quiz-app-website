import React, {useState, useEffect} from "react";
//import { requestApi } from "../../utils/request";
import "../../styles/base/utilities.css";
import "../../styles/quizzes.css";
import AttemptDialog from "../dialogs/AttemptDialog";
import QuizCard from "./QuizCard";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuiz } from "../../redux/quizSlice";
import { useNavigate } from "react-router-dom";

const Quizzes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizzes = useSelector((state) => state.quizzes.quizzes);
    const totalScore = useSelector((state) => state.score.totalScore);

    const [openAttemptDialog, setOpenAttemptDialog] = useState(false);
    const [selectedQuizId, setselectedQuizId] = useState(null);

    const openDialog = (quizId) => {
        setOpenAttemptDialog(true);
        setselectedQuizId(quizId);
        dispatch(setCurrentQuiz(null));
    };

    const closeDialog = () => {
        setOpenAttemptDialog(false);
        setselectedQuizId(null);
    };

    const handleAttempt = (quizId) => {
        setOpenAttemptDialog(false);
        dispatch(setCurrentQuiz(quizId));
        navigate(`/quiz/${quizId}`);
    }

    return (
        <div className="quizzes-container">
            <div className="quizzes-section">
                <h2 className="section-title">Quizzes</h2>
                <p>Score: {totalScore}</p>
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
                    onClose={() => closeDialog()}
                    onSave={() => handleAttempt(selectedQuizId)}
                />
            )}
        </div>
    );
};

export default Quizzes;
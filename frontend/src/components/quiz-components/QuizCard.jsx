import React, { useState } from "react";
import "../../styles/quizCard.css";

const QuizCard = ({quiz, onStartQuiz}) => {
    const {topic, type, duration, nbOfQuestions, solvedBy, nbOfAttempts, quizId} = quiz;    

    return(
        <div className="quiz-card">
            <div className="card-head">
                <div className="quiz-topic-save">
                    <h3 className="quiz-topic">{topic}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                    </svg>
                </div>
                <p className="quiz-type">{type}</p>
                <p className="quiz-duration">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer">
                        <line x1="10" x2="14" y1="2" y2="2"/>
                        <line x1="12" x2="15" y1="14" y2="11"/>
                        <circle cx="12" cy="14" r="8"/>
                    </svg>
                    <span>{duration}</span>
                </p>
            </div >
            <div className="card-body">
                <p className="quiz-nb-questions">Number of questions: {nbOfQuestions}</p>
                <p className="quiz-nb-students">Solved by: 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    {solvedBy}
                </p>
                <p className="quiz-nb-attempts">NUmber of attempts: {nbOfAttempts}</p>
                <div className="quiz-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <button className="start-now-btn" onClick={onStartQuiz}>Start Quiz</button>
            </div>

        </div>
    );
};

export default QuizCard;
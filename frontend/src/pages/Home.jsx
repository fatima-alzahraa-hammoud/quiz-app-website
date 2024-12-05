import React from "react";
import HeroSection from "../components/common/HeroSection";
import Navbar from "../components/common/Navbar";
import QuizCard from "../components/quiz-components/QuizCard";

const Home = () => {
  const quiz = {topic: "Hello", type: "C++", duration:"1h", nbOfQuestions: 4, solvedBy: 34, nbOfAttempts: 2, quizId: 1};
    
  return (
    <div>
      <Navbar />
      <HeroSection />
      <QuizCard quiz={quiz}/>
    </div>
  );

};

export default Home;

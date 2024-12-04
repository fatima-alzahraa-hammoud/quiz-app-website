import React, {useState} from "react";
import heroImage from "../../assets/images/Online test.gif";
import searchIcon from "../../assets/icons/search-icon.svg";
import "../../styles/heroSection.css"

const HeroSection = () => {

    return(
        <div className="hero-section">
            <div className="hero-text">
                <h1>Welcome to QuizMaster</h1>
                <h2>Challenge Your Knowledge!</h2>
                <p>
                    Disacover exciting quizzes on a variety of topics. Test your knowledge, learn
                    something new, and earn points as you go! Are you ready to take the challenge?
                </p>
                <div className="search-bar">
                    <input type="text" id="search" placeholder="Search for quiz..." />
                    <button className="search-icon-button" id="search-button">
                        <img className="search-icon" src={searchIcon} alt="Search" />
                    </button>
                </div>
                <button className="beat-btn">Beat the Quiz</button>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="Quiz image" />
            </div>
        </div>

    );
}

export default HeroSection;
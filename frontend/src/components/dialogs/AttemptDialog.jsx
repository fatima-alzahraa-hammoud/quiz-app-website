import React, {useState, useRef} from "react";
import "../../styles/base/utilities.css";
import "../../styles/dialog.css";

const AttemptDialog = ({onClose, onSave, quizId}) => {

    const handleAttempt = async(e) => {
        e.preventDefault();

        onSave();
        onClose();
    }

    return (
        <dialog className="dialog" open>
            <div className="dialog-content">
                <h3>Quiz Attempt</h3>
                <div className="dialog-details">
                    <h3>Are you ready to start this quiz?</h3>
                    <div className="dialog-buttons">
                        <button className="close-dialog" type="button" onClick={() => {
                            onClose();
                        }}>Cancel</button>
                        <button onClick={handleAttempt} className="attempt-button">Attempt</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default AttemptDialog;

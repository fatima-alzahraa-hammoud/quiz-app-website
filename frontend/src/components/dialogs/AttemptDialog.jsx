import React, {useState, useRef} from "react";
import "../../styles/base/utilities.css";
//import "../../styles/dialog.css";

const AddAnnouncementDialog = ({onClose, onSave, quizId}) => {

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
                    <p>Would you need to attempt the quiz?</p>
                    <div className="form-buttons">
                        <button className="cancel-button" type="button" onClick={() => {
                            onClose();
                        }}>Cancel</button>
                        <button onClick={handleAttempt} className="attempt-button">Attempt</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default AddAnnouncementDialog;

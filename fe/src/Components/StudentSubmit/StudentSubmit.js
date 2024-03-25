import React, { useState } from 'react';
import './StudentSubmit.css';

const TermsModal = ({ isOpen, onAgree, onClose, onSubmit, isAgreed }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
          <div className="modal-content">
            <h2>Terms and Conditions</h2>
            <p>Here are the terms and conditions. Please read and agree to these before submitting your assignment.</p>
            <label>
              <input type="checkbox" checked={isAgreed} onChange={onAgree} /> I agree to the Terms and Conditions
            </label>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={onClose} className='close'>Close</button>
              <button onClick={onSubmit} style={{ marginLeft: '10px' }} className='sm'>Submit</button>
            </div>
          </div>
        </div>
      );
    };

const StudentSubmit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleAgree = (e) => setIsAgreed(e.target.checked);

    const handleSubmit = (e) => {
        if (!isAgreed) {
            alert('Please agree to the Terms and Conditions before submitting.');
            return;
        }
        // Code to submit assignment goes here
        alert('Assignment submitted successfully!');
        handleCloseModal(); // Close modal after submission
    };

    const assignmentDetails = {
        faculty: "Computer Science",
        closureDate: {
            date: "2024-03-31",
            coordinatorComment: "Please submit initial drafts or outlines by this date."
        },
        finalDate: {
            date: "2024-04-07",
            coordinatorComment: "Final submissions must include all sections as outlined in the assignment brief."
        }
    };

    const SubmissionSection = ({ containerClass, title, date, comment }) => (
        <div className={containerClass}>
            <div className="as-header">
                <h2>Assignment Submission - {assignmentDetails.faculty}</h2>
            </div>
            <div className="as-section">
                <h4>{title}: {date}</h4>
                <div className="as-file-upload-and-comment">
                    <div className="as-file-upload-container">
                        <label htmlFor={`file-upload-${title.toLowerCase().replace(/\s+/g, '-')}`} className="as-custom-file-upload">
                            Choose file
                        </label>
                        <input id={`file-upload-${title.toLowerCase().replace(/\s+/g, '-')}`} type="file"/>
                    </div>
                    <div className="as-coordinator-comment">
                        <p>{comment}</p>
                    </div>
                </div>
                <div className="as-submit-btn">
                    <button type="button" onClick={handleOpenModal}>Submit Assignment</button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <SubmissionSection
                containerClass="as-container-closure"
                title="Closure Date"
                date={assignmentDetails.closureDate.date}
                comment={assignmentDetails.closureDate.coordinatorComment}
            />
            <SubmissionSection
                containerClass="as-container-final"
                title="Final Date"
                date={assignmentDetails.finalDate.date}
                comment={assignmentDetails.finalDate.coordinatorComment}
            />
            <TermsModal isOpen={isModalOpen} onAgree={handleAgree} onClose={handleCloseModal} />
            <TermsModal 
              isOpen={isModalOpen} 
              onAgree={handleAgree} 
              onClose={handleCloseModal} 
              onSubmit={handleSubmit}
              isAgreed={isAgreed}
            />
        </>
    );
}

export default StudentSubmit;

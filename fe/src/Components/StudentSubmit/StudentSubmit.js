import React from 'react';
import './StudentSubmit.css';
import { useNavigate } from 'react-router-dom'; 

const StudentSubmit = () => {
    const navigate = useNavigate();

    const assignmentDetails = {
        faculty: "Computer Science",
        closureDate: {
            date: "2024-03-31",
            content: "Please ensure to submit initial drafts or outlines by this date. Submissions should be in the form of a Word document (.docx) or a PDF file. Additionally, any relevant images or diagrams that support your submission should be included as separate files. It's crucial to adhere to this deadline to allow for timely feedback."
        },
        finalDate: {
            date: "2024-04-07",
            content: "Final submissions must include all sections as outlined in the assignment brief. This includes a comprehensive analysis, detailed methodology, results, and a conclusion. All submissions must be in a Word document (.docx) or a PDF file, with any supporting images or diagrams included as separate files. Remember, submitting on time is essential for your final evaluation."
        }
    };

    const SubmissionSection = ({ title, date, detail }) => (
        <div className="as-section">
            <div className="as-header">
                <h2>Assignment Submission - {assignmentDetails.faculty}</h2>
            </div>
            <div>
                <h4>{title}: {date}</h4>
                <p>{detail}</p>
                <button className='submit-article' type="button" onClick={() => navigate('/post')}>Submit Assignment</button>
            </div>
        </div>
    );

    return (
        <>
            <SubmissionSection
                title="Closure Date"
                date={assignmentDetails.closureDate.date}
                detail={assignmentDetails.closureDate.content}
            />
            <SubmissionSection
                title="Final Date"
                date={assignmentDetails.finalDate.date}
                detail={assignmentDetails.finalDate.content}
            />
        </>
    );
}

export default StudentSubmit;

import React, { useState } from 'react';
import './StudentSubmit.css';
import { useNavigate } from 'react-router-dom';

const StudentSubmit = () => {
    const navigate = useNavigate();
    
    const assignmentDetails = {
        faculty: "Computer Science",
        closureDate: {
            date: "2024-03-31",
            content: "Please ensure to submit initial drafts or outlines by this date. Submissions should be in the form of a Word document (.docx) or a PDF file. Additionally, any relevant images or diagrams that support your submission should be included as separate files. It's crucial to adhere to this deadline to allow for timely feedback.",
            feedback: "Your initial draft shows a promising start with a good grasp of the fundamental concepts required for this project. The outline of sections is well-structured, and your introduction sets a clear tone for the rest of the document. However, I noticed a few areas that need enhancement to meet the assignment criteria fully. First, the methodology section requires more detailed descriptions of the processes and the rationale behind your chosen methods. This will strengthen the credibility of your research and provide clearer guidance on how your results were obtained. Additionally, some key literature that could bolster your arguments is missing from your references. I recommend reviewing recent publications that could provide additional insights into your topic. Overall, you're on the right track, but these improvements are crucial for a stronger final submission."
        },
        finalDate: {
            date: "2024-04-07",
            content: "Final submissions must include all sections as outlined in the assignment brief. This includes a comprehensive analysis, detailed methodology, results, and a conclusion. All submissions must be in a Word document (.docx) or a PDF file, with any supporting images or diagrams included as separate files. Remember, submitting on time is essential for your final evaluation.",
            feedback: "This final submission is comprehensive and reflects significant improvement from the initial drafts. The depth of analysis in your results section is commendable, and your conclusions are logically drawn from the data presented. It’s evident that a lot of effort went into ensuring the accuracy of the data and the clarity of your arguments. On the improvement side, while your report is generally well-written, there are several instances of repetitive phrasing that could be streamlined to enhance readability. Additionally, the visual aids are helpful but could be better integrated into the text with more detailed captions explaining each figure and table. Incorporating these changes will not only improve the aesthetic appeal but also the informational value of your submission. Great job overall, and with a few tweaks, your work could truly excel."
        }
    };

    const SubmissionSection = ({ title, date, detail, feedback }) => {
        const [showFeedback, setShowFeedback] = useState(false);
    
        return (
            <div className="as-section">
                <div className="as-header">
                    <h2>Assignment Submission - {assignmentDetails.faculty}</h2>
                </div>
                <div>
                    <h4>{title}: {date}</h4>
                    <p>{detail}</p>
                    <button className='submit-article' type="button" onClick={() => navigate('/post')}>Submit Assignment</button>
                    <div className="feedback-area">
                        <span className="toggle-feedback" onClick={() => setShowFeedback(!showFeedback)}>
                            Feedback Comment:
                        </span>
                        {showFeedback && <p className="feedback-content">{feedback}</p>}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <SubmissionSection
                title="Closure Date"
                date={assignmentDetails.closureDate.date}
                detail={assignmentDetails.closureDate.content}
                feedback={assignmentDetails.closureDate.feedback}
            />
            <SubmissionSection
                title="Final Date"
                date={assignmentDetails.finalDate.date}
                detail={assignmentDetails.finalDate.content}
                feedback={assignmentDetails.finalDate.feedback}
            />
        </>
    );
}

export default StudentSubmit;

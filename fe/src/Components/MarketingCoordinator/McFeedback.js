import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const McFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mc-review-container">
      <div className="mc-review-container-2">
        <h2 className="text-center">Comment Feedback</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                className="mc-review-form-control"
                id="feedbackTextArea"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter comment here"
              ></textarea>
            </div>
          </form>
        ) : (
          <div className="alert alert-success" role="alert">
            Comment feedback successfully!
          </div>
        )}
        <div className="text-center">
          <button type="submit" className="btn btn-primary" required>Send Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default McFeedback;

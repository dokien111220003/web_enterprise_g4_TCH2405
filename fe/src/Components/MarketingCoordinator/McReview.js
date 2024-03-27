import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './McReview.css';

const McReview = () => {
  const [feedback, setFeedback] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic để xử lý feedback ở đây, ví dụ gửi feedback tới server
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
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter comment here"
              ></textarea>
            </div>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                id="publicCheckbox"
                checked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
              />
              <label className="form-check-label" htmlFor="publicCheckbox">Choose to public</label>
            </div>
          </form>
        ) : (
          <div className="alert alert-success" role="alert">
            Comment feedback successfully!
          </div>
        )}
                    <div className="text-center">
              <button className="btn btn-primary-mc">Back</button>
              <button type="submit" className="btn btn-primary" required>Send Feedback</button>
            </div>
      </div>
    </div>
  );
};

export default McReview;

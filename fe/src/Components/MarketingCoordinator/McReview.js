import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './McReview.css';

const McReview = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState('');
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
            <div className="input-group">
              <label className="input-group-text" htmlFor="countrySelect">State for publication</label>
              <select
                className="form-select"
                id="countrySelect"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Non-Public" selected>Non-public</option>
                <option value="Public">Public</option>
              </select>
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

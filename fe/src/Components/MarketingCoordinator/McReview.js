import React, { useState } from 'react';
import './McReview.css'; 

const McReview = () => {
  const [review, setReview] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handlePublicChange = (e) => {
    setIsPublic(e.target.checked);
  };

  const handleSubmit = () => {
    console.log('Review:', review);
    console.log('Make public:', isPublic);
    alert('Review submitted successfully!');
  };

  return (
    <div className="mc-review">
      <h2>Submit Your Review</h2>
      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Type your review here..."
        rows="5"
      ></textarea>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={handlePublicChange}
          />
          Make this review public
        </label>
      </div>
      <button onClick={handleSubmit}>Complete Review</button>
    </div>
  );
};

export default McReview;

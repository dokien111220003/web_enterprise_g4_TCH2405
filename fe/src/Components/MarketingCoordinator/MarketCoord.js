import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MarketCoord.css';

const MarketCoord = () => {
  const [studentsSubmissions, setStudentsSubmissions] = useState([
    {
      id: 1,
      fullName: 'Alice Johnson',
      email: 'abcd@gmail.com',
      closureDateSubmission: {
        files: ['draft_v1.docx', 'outline.png'],
        commented: true,
      },
      finalDateSubmission: {
        files: ['final_report.docx', 'charts.jpg'],
        commented: false,
      },
    },
    {
      id: 2,
      fullName: 'John Doe',
      email: 'abcde@gmail.com',
      closureDateSubmission: {
        files: ['initial_thoughts.docx'],
        commented: false,
      },
      finalDateSubmission: {
        files: ['complete_analysis.docx', 'survey_results.png'],
        commented: true,
      },
    },
  ]);

  const handleCheckboxChange = (studentId, type) => {
    const updatedSubmissions = studentsSubmissions.map(submission => {
      if (submission.id === studentId) {
        if (type === 'closureDateCommented') {
          submission.closureDateSubmission.commented = !submission.closureDateSubmission.commented;
        } else if (type === 'finalDateCommented') {
          submission.finalDateSubmission.commented = !submission.finalDateSubmission.commented;
        }
      }
      return submission;
    });
    setStudentsSubmissions(updatedSubmissions);
  };

  const updateSubmissions = () => {
    // Normally, you would send the updated state to your backend here.
    console.log('Updated submissions:', studentsSubmissions);
    alert('Submissions updated successfully!');
  };

  const renderFiles = (files) => files.map((file, index) => <li key={index}>{file}</li>);

  return (
    <div className="mc-page">
      <h1>Marketing Coordinator Dashboard</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Closure Date Submission</th>
              <th>Activity</th>
              <th>Final Date Submission</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {studentsSubmissions.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>
                  <ul>{renderFiles(student.closureDateSubmission.files)}</ul>
                </td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id={`closureDateSwitch${student.id}`}
                      checked={student.closureDateSubmission.commented}
                      onChange={() => handleCheckboxChange(student.id, 'closureDateCommented')}
                      />
                    <label class="form-check-label" for={`closureDateSwitch${student.id}`}>Reviewed</label>
                  </div>
                </td>
                <td>
                  <ul>{renderFiles(student.finalDateSubmission.files)}</ul>
                </td>
                <td>
                  <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={`finalDateSwitch${student.id}`}
                    checked={student.finalDateSubmission.commented}
                    onChange={() => handleCheckboxChange(student.id, 'finalDateCommented')}
                  />
                  <label class="form-check-label" for={`finalDateSwitch${student.id}`}>Reviewed</label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={updateSubmissions} className="update-button">Update</button>
      </div>
    </div>
  );
};

export default MarketCoord;

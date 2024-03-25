import React, { useState } from 'react';
import './MarketCoord.css'; 

const studentsSubmissions = [
  {
    id: 1,
    fullName: 'Alice Johnson',
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
    closureDateSubmission: {
      files: ['initial_thoughts.docx'],
      commented: false,
    },
    finalDateSubmission: {
      files: ['complete_analysis.docx', 'survey_results.png'],
      commented: true,
    },
  },
];

const MarketCoord = () => {
  const [commentStatus, setCommentStatus] = useState(studentsSubmissions.map(submission => ({
    closureDateCommented: submission.closureDateSubmission.commented,
    finalDateCommented: submission.finalDateSubmission.commented,
  })));

  const handleCheckboxChange = (index, type) => {
    const updatedStatus = [...commentStatus];
    updatedStatus[index][type] = !updatedStatus[index][type];
    setCommentStatus(updatedStatus);
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
              <td>
                <ul>{renderFiles(student.closureDateSubmission.files)}</ul>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={commentStatus[index].closureDateCommented}
                  onChange={() => handleCheckboxChange(index, 'closureDateCommented')}
                /> Reviewed
              </td>
              <td>
                <ul>{renderFiles(student.finalDateSubmission.files)}</ul>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={commentStatus[index].finalDateCommented}
                  onChange={() => handleCheckboxChange(index, 'finalDateCommented')}
                /> Reviewed
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MarketCoord;

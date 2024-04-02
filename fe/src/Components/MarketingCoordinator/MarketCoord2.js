import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MarketCoord2 = () => {
  const submissions = [
    { id: 1, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 2, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 3, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 4, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 5, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
  ];
  return (
    <Container fluid="xxl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Manage First Hand Submission</h2>
              </div>
            </div>
          </div>
          <Table striped hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contribution</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(submission => (
                <tr key={submission.id}>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td><a href={submission.contributionLink} download={submission.contributionName}>{submission.contributionName}</a></td>
                  <td><Link to={`/mc_review/${submission.id}`} className="view-detail-link">Feedback</Link></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div class="clearfix">
            <div class="hint-text">Showing <b>5</b> out of <b>15</b> Submissions</div>
            <ul class="pagination">
              <li class="page-item disabled"><a href="#">Previous</a></li>
              <li class="page-item active"><a href="#" class="page-link">1</a></li>
              <li class="page-item"><a href="#" class="page-link">2</a></li>
              <li class="page-item"><a href="#" class="page-link">3</a></li>
              <li class="page-item"><a href="#" class="page-link">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MarketCoord2;

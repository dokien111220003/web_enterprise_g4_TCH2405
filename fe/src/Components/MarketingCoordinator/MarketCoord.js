import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MarketCoord.css';

const MarketCoord = () => {
  const submissions = [
    { id: 1, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 2, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 3, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 4, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 5, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 6, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 7, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 8, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 9, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
    { id: 10, name: 'Thomas Hardy', email: 'thomashardy@mail.com', contributionLink: '/path/to/thomas-hardy-contribution.zip', contributionName: 'ThomasHardyContribution.zip' },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(submissions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentSubmission = submissions.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);}
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
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contribution</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {currentSubmission.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.id}</td>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td><a href={submission.contributionLink} download={submission.contributionName}>{submission.contributionName}</a></td>
                  <td><Link to={`/mc_feedback/${submission.id}`} className="view-detail-link">Feedback</Link></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div class="clearfix">
          <Pagination className="pagination-contri-mm">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MarketCoord;

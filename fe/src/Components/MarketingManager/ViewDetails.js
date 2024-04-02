import React, { useState } from 'react';
import './ViewDetails.css';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import search_icon from '../Assets/search.png';

const ViewDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const contributions = [
    { id: 1, name: "John Smith", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 2, name: "Emma Stone", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 3, name: "Stev Vie", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 4, name: "John Smith", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 5, name: "Emma Stone", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 6, name: "Stev Vie", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 7, name: "John Smith", year: "2017-2021", images: "/demo", download: "/demo" },
    { id: 8, name: "Emma Stone", year: "2017-2021", images: "/demo", download: "/demo" },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(contributions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentContributions = contributions.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="MM-detail-header">
        <h1>Contributions Detail</h1>
        <h2>Computer Science</h2>
      </div>
      <div className="MM-detail-container">
        <div className='search-container-mm'>
          <div className="search-input-mm">
            <img src={search_icon} alt="" className="icon-search" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="MM-download-all">
          <button className="MM-download-btn">Download All</button>
        </div>
      </div>

      <div className="MM-detail-tb">
        <Table striped bordered hover className="MM-detail-table-content">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th>Contribution Images</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {currentContributions.map((contribution, index) => (
              <tr key={index}>
                <td>{contribution.id}</td>
                <td>{contribution.name}</td>
                <td>{contribution.year}</td>
                <td><a href={contribution.images}>View All</a></td>
                <td><a href={contribution.download}>Download</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div >
          <Pagination className="pagination-detail-mm">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;

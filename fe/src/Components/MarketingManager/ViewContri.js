import React, { useState } from 'react';
import './ViewContri.css';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import search_icon from '../Assets/search.png';

const ViewContri = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const contributions = [
        { id: 1, faculty: "Computer Science", topic: "Machine Learning", closureDate: "18/1/2024", finalClosureDate: "30/1/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 2, faculty: "Computer Science", topic: "Mathematics", closureDate: "24/3/2024", finalClosureDate: "30/3/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 3, faculty: "Business", topic: "Business Management", closureDate: "24/3/2024", finalClosureDate: "30/3/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 4, faculty: "Business", topic: "Marketing", closureDate: "25/4/2024", finalClosureDate: "30/4/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 5, faculty: "Finance", topic: "Investments", closureDate: "15/5/2024", finalClosureDate: "25/5/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 6, faculty: "Business", topic: "Supply Chain Management", closureDate: "10/6/2024", finalClosureDate: "20/6/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 7, faculty: "Marketing", topic: "Consumer Behavior", closureDate: "5/7/2024", finalClosureDate: "15/7/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 8, faculty: "Finance", topic: "Financial Analysis", closureDate: "20/8/2024", finalClosureDate: "30/8/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 9, faculty: "Business", topic: "Organizational Behavior", closureDate: "10/9/2024", finalClosureDate: "20/9/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 10, faculty: "Management", topic: "Leadership", closureDate: "15/10/2024", finalClosureDate: "25/10/2024", link: "/marketing_manager/contribution/details/:id" },
        { id: 10, faculty: "Computer Science", topic: "Programming", closureDate: "15/10/2024", finalClosureDate: "25/10/2024", link: "/marketing_manager/contribution/details/:id" }

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
            <div className="MM-contri-header">
                <h1>Contributions</h1>
            </div>
            <div className="MM-contri-container">
                <div className='search-container-mm'>
                    <div className="search-input-mm">
                        <img src={search_icon} alt="" className="icon-search" />
                        <input type="search" placeholder="Search" />
                    </div>
                </div>
                <select className="MM-contri-filter-fal">
                    <option value="">All</option>
                    <option value="Open">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="MachineLearning">Machine Learning</option>
                </select>
                <select className="MM-contri-filter-time">
                    <option value="">Time</option>
                    <option value="">Recently</option>
                    <option value="">Previously</option>
                </select>
            </div>

            <div className="MM-contribution-tb">
                <Table striped bordered hover className="MM-table-content">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Faculty</th>
                            <th>Topic</th>
                            <th>Closure Date</th>
                            <th>Final Closure Date</th>
                            <th>View all</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentContributions.map((contribution, index) => (
                            <tr key={index}>
                                <td>{contribution.id}</td>
                                <td>{contribution.faculty}</td>
                                <td>{contribution.topic}</td>
                                <td>{contribution.closureDate}</td>
                                <td>{contribution.finalClosureDate}</td>
                                <td><a href={contribution.link}>Click Here</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div >
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
    );
}

export default ViewContri;

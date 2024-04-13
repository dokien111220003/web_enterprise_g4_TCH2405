import React from 'react';
import './MainPageAdmin.css';
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const MainPageAdmin = () => {

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data = [
    { name: "Computer Science", value: 47 },
    { name: "Business", value: 21 },
    { name: "Marketing", value: 39 },
    { name: "Law", value: 12 },
  ];

  const LegendComponent = () => (
    <ul className="legend">
      {data.map((entry, index) => (
        <li key={`legend-${index}`}>
          <span className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
          <span className="legend-label">{entry.name}</span>
        </li>
      ))}
    </ul>
  );

  const data2 = [
    {
      name: 'Computer Science',
      Checked: 29,
      Unchecked: 18,
    },
    {
      name: 'Business',
      Checked: 17,
      Unchecked: 4,
    },
    {
      name: 'Marketing',
      Checked: 16,
      Unchecked: 23,
    },
    {
      name: 'Law',
      Checked: 7,
      Unchecked: 5,
    }
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#E72929'];

  return (
    <div>
      <body className="body-admin">
        <div className="admin-header">
          <h1>Administrator Dashboard</h1>
          <div className="line-admin"></div>
        </div>
        <div className="admin-dashboard-content">
          <div className="left-containter-admin">
            <div className="boxx-analyze">
              <div className='boxx-content'>
                <p>Total Contribution</p>
                <b>154</b>
              </div>
            </div>
            <div className="boxx-analyze">
              <div className='boxx-content'>
                <p>Total Student</p>
                <b>589</b>
              </div>
            </div>
            <div className="boxx-analyze">
              <div className='boxx-content'>
                <p>Total Submission</p>
                <b>154</b>
              </div>
            </div>
            <div className="boxx-analyze">
              <div className='boxx-content'>
                <p>Total Submission</p>
                <b>154</b>
              </div>
            </div>
          </div>
          <div className="right-containter-admin">
            <div className="diagram-content-admin">
              <div className="box-chart-analyze">
                <div className="test-chart">
                  <PieChart width={400} height={400} className="pie-chart">
                    <Pie
                      dataKey="value"
                      labelLine={false}
                      data={data}
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      fill="#8884d8"
                      label={renderCustomizedLabel}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
                <div className="legend-chart-box">
                  <LegendComponent />
                </div>
              </div>
              <div className="box-line-analyze">
                <p>Status View:</p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Checked" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="Unchecked" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default MainPageAdmin;

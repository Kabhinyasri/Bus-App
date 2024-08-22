import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Schedule.css';

const Schedule = () => {
  const navigate = useNavigate();

  const handleReserve = (busId) => {
    alert(`Reserved seat for bus ID: ${busId}`);
  };


  const schedules = [
    {
      id: 1,
      busName: 'Express Line',
      date: '2024-08-25',
      departure: '10:00 AM',
      arrival: '2:00 PM',
      from: 'New York',
      to: 'Boston',
    },
    {
      id: 2,
      busName: 'City Connector',
      date: '2024-08-25',
      departure: '1:00 PM',
      arrival: '5:00 PM',
      from: 'Los Angeles',
      to: 'San Francisco',
    },
    {
      id: 3,
      busName: 'Night Owl',
      date: '2024-08-25',
      departure: '9:00 PM',
      arrival: '1:00 AM',
      from: 'Chicago',
      to: 'St. Louis',
    },
  ];

  return (
    <div className="schedule-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>Bus Schedules</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Bus Name</th>
            <th>Date</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>From</th>
            <th>To</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.busName}</td>
              <td>{schedule.date}</td>
              <td>{schedule.departure}</td>
              <td>{schedule.arrival}</td>
              <td>{schedule.from}</td>
              <td>{schedule.to}</td>
              <td>
                <button onClick={() => handleReserve(schedule.id)}>Reserve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;

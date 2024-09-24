import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CSS/Find.css';

const Find = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [fromMode, setFromMode] = useState('manual'); // Modes: 'manual' or 'select'
  const [toMode, setToMode] = useState('manual'); // Modes: 'manual' or 'select'
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search or validations if needed
    navigate('/schedule');
  };


  return (
    <div className="full">
      <button className="log-button" onClick={ () => navigate('/login')}>Login</button>
      <div className="main">
        <h1>Find Schedule</h1>
        <form onSubmit={handleSearch}>
          <div className="user">
            <div className="input">
              <label>From:</label>
              <div className="input-group">
                <select
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    if (e.target.value) {
                      setFromMode('select'); // Switch to select mode if an option is chosen
                    }
                  }}
                  onFocus={() => setFromMode('select')}
                >
                  <option value="">Select Departure</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  {/* Add more options as needed */}
                </select>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Departure"
                  onFocus={() => setFromMode('manual')}
                  onBlur={() => {
                    if (!from) setFromMode('select'); // Switch to select mode if input is empty
                  }}
                  disabled={fromMode === 'select' && from} // Disable input if select mode is active and value is present
                />
              </div>
            </div>
            <div className="input">
              <label>To:</label>
              <div className="input-group">
                <select
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                    if (e.target.value) {
                      setToMode('select'); // Switch to select mode if an option is chosen
                    }
                  }}
                  onFocus={() => setToMode('select')}
                >
                  <option value="">Select Destination</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Austin">Austin</option>
                  {/* Add more options as needed */}
                </select>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Destination"
                  onFocus={() => setToMode('manual')}
                  onBlur={() => {
                    if (!to) setToMode('select'); // Switch to select mode if input is empty
                  }}
                  disabled={toMode === 'select' && to} // Disable input if select mode is active and value is present
                />
              </div>
            </div>
            <div className="input">
              <label>Date:</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={new Date()} // Prevent selection of past dates
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <button type="submit" className="but">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Find;

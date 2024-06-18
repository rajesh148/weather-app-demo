import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherDashboard from './components/WeatherDashboard';
import WeatherAlert from './components/WeatherAlert';
import UserSettings from './components/UserSettings';
 
const App = () => {
  const [alerts, setAlerts] = useState([]);
 
  const addAlert = (alert) => {
    setAlerts([...alerts, alert]);
  };
 
  const removeAlert = (index) => {
    setAlerts(alerts.filter((_, i) => i !== index));
  };
 
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="flex justify-center space-x-4 mb-6">
          <Link to="/" className="text-blue-500 hover:underline">
            Dashboard
          </Link>
          <Link to="/alerts" className="text-blue-500 hover:underline">
            Add Alert
          </Link>
          <Link to="/settings" className="text-blue-500 hover:underline">
            Settings
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/alerts" element={<WeatherAlert onAddAlert={addAlert} />} />
          <Route path="/settings" element={<UserSettings alerts={alerts} onRemoveAlert={removeAlert} />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;

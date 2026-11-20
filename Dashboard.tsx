import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-2">Welcome to SlotSync – the intelligent timetable clash resolver.</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-700"
        onClick={() => navigate('/generator')}
      >
        Go to Generator
      </button>
    </div>
  );
};

export default Dashboard;

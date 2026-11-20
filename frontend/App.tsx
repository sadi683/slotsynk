import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Generator from './pages/Generator';
import Timetable from './pages/Timetable';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Rooms from './pages/Rooms';
import Students from './pages/Students';
import ConflictAnalyzer from './pages/ConflictAnalyzer';
import ExportPage from './pages/Export';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto bg-surface">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/students" element={<Students />} />
            <Route path="/conflicts" element={<ConflictAnalyzer />} />
            <Route path="/export" element={<ExportPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

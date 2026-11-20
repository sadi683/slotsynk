import React from 'react';
import { exportCsv } from '../api';

const ExportPage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = exportCsv();
    link.download = 'slotsync_schedule.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Export Timetable</h1>
      <p className="mb-2">Download the generated schedule as CSV.</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-700"
        onClick={handleDownload}
      >
        Download CSV
      </button>
    </div>
  );
};

export default ExportPage;

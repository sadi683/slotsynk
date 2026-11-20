import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSchedule } from '../api';

const Generator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const schedule = await generateSchedule();
      // Pass schedule via navigation state
      navigate('/timetable', { state: { schedule } });
    } catch (e: any) {
      setError(e.response?.data?.detail || e.message || 'Generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Timetable Generator</h1>
      <p className="mb-2">Configure constraints (future) and generate a clash‑free timetable.</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-700 disabled:opacity-50"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating…' : 'Generate Timetable'}
      </button>
      {error && <p className="mt-2 text-red-500">Error: {error}</p>}
    </div>
  );
};

export default Generator;

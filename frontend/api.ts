import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000';

export const fetchDemoData = async () => {
  const res = await axios.get(`${API_BASE}/demo-data`);
  return res.data;
};

export const generateSchedule = async () => {
  const res = await axios.post(`${API_BASE}/generate`, {});
  return res.data;
};

export const exportCsv = () => {
  // Direct download link
  return `${API_BASE}/export/csv`;
};

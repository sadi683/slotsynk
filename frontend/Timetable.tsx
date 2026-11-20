import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type ScheduleEntry = {
  section_id: number;
  course_id: number;
  faculty_id: number;
  room_id: number;
  day: string;
  start_slot: number;
  duration: number;
};

// Helper to convert slot index to time string (30‑min slots)
const slotToTime = (slot: number) => {
  const hour = Math.floor(slot / 2) + 8; // start at 8:00
  const minute = (slot % 2) * 30;
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(hour)}:${pad(minute)}`;
};

const Timetable: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const schedule: ScheduleEntry[] = (location.state as any)?.schedule || [];

  if (!schedule.length) {
    return (
      <div>
        <p>No schedule data available. Generate a timetable first.</p>
        <button onClick={() => navigate('/generator')} className="mt-2 px-4 py-2 bg-primary text-white rounded">
          Go to Generator
        </button>
      </div>
    );
  }

  // Build a map: day -> slot -> entry
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const slots = Array.from({ length: 20 }, (_, i) => i); // 20 slots (8‑18)
  const grid: Record<string, Record<number, ScheduleEntry[]>> = {};
  days.forEach((d) => {
    grid[d] = {};
    slots.forEach((s) => (grid[d][s] = []));
  });
  schedule.forEach((e) => {
    for (let i = 0; i < e.duration; i++) {
      const s = e.start_slot + i;
      if (grid[e.day] && grid[e.day][s] !== undefined) {
        grid[e.day][s].push(e);
      }
    }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Weekly Timetable</h1>
      <div className="overflow-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-surface">
            <tr>
              <th className="border px-2 py-1">Time</th>
              {days.map((d) => (
                <th key={d} className="border px-2 py-1">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot} className="odd:bg-gray-50">
                <td className="border px-2 py-1 font-mono">{slotToTime(slot)}</td>
                {days.map((d) => {
                  const entries = grid[d][slot];
                  return (
                    <td key={d} className="border px-2 py-1">
                      {entries.map((e, idx) => (
                        <div key={idx} className="text-xs bg-primary text-white rounded p-1 mb-1">
                          Sec {e.section_id}<br />C{e.course_id}<br />F{e.faculty_id}<br />R{e.room_id}
                        </div>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;

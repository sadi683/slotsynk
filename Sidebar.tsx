import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Generator', path: '/generator' },
  { name: 'Timetable', path: '/timetable' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Students', path: '/students' },
  { name: 'Conflicts', path: '/conflicts' },
  { name: 'Export', path: '/export' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-sidebar text-white p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">SlotSync</h2>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block py-2 px-3 rounded hover:bg-primary ${isActive ? 'bg-primary' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from 'react';

interface TaskbarProps {
  openWindows: string[];
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindows }) => {
  return (
    <div className="xp-taskbar flex items-center px-2">
      <button className="xp-button mr-2 px-4 py-1 font-bold">
        start
      </button>
      <div className="flex items-center gap-2">
        {openWindows.map((windowTitle) => (
          <button
            key={windowTitle}
            className="xp-button px-3 py-1 text-xs"
          >
            {windowTitle}
          </button>
        ))}
      </div>
      <div className="ml-auto text-xs font-semibold text-xp-text-light">
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default Taskbar;
import React from 'react';

interface TaskbarProps {
  openWindows: { id: string; title: string; isMinimized: boolean }[];
  onWindowClick: (windowId: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindows, onWindowClick }) => {
  return (
    <div className="xp-taskbar flex items-center px-2">
      <button className="xp-start-button mr-2 px-4 py-1 font-bold flex items-center gap-2">
        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">⊞</span>
        </div>
        start
      </button>
      <div className="flex items-center gap-2">
        {openWindows.map((window) => (
          <button
            key={window.id}
            className={`xp-button px-3 py-1 text-xs ${window.isMinimized ? 'opacity-60' : ''}`}
            onClick={() => onWindowClick(window.id)}
          >
            {window.title}
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
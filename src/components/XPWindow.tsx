import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface XPWindowProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
  width?: number;
  height?: number;
}

const XPWindow: React.FC<XPWindowProps> = ({
  title,
  children,
  isOpen,
  onClose,
  initialPosition = { x: 100, y: 100 },
  width = 500,
  height = 400
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="xp-window absolute z-10"
      style={{
        left: position.x,
        top: position.y,
        width: width,
        height: height
      }}
    >
      {/* Title Bar */}
      <div
        className="xp-window-title flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span>{title}</span>
        <div className="flex items-center gap-1">
          <button className="xp-button text-xs px-1" onClick={() => {}}>
            <Minus size={10} />
          </button>
          <button className="xp-button text-xs px-1" onClick={() => {}}>
            <Square size={10} />
          </button>
          <button className="xp-button text-xs px-1" onClick={onClose}>
            <X size={10} />
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="p-2 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default XPWindow;
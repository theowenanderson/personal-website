import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <div className="xp-icon" onClick={onClick}>
      <Icon size={32} />
      <div className="xp-icon-text">{label}</div>
    </div>
  );
};

export default DesktopIcon;
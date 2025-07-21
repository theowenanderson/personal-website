import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon?: LucideIcon;
  iconSrc?: string;
  emoji?: string;
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, iconSrc, emoji, label, onClick, size = 'medium' }) => {
  const getIconSize = () => {
    switch (size) {
      case 'small': return 'w-12 h-12';
      case 'medium': return 'w-16 h-16';
      case 'large': return 'w-16 h-16';
      case 'xlarge': return 'w-24 h-24';
      default: return 'w-16 h-16';
    }
  };

  const getLucideSize = () => {
    switch (size) {
      case 'small': return 48;
      case 'medium': return 64;
      case 'large': return 64;
      case 'xlarge': return 96;
      default: return 64;
    }
  };

  return (
    <div className="xp-icon" onClick={onClick}>
      {iconSrc ? (
        <img src={iconSrc} alt={label} className={getIconSize()} />
      ) : emoji ? (
        <div className={`${getIconSize()} flex items-center justify-center text-2xl`}>
          {emoji}
        </div>
      ) : Icon ? (
        <Icon size={getLucideSize()} />
      ) : null}
      <div className="xp-icon-text">{label}</div>
    </div>
  );
};

export default DesktopIcon;
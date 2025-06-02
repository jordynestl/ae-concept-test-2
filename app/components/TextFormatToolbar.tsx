
import React from 'react';
import { 
  Bold, 
  Italic, 
  Strikethrough, 
  Underline, 
  User, 
  X, 
  Undo, 
  Redo 
} from 'lucide-react';

interface TextFormatToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onStrikethrough: () => void;
  onUnderline: () => void;
  onPersonalize: () => void;
  onClear: () => void;
  onUndo: () => void;
  onRedo: () => void;
  activeFormats: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  className?: string;
}

export function TextFormatToolbar({
  onBold,
  onItalic,
  onStrikethrough,
  onUnderline,
  onPersonalize,
  onClear,
  onUndo,
  onRedo,
  activeFormats,
  className = ''
}: TextFormatToolbarProps) {
  return (
    <div className={`flex rounded-sm border border-black ${className}`}>
      <FormatButton
        onClick={onBold}
        active={activeFormats.bold}
        title="Bold"
        icon={<Bold size={16} />}
      />
      <FormatButton
        onClick={onItalic}
        active={activeFormats.italic}
        title="Italic"
        icon={<Italic size={16} />}
      />
      <FormatButton
        onClick={onStrikethrough}
        active={activeFormats.strikethrough}
        title="Strikethrough"
        icon={<Strikethrough size={16} />}
      />
      <FormatButton
        onClick={onUnderline}
        active={activeFormats.underline}
        title="Underline"
        icon={<Underline size={16} />}
      />
      <FormatButton
        onClick={onPersonalize}
        title="Personalization"
        icon={<User size={16} />}
      />
      <FormatButton
        onClick={onClear}
        title="Clear Formatting"
        icon={<X size={16} />}
      />
      <FormatButton
        onClick={onUndo}
        title="Undo"
        icon={<Undo size={16} />}
      />
      <FormatButton
        onClick={onRedo}
        title="Redo"
        icon={<Redo size={16} />}
      />
    </div>
  );
}

interface FormatButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}

function FormatButton({ onClick, icon, title, active = false }: FormatButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1 flex items-center justify-center border-r border-black last:border-r-0 ${
        active ? 'bg-gray-200' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-center">
        {icon}
      </div>
    </button>
  );
}

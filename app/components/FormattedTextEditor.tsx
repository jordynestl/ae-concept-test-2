
import React, { useRef, useState, useEffect } from 'react';
import { TextFormatToolbar } from './TextFormatToolbar';

interface FormattedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  showToolbar?: boolean;
  onPersonalize?: () => void;
}

export function FormattedTextEditor({
  value,
  onChange,
  placeholder = 'Enter text here...',
  className = '',
  showToolbar = true,
  onPersonalize
}: FormattedTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false
  });

  // Initialize the editor with the current value
  useEffect(() => {
    if (editorRef.current) {
      // Only update if the content is different
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || '';
      }
    }
  }, [value]);

  // Save content when editor changes
  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // Check what formatting is active at cursor position
  const updateActiveFormats = () => {
    setActiveFormats({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      strikethrough: document.queryCommandState('strikethrough'),
      underline: document.queryCommandState('underline')
    });
  };

  // Format commands
  const handleBold = () => document.execCommand('bold');
  const handleItalic = () => document.execCommand('italic');
  const handleStrikethrough = () => document.execCommand('strikethrough');
  const handleUnderline = () => document.execCommand('underline');
  const handleClear = () => document.execCommand('removeFormat');
  const handleUndo = () => document.execCommand('undo');
  const handleRedo = () => document.execCommand('redo');

  // Ensure editor gets focus after applying formatting
  const withFocus = (fn: () => void) => {
    return () => {
      editorRef.current?.focus();
      fn();
      updateActiveFormats();
      handleInput();
    };
  };

  return (
    <div className={className}>
      {showToolbar && (
        <TextFormatToolbar
          onBold={withFocus(handleBold)}
          onItalic={withFocus(handleItalic)}
          onStrikethrough={withFocus(handleStrikethrough)}
          onUnderline={withFocus(handleUnderline)}
          onPersonalize={onPersonalize || (() => {})}
          onClear={withFocus(handleClear)}
          onUndo={withFocus(handleUndo)}
          onRedo={withFocus(handleRedo)}
          activeFormats={activeFormats}
          className="mb-2"
        />
      )}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyUp={updateActiveFormats}
        onMouseUp={updateActiveFormats}
        onFocus={updateActiveFormats}
        data-placeholder={placeholder}
        className="p-3 border border-black rounded-sm min-h-[50px] focus:outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400"
        role="textbox"
      />
    </div>
  );
}

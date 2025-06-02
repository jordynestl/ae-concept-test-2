import React, { useState } from "react";

type FormHeaderProps = {
  title: string;
  onTitleChange: (title: string) => void;
};

export function FormHeader({ title, onTitleChange }: FormHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const handleTitleClick = () => {
    setIsEditing(true);
    setEditableTitle(title);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    if (editableTitle.trim()) {
      onTitleChange(editableTitle);
    } else {
      setEditableTitle(title);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTitleBlur();
    }
  };

  return (
    <div className="w-full">
      {isEditing ? (
        <input
          type="text"
          value={editableTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 text-2xl font-bold outline-none border-b-2 border-gray-300 focus:border-black"
          autoFocus
        />
      ) : (
        <h1 
          className="text-2xl font-bold cursor-pointer hover:bg-gray-100 px-4 py-2 -mx-4 rounded"
          onClick={handleTitleClick}
        >
          {title}
        </h1>
      )}
    </div>
  );
}
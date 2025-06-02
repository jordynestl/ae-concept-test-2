
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { QuestionType } from '../types/survey';

interface DraggableQuestionTypeProps {
  type: QuestionType;
  label: string;
  icon: React.ReactNode;
}

export function DraggableQuestionType({ type, label, icon }: DraggableQuestionTypeProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `question-type-${type}`,
    data: { type, isTemplate: true }
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex flex-col items-center gap-2 p-3 border rounded-md bg-white hover:bg-accent cursor-grab active:cursor-grabbing"
    >
      <div className="text-primary">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

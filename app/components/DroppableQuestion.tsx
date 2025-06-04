import React, { useState } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Question } from '../types/survey';
import { QuestionRenderer } from './QuestionRenderer';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Save, X } from 'lucide-react';

interface DroppableQuestionProps {
  question: Question;
  index: number;
  selectedQuestionId: string | null;
  onSelectQuestion: (id: string) => void;
  onQuestionChange: (question: Question) => void;
  onDeleteQuestion: (id: string) => void;
  onDuplicateQuestion: (id: string) => void;
  onOpenPersonalization?: () => void;
}

export function DroppableQuestion({
  question,
  index,
  selectedQuestionId,
  onSelectQuestion,
  onQuestionChange,
  onDeleteQuestion,
  onDuplicateQuestion,
  onOpenPersonalization
}: DroppableQuestionProps) {
  const [pendingChanges, setPendingChanges] = useState<Question | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const { setNodeRef: setDraggableRef, attributes, listeners, transform, isDragging } = useDraggable({
    id: `question-${question.id}`,
    data: { 
      type: 'question', 
      id: question.id, 
      index 
    }
  });
  
  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: `droppable-question-${question.id}`,
    data: {
      type: 'questionDropArea',
      questionId: question.id,
      index
    }
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.4 : 1,
    zIndex: isDragging ? 100 : 1,
    position: 'relative' as 'relative'
  };

  // Combine the refs
  const combinedRef = (node: HTMLElement | null) => {
    setDraggableRef(node);
    setDroppableRef(node);
  };

  const handleSelect = () => {
    if (!isEditing) {
      onSelectQuestion(question.id);
      setIsEditing(true);
      // Store the current question state when starting to edit
      setPendingChanges(question);
    }
  };

  const handleChange = (updatedQuestion: Question) => {
    // Store changes in local state but don't propagate up yet
    setPendingChanges(updatedQuestion);
  };
  
  const handleSaveField = () => {
    if (pendingChanges) {
      // Validate the question before saving
      if (!pendingChanges.text || pendingChanges.text.trim() === '') {
        toast.error('Please enter a question text before saving.');
        return;
      }

      // Propagate changes to parent component
      onQuestionChange(pendingChanges);
      // Clear pending changes and exit editing mode
      setPendingChanges(null);
      setIsEditing(false);
      toast.success('Field saved successfully!');
    }
  };

  const handleCancelEdit = () => {
    // Discard changes and exit editing mode
    setPendingChanges(null);
    setIsEditing(false);
    toast.info('Changes discarded');
  };

  const isSelected = selectedQuestionId === question.id;
  const hasChanges = pendingChanges && JSON.stringify(pendingChanges) !== JSON.stringify(question);

  return (
    <div 
      ref={combinedRef}
      style={style} 
      {...(isEditing ? {} : { ...attributes, ...listeners })}
      onClick={handleSelect}
      className={`mb-4 p-4 border-2 rounded-md transition-all cursor-pointer ${
        isSelected ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
      } ${
        isOver ? 'bg-accent/30' : ''
      } ${
        isEditing ? 'ring-2 ring-primary/20' : ''
      }`}
      role="button"
      aria-pressed={isSelected}
    >
      <div className="flex items-center mb-2 text-muted-foreground">
        <div className="mr-2 flex items-center cursor-move">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4V8M16 4V8M8 16V20M16 16V20M4 8H8M16 8H20M4 16H8M16 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-sm">Question {index + 1}</span>
        {isEditing && hasChanges && (
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            Unsaved changes
          </span>
        )}
      </div>
      
      <QuestionRenderer
        question={pendingChanges || question}
        onChange={handleChange}
        onDelete={() => onDeleteQuestion(question.id)}
        onDuplicate={() => onDuplicateQuestion(question.id)}
        onOpenPersonalization={onOpenPersonalization}
        isEditing={isEditing}
      />

      {isEditing && (
        <div className="flex justify-end items-center gap-3 mt-4 border-t pt-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleCancelEdit}
            className="border-gray-300 hover:bg-gray-50"
          >
            <X className="w-4 h-4 mr-1" />
            Cancel
          </Button>
          <Button 
            size="sm" 
            onClick={handleSaveField} 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={!hasChanges}
          >
            <Save className="w-4 h-4 mr-1" />
            Save Field
          </Button>
        </div>
      )}

      {isOver && (
        <div className="absolute inset-0 border-2 border-primary rounded-md pointer-events-none z-10"></div>
      )}
    </div>
  );
}
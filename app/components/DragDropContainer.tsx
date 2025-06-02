
import React, { useState, useCallback } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent, DragStartEvent, DragOverEvent } from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Question, QuestionType } from '../types/survey';
import { createQuestion } from '../utils/survey-utils';

interface DragDropContainerProps {
  children: React.ReactNode;
  questions: Question[];
  onQuestionsChange: (questions: Question[]) => void;
  onQuestionSelect: (id: string | null) => void;
}

export function DragDropContainer({ children, questions, onQuestionsChange, onQuestionSelect }: DragDropContainerProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    // Handle dropping a question type from the palette into the survey
    if (active.data.current?.isTemplate && over.data.current?.type === 'questionContainer') {
      const newQuestion = createQuestion(active.data.current.type as QuestionType);
      onQuestionsChange([...questions, newQuestion]);
      onQuestionSelect(newQuestion.id);
      setActiveId(null);
      return;
    }

    // Handle reordering questions
    if (
      active.id !== over.id &&
      active.data.current?.type === 'question' &&
      over.data.current?.type === 'questionDropArea'
    ) {
      const oldIndex = questions.findIndex(q => q.id === active.data.current?.id);
      const newIndex = questions.findIndex(q => q.id === over.data.current?.questionId);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newQuestions = arrayMove(questions, oldIndex, newIndex);
        onQuestionsChange(newQuestions);
      }
    }

    setActiveId(null);
  }, [questions, onQuestionsChange, onQuestionSelect]);
  
  const handleDragOver = useCallback((event: DragOverEvent) => {
    const { active, over } = event;
    
    if (!over) return;
    
    // Handle dropping at the end of the list
    if (
      active.data.current?.isTemplate && 
      over.data.current?.type === 'questionListBottom'
    ) {
      const newQuestion = createQuestion(active.data.current.type as QuestionType);
      onQuestionsChange([...questions, newQuestion]);
      onQuestionSelect(newQuestion.id);
    }
  }, [questions, onQuestionsChange, onQuestionSelect]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      {children}
    </DndContext>
  );
}

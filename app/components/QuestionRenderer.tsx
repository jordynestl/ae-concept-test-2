
import React from 'react';
import { Question } from '../types/survey';
import { MultipleChoiceQuestion } from './questions/MultipleChoiceQuestion';
import { MultipleResponseQuestion } from './questions/MultipleResponseQuestion';
import { RankingQuestion } from './questions/RankingQuestion';
import { DropdownQuestion } from './questions/DropdownQuestion';
import { ImageUploadQuestion } from './questions/ImageUploadQuestion';
import { SectionQuestion } from './questions/SectionQuestion';

interface QuestionRendererProps {
  question: Question;
  onChange: (question: Question) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onOpenPersonalization?: () => void;
  isEditing: boolean;
}

export function QuestionRenderer({
  question,
  onChange,
  onDelete,
  onDuplicate,
  onOpenPersonalization,
  isEditing
}: QuestionRendererProps) {
  // Render the appropriate question component based on the question type
  switch (question.type) {
    case 'multiple-choice':
      return (
        <MultipleChoiceQuestion
          question={question}
          onChange={onChange}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onOpenPersonalization={onOpenPersonalization}
          isEditing={isEditing}
        />
      );
      
    case 'multiple-response':
      return (
        <MultipleResponseQuestion
          question={question}
          onChange={onChange}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onOpenPersonalization={onOpenPersonalization}
          isEditing={isEditing}
        />
      );
      
    case 'ranking':
      return (
        <RankingQuestion
          question={question}
          onChange={onChange}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onOpenPersonalization={onOpenPersonalization}
          isEditing={isEditing}
        />
      );
      
    case 'dropdown':
      return (
        <DropdownQuestion
          question={question}
          onChange={onChange}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onOpenPersonalization={onOpenPersonalization}
          isEditing={isEditing}
        />
      );
      
    case 'image-upload':
      return (
        <ImageUploadQuestion
          question={question}
          onChange={onChange}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onOpenPersonalization={onOpenPersonalization}
          isEditing={isEditing}
        />
      );
      
    case 'section':
      return (
        <SectionQuestion
          question={question}
          onChange={onChange}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onOpenPersonalization={onOpenPersonalization}
          isEditing={isEditing}
        />
      );
      
    default:
      return (
        <div className="p-4 border rounded-md bg-destructive/10 text-destructive">
          <p>Unknown question type: {(question as any).type}</p>
        </div>
      );
  }
}

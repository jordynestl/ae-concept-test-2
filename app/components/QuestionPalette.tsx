
import React from 'react';
import { 
  CircleIcon, 
  CheckSquare, 
  ArrowUpDown, 
  Upload,
  ChevronDown,
  SeparatorHorizontal
} from 'lucide-react';
import { DraggableQuestionType } from './DraggableQuestionType';
import { QuestionType } from '../types/survey';

interface QuestionPaletteProps {
  className?: string;
}

export function QuestionPalette({ className = '' }: QuestionPaletteProps) {
  const questionTypes: {
    type: QuestionType;
    label: string;
    icon: React.ReactNode;
    description: string;
  }[] = [
    {
      type: 'multiple-choice',
      label: 'Multiple Choice',
      icon: <CircleIcon size={24} />,
      description: 'Allow selecting one option from a list'
    },
    {
      type: 'multiple-response',
      label: 'Multiple Response',
      icon: <CheckSquare size={24} />,
      description: 'Allow selecting multiple options from a list'
    },
    {
      type: 'ranking',
      label: 'Ranking',
      icon: <ArrowUpDown size={24} />,
      description: 'Allow ranking items in order of preference'
    },
    {
      type: 'dropdown',
      label: 'Dropdown',
      icon: <ChevronDown size={24} />,
      description: 'Display options in a dropdown menu'
    },
    {
      type: 'image-upload',
      label: 'Image Upload',
      icon: <Upload size={24} />,
      description: 'Allow uploading image files'
    },
    {
      type: 'section',
      label: 'Section',
      icon: <SeparatorHorizontal size={24} />,
      description: 'Add a section divider with optional title'
    }
  ];

  return (
    <div className={`bg-card rounded-lg border p-4 ${className}`}>
      <div className="mb-4">
        <h3>Question Types</h3>
        <p className="text-sm text-muted-foreground">Drag and drop to add questions</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {questionTypes.map((item) => (
          <DraggableQuestionType
            key={item.type}
            type={item.type}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="mt-4 p-3 bg-muted/50 rounded-md text-sm">
        <h4 className="text-sm font-medium mb-1">How to use</h4>
        <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
          <li>Drag a question type to add it to your survey</li>
          <li>Drag questions to reorder them</li>
          <li>Click a question to edit it</li>
        </ul>
      </div>
    </div>
  );
}

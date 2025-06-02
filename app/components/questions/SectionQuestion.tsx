
import React from 'react';
import { SectionQuestion as SectionQuestionType } from '../../types/survey';
import { FormattedTextEditor } from '../FormattedTextEditor';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { PlusSquare, Trash2, FileText } from 'lucide-react';

interface SectionQuestionProps {
  question: SectionQuestionType;
  onChange: (question: SectionQuestionType) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onOpenPersonalization?: () => void;
  isEditing: boolean;
}

export function SectionQuestion({
  question,
  onChange,
  onDelete,
  onDuplicate,
  onOpenPersonalization,
  isEditing
}: SectionQuestionProps) {
  const handleTitleChange = (text: string) => {
    onChange({ ...question, text });
  };

  const handleDescriptionChange = (description: string) => {
    onChange({ ...question, description });
  };

  return (
    <div className="w-full">
      {isEditing ? (
        <>
          <div className="flex items-center gap-6 w-full mb-4">
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-sm border border-black">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
                  <FileText className="size-5 shrink-0" />
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-black">
                    Section
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <FormattedTextEditor
              value={question.text}
              onChange={handleTitleChange}
              placeholder="Section title"
              onPersonalize={onOpenPersonalization}
            />
          </div>
          
          <div className="mb-4">
            <FormattedTextEditor
              value={question.description || ''}
              onChange={handleDescriptionChange}
              placeholder="Section description (optional)"
              onPersonalize={onOpenPersonalization}
            />
          </div>

          <div className="w-full mt-4 flex justify-between items-center">
            <div className="w-full border-t border-gray-300"></div>
            <Button
              variant="secondary"
              className="mx-2 bg-[#ccc]/80 text-black hover:bg-[#ccc] rounded-sm whitespace-nowrap"
            >
              Add display condition
            </Button>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-6">
              <Button 
                variant="ghost" 
                className="flex items-center gap-1"
                onClick={onDuplicate}
              >
                <PlusSquare size={24} />
                <span>Duplicate field</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-destructive hover:text-destructive"
                onClick={onDelete}
              >
                <Trash2 size={24} />
                <span>Delete field</span>
              </Button>
            </div>
            
            <Button className="bg-black text-white hover:bg-black/80">
              Save field
            </Button>
          </div>
        </>
      ) : (
        <div className="mb-6">
          <div className="py-2">
            <h3 className="text-lg" dangerouslySetInnerHTML={{ __html: question.text }} />
            {question.description && (
              <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: question.description }} />
            )}
          </div>
          <Separator className="mt-4 h-0.5 bg-gray-300" />
        </div>
      )}
    </div>
  );
}

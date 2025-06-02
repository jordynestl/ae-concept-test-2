import React, { useState } from 'react';
import { MultipleResponseQuestion as MultipleResponseQuestionType } from '../../types/survey';
import { FormattedTextEditor } from '../FormattedTextEditor';
import { Button } from '../ui/button';
import { Check, Square, LayoutGrid, PlusSquare, Trash2 } from 'lucide-react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { InputWithSpaces } from '../InputWithSpaces';

interface MultipleResponseQuestionProps {
  question: MultipleResponseQuestionType;
  onChange: (question: MultipleResponseQuestionType) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onOpenPersonalization?: () => void;
  isEditing: boolean;
}

export function MultipleResponseQuestion({
  question,
  onChange,
  onDelete,
  onDuplicate,
  onOpenPersonalization,
  isEditing
}: MultipleResponseQuestionProps) {
  const [activeOptionId, setActiveOptionId] = useState<string | null>(null);

  const handleQuestionTextChange = (text: string) => {
    onChange({ ...question, text });
  };

  const handleRequiredChange = (required: boolean) => {
    onChange({ ...question, required });
  };

  const handleOptionTextChange = (id: string, text: string) => {
    onChange({
      ...question,
      options: question.options.map(option =>
        option.id === id ? { ...option, text } : option
      )
    });
  };

  const handleAddOption = () => {
    onChange({
      ...question,
      options: [
        ...question.options,
        { id: crypto.randomUUID(), text: '' }
      ]
    });
  };

  const handleAddOtherOption = () => {
    onChange({ ...question, allowOther: true });
  };

  const handleDeleteOption = (id: string) => {
    onChange({
      ...question,
      options: question.options.filter(option => option.id !== id)
    });
  };

  // Component for displaying a single option
  const OptionRow = ({ id, text, isActive }: { id: string; text: string; isActive: boolean }) => (
    <div className="flex items-center w-full mb-2">
      <div className="basis-0 grow bg-white min-h-px min-w-px relative rounded-sm border border-black">
        <div className="relative size-full">
          <div className="box-border flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
            <div className="flex gap-2 items-start">
              <div className="flex items-center justify-center size-5 border border-black rounded-sm">
                <Check className="size-4" />
              </div>
              <div className="grow font-normal">
                {isEditing ? (
                  <InputWithSpaces 
                    value={text} 
                    onChange={(newText) => handleOptionTextChange(id, newText)}
                    placeholder="Option text"
                  />
                ) : (
                  text || 'Option text'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isEditing && (
        <>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-4"
            onClick={() => setActiveOptionId(id)}
          >
            <LayoutGrid size={24} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleAddOption()}
          >
            <PlusSquare size={24} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleDeleteOption(id)}
            disabled={question.options.length <= 1}
          >
            <Trash2 size={24} />
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {isEditing ? (
        <>
          <div className="flex items-center gap-6 w-full mb-4">
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-sm border border-black">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
                  <Square className="size-5 shrink-0" />
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-black">
                    Multiple response
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Switch 
                id="required" 
                checked={question.required}
                onCheckedChange={handleRequiredChange}
              />
              <Label htmlFor="required">Required</Label>
            </div>
          </div>

          <div className="mb-4">
            <FormattedTextEditor
              value={question.text}
              onChange={handleQuestionTextChange}
              placeholder="Question text"
              onPersonalize={onOpenPersonalization}
            />
          </div>

          <div className="pl-6 space-y-2">
            {question.options.map(option => (
              <OptionRow 
                key={option.id}
                id={option.id}
                text={option.text}
                isActive={option.id === activeOptionId}
              />
            ))}
          </div>

          <div className="flex gap-2 mt-4 pl-6">
            <Button
              variant="secondary"
              onClick={handleAddOption}
              className="bg-gray-200 hover:bg-gray-300 text-black rounded-sm"
            >
              Add option
            </Button>
            
            {!question.allowOther && (
              <Button
                variant="secondary"
                onClick={handleAddOtherOption}
                className="bg-gray-200 hover:bg-gray-300 text-black rounded-sm"
              >
                Add &apos;Others&apos; option
              </Button>
            )}
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
          </div>
        </>
      ) : (
        <div className="mb-4">
          <div className="flex items-center">
            <span className="w-6 mr-2">1.</span>
            <div className="bg-white border border-black rounded-sm p-3 w-full">
              <div dangerouslySetInnerHTML={{ __html: question.text }} />
            </div>
          </div>
          
          <div className="pl-8 mt-4 space-y-2">
            {question.options.map(option => (
              <div key={option.id} className="flex items-center gap-2">
                <Square className="size-5" />
                <span>{option.text}</span>
              </div>
            ))}
            
            {question.allowOther && (
              <div className="flex items-center gap-2">
                <Square className="size-5" />
                <span>Other</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
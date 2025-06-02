
import React from 'react';
import { ImageUploadQuestion as ImageUploadQuestionType } from '../../types/survey';
import { FormattedTextEditor } from '../FormattedTextEditor';
import { Button } from '../ui/button';
import { Image, PlusSquare, Trash2 } from 'lucide-react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface ImageUploadQuestionProps {
  question: ImageUploadQuestionType;
  onChange: (question: ImageUploadQuestionType) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onOpenPersonalization?: () => void;
  isEditing: boolean;
}

export function ImageUploadQuestion({
  question,
  onChange,
  onDelete,
  onDuplicate,
  onOpenPersonalization,
  isEditing
}: ImageUploadQuestionProps) {
  const handleQuestionTextChange = (text: string) => {
    onChange({ ...question, text });
  };

  const handleRequiredChange = (required: boolean) => {
    onChange({ ...question, required });
  };

  const handleAllowMultipleChange = (allowMultiple: boolean) => {
    onChange({ ...question, allowMultiple });
  };

  const handleMaxSizeChange = (maxSize: number) => {
    onChange({ ...question, maxSize });
  };

  return (
    <div className="w-full">
      {isEditing ? (
        <>
          <div className="flex items-center gap-6 w-full mb-4">
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-sm border border-black">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
                  <Image className="size-5 shrink-0" />
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-black">
                    Image Upload
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

          <div className="pl-6 space-y-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="maxSize" className="min-w-[150px]">Maximum file size (MB):</Label>
              <Input 
                id="maxSize" 
                type="number" 
                value={question.maxSize || 5} 
                onChange={(e) => handleMaxSizeChange(Number(e.target.value))}
                min={1}
                max={50}
                className="w-[100px]"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Label htmlFor="allowMultiple" className="min-w-[150px]">Allow multiple files:</Label>
              <Switch 
                id="allowMultiple"
                checked={question.allowMultiple}
                onCheckedChange={handleAllowMultipleChange}
              />
            </div>
          </div>

          <div className="w-full mt-6 flex justify-between items-center">
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
        <div className="mb-4">
          <div className="flex items-center">
            <span className="w-6 mr-2">1.</span>
            <div className="bg-white border border-black rounded-sm p-3 w-full">
              <div dangerouslySetInnerHTML={{ __html: question.text }} />
            </div>
          </div>
          
          <div className="pl-8 mt-4">
            <div className="border border-dashed border-black rounded-sm p-6 flex flex-col items-center justify-center gap-2">
              <Image size={40} className="text-gray-500" aria-hidden="true" />
              <p>Drop image{question.allowMultiple ? 's' : ''} here or click to upload</p>
              <p className="text-sm text-gray-500">Maximum file size: {question.maxSize || 5}MB</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

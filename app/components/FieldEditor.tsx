import React, { useState } from "react";
import { X, Plus, GripVertical, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { FormFieldType, Option, FieldType } from "./FormField";

type FieldEditorProps = {
  field: FormFieldType;
  onSave: (field: FormFieldType) => void;
  onCancel: () => void;
};

export function FieldEditor({ field, onSave, onCancel }: FieldEditorProps) {
  const [editedField, setEditedField] = useState<FormFieldType>({ ...field });
  const [newOption, setNewOption] = useState("");

  const handleTypeChange = (type: FieldType) => {
    setEditedField((prev) => ({ ...prev, type }));
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedField((prev) => ({ ...prev, question: e.target.value }));
  };

  const handleToggleRequired = () => {
    setEditedField((prev) => ({ ...prev, required: !prev.required }));
  };

  const handleOptionChange = (id: string, value: string) => {
    setEditedField((prev) => ({
      ...prev,
      options: prev.options?.map((opt) =>
        opt.id === id ? { ...opt, value } : opt
      ),
    }));
  };

  const handleAddOption = () => {
    if (!newOption.trim()) return;
    
    const newOpt = { id: uuidv4(), value: newOption };
    setEditedField((prev) => ({
      ...prev,
      options: [...(prev.options || []), newOpt],
    }));
    setNewOption("");
  };

  const handleAddOtherOption = () => {
    const newOpt = { id: uuidv4(), value: "Other" };
    setEditedField((prev) => ({
      ...prev,
      options: [...(prev.options || []), newOpt],
    }));
  };

  const handleDeleteOption = (id: string) => {
    setEditedField((prev) => ({
      ...prev,
      options: prev.options?.filter((opt) => opt.id !== id),
    }));
  };

  const handleSave = () => {
    onSave(editedField);
  };

  const renderOptionType = () => {
    switch (editedField.type) {
      case "multiple_choice":
        return "radio";
      case "checkbox":
        return "checkbox";
      default:
        return null;
    }
  };

  const needsOptions = ["multiple_choice", "dropdown", "checkbox"].includes(editedField.type);

  return (
    <div className="bg-[#f8f8f8] p-4 mb-4 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-6 w-full items-center">
          <div className="flex flex-row h-full gap-2 items-start w-[584px]">
            <div className="bg-white border border-black rounded-sm grow">
              <div className="flex flex-row items-center px-4 py-2 w-full">
                <div className="flex items-center gap-2 grow">
                  <div className="size-5">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <g id="radio_button_checked">
                        <g id="Vector">
                          <path d="M10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 10C14.1667 7.69881 12.3012 5.83333 10 5.83333C7.69881 5.83333 5.83333 7.69881 5.83333 10C5.83333 12.3012 7.69881 14.1667 10 14.1667Z" fill="black" />
                          <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z" fill="black" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span>Multiple choice</span>
                </div>
                <div className="size-5">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <g id="expand_more">
                      <path d="M13.825 6.9125L10 10.7292L6.175 6.9125L5 8.0875L10 13.0875L15 8.0875L13.825 6.9125Z" fill="black" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-8 rounded bg-[#A9ABB4] relative cursor-pointer" onClick={handleToggleRequired}>
                <div className={`h-8 w-8 bg-white rounded-full absolute top-[-50%] transition-all ${editedField.required ? 'left-[16px]' : 'left-[-6px]'}`}></div>
              </div>
              <span>Required</span>
            </div>
          </div>
        </div>
  
        <div className="h-0 w-full border-t border-black"></div>
  
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
              <div>
                <div className="border border-black rounded-sm inline-flex">
                  <div className="size-4 p-1">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 3.33333C4 2.96514 4.29848 2.66667 4.66667 2.66667H8.66667C9.46232 2.66667 10.2254 2.98274 10.788 3.54535C11.3506 4.10796 11.6667 4.87102 11.6667 5.66667C11.6667 6.43878 11.369 7.1802 10.8373 7.73753C11.0609 7.8671 11.2687 8.02609 11.4547 8.21201C12.0173 8.77462 12.3333 9.53768 12.3333 10.3333C12.3333 11.129 12.0173 11.892 11.4547 12.4547C10.892 13.0173 10.129 13.3333 9.33333 13.3333H4.66667C4.29848 13.3333 4 13.0349 4 12.6667V3.33333ZM8.66667 7.33333C9.10869 7.33333 9.53262 7.15774 9.84518 6.84518C10.1577 6.53262 10.3333 6.10869 10.3333 5.66667C10.3333 5.22464 10.1577 4.80072 9.84518 4.48816C9.53262 4.17559 9.10869 4 8.66667 4H5.33333V7.33333H8.66667ZM5.33333 8.66667H9.33333C9.77536 8.66667 10.1993 8.84226 10.5118 9.15482C10.8244 9.46738 11 9.8913 11 10.3333C11 10.7754 10.8244 11.1993 10.5118 11.5118C10.1993 11.8244 9.77536 12 9.33333 12H5.33333V8.66667Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                <div className="border border-black rounded-sm inline-flex">
                  <div className="size-4 p-1">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.31794 2.66667H7.33333C6.96514 2.66667 6.66667 2.96514 6.66667 3.33333C6.66667 3.70152 6.96514 4 7.33333 4H8.44951L6.1638 12H4.66667C4.29848 12 4 12.2985 4 12.6667C4 13.0349 4.29848 13.3333 4.66667 13.3333H6.65193C6.662 13.3336 6.67205 13.3336 6.68206 13.3333H8.66667C9.03486 13.3333 9.33333 13.0349 9.33333 12.6667C9.33333 12.2985 9.03486 12 8.66667 12H7.55049L9.8362 4H11.3333C11.7015 4 12 3.70152 12 3.33333C12 2.96514 11.7015 2.66667 11.3333 2.66667H9.34807C9.338 2.66644 9.32795 2.66644 9.31794 2.66667Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                <div className="border border-black rounded-sm inline-flex">
                  <div className="size-4 p-1">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 3.33333C4 2.96514 4.29848 2.66667 4.66667 2.66667H8.66667C9.46232 2.66667 10.2254 2.98274 10.788 3.54535C11.3506 4.10796 11.6667 4.87102 11.6667 5.66667C11.6667 6.43878 11.369 7.1802 10.8373 7.73753C11.0609 7.8671 11.2687 8.02609 11.4547 8.21201C12.0173 8.77462 12.3333 9.53768 12.3333 10.3333C12.3333 11.129 12.0173 11.892 11.4547 12.4547C10.892 13.0173 10.129 13.3333 9.33333 13.3333H4.66667C4.29848 13.3333 4 13.0349 4 12.6667V3.33333ZM8.66667 7.33333C9.10869 7.33333 9.53262 7.15774 9.84518 6.84518C10.1577 6.53262 10.3333 6.10869 10.3333 5.66667C10.3333 5.22464 10.1577 4.80072 9.84518 4.48816C9.53262 4.17559 9.10869 4 8.66667 4H5.33333V7.33333H8.66667ZM5.33333 8.66667H9.33333C9.77536 8.66667 10.1993 8.84226 10.5118 9.15482C10.8244 9.46738 11 9.8913 11 10.3333C11 10.7754 10.8244 11.1993 10.5118 11.5118C10.1993 11.8244 9.77536 12 9.33333 12H5.33333V8.66667Z" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-6 mr-2">1.</div>
              <div className="grow bg-white border border-black rounded-sm">
                <input
                  type="text"
                  className="w-full px-4 py-3 outline-none"
                  placeholder="Type your question here"
                  value={editedField.question}
                  onChange={handleQuestionChange}
                />
              </div>
            </div>
  
            {needsOptions && (
              <div className="pl-6 space-y-2">
                {editedField.options?.map((option, i) => (
                  <div key={option.id} className="flex flex-row items-center gap-4 w-full">
                    <div className="basis-0 grow min-h-px min-w-px bg-white border border-black rounded-sm">
                      <div className="flex px-4 py-2 gap-2 items-start">
                        <div className="flex gap-2 items-center">
                          {renderOptionType() === "radio" && (
                            <div className="size-5">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <g id="radio_button_checked">
                                  <g id="Vector">
                                    <path d="M10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 10C14.1667 7.69881 12.3012 5.83333 10 5.83333C7.69881 5.83333 5.83333 7.69881 5.83333 10C5.83333 12.3012 7.69881 14.1667 10 14.1667Z" fill="black" />
                                    <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z" fill="black" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          )}
                          {renderOptionType() === "checkbox" && (
                            <input type="checkbox" className="size-4" disabled />
                          )}
                          <input
                            type="text"
                            className="outline-none grow"
                            value={option.value}
                            onChange={(e) => handleOptionChange(option.id, e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <GripVertical size={24} className="cursor-move" />
                    <Plus size={24} className="cursor-pointer" onClick={handleAddOption} />
                    <Trash2 size={24} className="cursor-pointer" onClick={() => handleDeleteOption(option.id)} />
                  </div>
                ))}
                
                <div className="flex flex-row gap-2">
                  <div 
                    className="bg-[#d5d5d5] px-2 py-1 rounded-sm cursor-pointer hover:bg-[#c5c5c5]"
                    onClick={handleAddOption}
                  >
                    Add option
                  </div>
                  <div 
                    className="bg-[#d5d5d5] px-2 py-1 rounded-sm cursor-pointer hover:bg-[#c5c5c5]"
                    onClick={handleAddOtherOption}
                  >
                    Add 'Others' option
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
  
        <div className="flex flex-row w-full items-center gap-2">
          <div className="h-[1px] grow bg-[#CCCCCC] opacity-80"></div>
          <div className="bg-[rgba(204,204,204,0.8)] px-2 py-1 rounded-sm">
            Add display condition
          </div>
          <div className="h-[1px] grow bg-[#CCCCCC] opacity-80"></div>
        </div>
  
        <div className="flex flex-row justify-end gap-[26px] items-center">
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="size-6">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <g id="library_add">
                  <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM13 14H15V11H18V9H15V6H13V9H10V11H13V14Z" fill="black" />
                </g>
              </svg>
            </div>
            <span>Duplicate field</span>
          </div>
  
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="size-6">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <g id="delete">
                  <path d="M16.4444 8.66667V19.7778H7.55556V8.66667H16.4444ZM14.7778 2H9.22222L8.11111 3.11111H4.22222V5.33333H19.7778V3.11111H15.8889L14.7778 2ZM18.6667 6.44444H5.33333V19.7778C5.33333 21 6.33333 22 7.55556 22H16.4444C17.6667 22 18.6667 21 18.6667 19.7778V6.44444Z" fill="black" />
                </g>
              </svg>
            </div>
            <span>Delete field</span>
          </div>
  
          <div 
            className="bg-black text-white px-2 py-1 rounded-sm cursor-pointer hover:bg-[#333]"
            onClick={handleSave}
          >
            Save field
          </div>
        </div>
      </div>
    </div>
  );
}
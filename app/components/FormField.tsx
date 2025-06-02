import React from "react";
import { X, GripVertical, Copy, Trash2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type FieldType = 
  | "multiple_choice" 
  | "dropdown" 
  | "free_text" 
  | "checkbox" 
  | "file_upload"
  | "rating"
  | "date";

export type Option = {
  id: string;
  value: string;
};

export type FormFieldType = {
  id: string;
  type: FieldType;
  question: string;
  required: boolean;
  options?: Option[];
  description?: string;
};

type FormFieldProps = {
  field: FormFieldType;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onReorder?: (dragIndex: number, hoverIndex: number) => void;
  index: number;
};

export function FormField({
  field,
  isEditing,
  onEdit,
  onDelete,
  onDuplicate,
  index,
}: FormFieldProps) {
  const handleEdit = () => {
    onEdit(field.id);
  };

  const handleDelete = () => {
    onDelete(field.id);
  };

  const handleDuplicate = () => {
    onDuplicate(field.id);
  };

  const renderOptions = () => {
    switch (field.type) {
      case "multiple_choice":
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <div key={option.id} className="flex items-center gap-2">
                <div className="size-5">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <g id="radio_button_unchecked">
                      <path
                        d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
                <span>{option.value}</span>
              </div>
            ))}
          </div>
        );
      case "free_text":
        return (
          <div className="w-full">
            <div className="bg-white border border-black rounded-sm p-2 w-full">
              <div className="text-[rgba(0,0,0,0.41)]">Start typing...</div>
            </div>
            <div className="text-right text-sm mt-1">0/100</div>
          </div>
        );
      case "dropdown":
        return (
          <div className="bg-white border border-black rounded-sm p-2 w-1/2">
            <div className="flex justify-between items-center">
              <span>Select an option</span>
              <span>▼</span>
            </div>
          </div>
        );
      case "checkbox":
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <div key={option.id} className="flex items-center gap-2">
                <input type="checkbox" className="size-4" />
                <span>{option.value}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f8f8f8] p-4 mb-4 w-full">
      <div className="flex flex-row gap-4 items-start">
        <div className="grow">
          <div className="mb-1 text-sm">
            {field.type === "multiple_choice"
              ? "Multiple Choice"
              : field.type === "free_text"
              ? "Free text"
              : field.type === "dropdown"
              ? "Dropdown"
              : field.type === "checkbox"
              ? "Checkbox"
              : field.type === "file_upload"
              ? "File Upload"
              : field.type === "rating"
              ? "Rating"
              : "Date"}
          </div>
          <div className="flex">
            <div className="mr-2">
              <div>{index + 1}.</div>
            </div>
            <div className="grow">
              <p className="mb-2">{field.question}</p>
              {renderOptions()}
            </div>
          </div>
        </div>
        <div 
          className="bg-[#263238] text-white rounded-sm px-2 py-1 cursor-pointer hover:bg-[#1e272c]"
          onClick={handleEdit}
        >
          Edit
        </div>
        <div className="cursor-pointer" onClick={handleDuplicate}>
          <Copy size={24} />
        </div>
        <div className="cursor-pointer">
          <GripVertical size={24} />
        </div>
        <div className="cursor-pointer" onClick={handleDelete}>
          <Trash2 size={24} />
        </div>
      </div>
    </div>
  );
}
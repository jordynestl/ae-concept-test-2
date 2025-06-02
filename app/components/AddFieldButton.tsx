import React, { useState } from 'react';
import { FieldType } from './FormField';

type AddFieldButtonProps = {
  onAddField: (type: FieldType) => void;
};

export function AddFieldButton({ onAddField }: AddFieldButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddField = (type: FieldType) => {
    onAddField(type);
    setIsOpen(false);
  };

  return (
    <div className="relative flex justify-center mt-6 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#263238] text-white px-4 py-2 rounded-sm hover:bg-[#1e272c]"
      >
        Add field
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 z-10 bg-white border border-gray-300 rounded shadow-lg">
          <div className="grid grid-cols-2 gap-1 p-2 min-w-[300px]">
            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("multiple_choice")}
            >
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
              Multiple choice
            </button>

            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("checkbox")}
            >
              <div className="size-5">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <rect x="3" y="3" width="14" height="14" rx="2" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              Checkbox
            </button>

            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("dropdown")}
            >
              <div className="size-5">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M4 6H16V8H4V6ZM4 9H16V11H4V9ZM4 12H16V14H4V12Z" fill="black" />
                </svg>
              </div>
              Dropdown
            </button>

            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("free_text")}
            >
              <div className="size-5">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M16 4H4V16H10V14H6V6H14V10H16V4Z" fill="black" />
                  <path d="M12 16H14V12H18V10H14V6H12V10H8V12H12V16Z" fill="black" />
                </svg>
              </div>
              Free text
            </button>

            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("file_upload")}
            >
              <div className="size-5">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M16 10H14V16H6V10H4V16C4 17.1 4.9 18 6 18H14C15.1 18 16 17.1 16 16V10Z" fill="black" />
                  <path d="M10 12L14 8L12.59 6.59L11 8.17V2H9V8.17L7.41 6.59L6 8L10 12Z" fill="black" />
                </svg>
              </div>
              File upload
            </button>

            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("rating")}
            >
              <div className="size-5">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="black" />
                </svg>
              </div>
              Rating
            </button>

            <button
              className="flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
              onClick={() => handleAddField("date")}
            >
              <div className="size-5">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M16 2H15V0H13V2H7V0H5V2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H4V8H16V18ZM16 6H4V4H16V6Z" fill="black" />
                </svg>
              </div>
              Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
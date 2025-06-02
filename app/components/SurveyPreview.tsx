
import React from 'react';
import { Question } from '../types/survey';

interface SurveyPreviewProps {
  title: string;
  description: string;
  questions: Question[];
  isPublished: boolean;
}

export function SurveyPreview({ title, description, questions, isPublished }: SurveyPreviewProps) {
  return (
    <div className="bg-white border rounded-lg p-6 max-w-full">
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-2">{title}</h2>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="space-y-10">
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={question.id} className="space-y-3">
              <div className="flex items-start">
                <span className="mr-2 text-muted-foreground">{index + 1}.</span>
                <div>
                  <div 
                    className={question.required ? "font-medium after:content-['*'] after:ml-0.5 after:text-destructive" : "font-medium"}
                    dangerouslySetInnerHTML={{ __html: question.text || 'Question text' }}
                  />

                  <div className="mt-3 pl-1">
                    {question.type === 'multiple-choice' && (
                      <div className="space-y-2">
                        {question.options?.map(option => (
                          <div key={option.id} className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                            <span>{option.text || 'Option text'}</span>
                          </div>
                        ))}
                        {question.allowOther && (
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                            <span>Other</span>
                            <input type="text" className="ml-2 border-b border-border bg-transparent outline-none" placeholder="Please specify" />
                          </div>
                        )}
                      </div>
                    )}
                    
                    {question.type === 'multiple-response' && (
                      <div className="space-y-2">
                        {question.options?.map(option => (
                          <div key={option.id} className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded border border-muted-foreground" />
                            <span>{option.text || 'Option text'}</span>
                          </div>
                        ))}
                        {question.allowOther && (
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded border border-muted-foreground" />
                            <span>Other</span>
                            <input type="text" className="ml-2 border-b border-border bg-transparent outline-none" placeholder="Please specify" />
                          </div>
                        )}
                      </div>
                    )}
                    
                    {question.type === 'ranking' && (
                      <div className="space-y-2">
                        {question.options?.map((option, idx) => (
                          <div key={option.id} className="flex items-center gap-2 border p-2 rounded bg-background cursor-move">
                            <span className="h-5 w-5 flex items-center justify-center bg-muted rounded-full text-sm">{idx + 1}</span>
                            <span>{option.text || 'Option text'}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {question.type === 'dropdown' && (
                      <div className="w-full max-w-xs">
                        <select className="w-full p-2 border rounded-md bg-background">
                          <option value="">Select an option</option>
                          {question.options?.map(option => (
                            <option key={option.id} value={option.id}>{option.text || 'Option text'}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    
                    {question.type === 'image-upload' && (
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground mb-2">
                            <path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {question.type === 'section' && (
                      <div className="border-t border-border my-2" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-6 border border-dashed rounded-md">
            <p className="text-muted-foreground">
              Your survey is empty. Add questions from the left panel.
            </p>
          </div>
        )}
      </div>

      {questions.length > 0 && (
        <div className="mt-8">
          <button 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            type="button"
          >
            Submit
          </button>
        </div>
      )}

      {!isPublished && (
        <div className="mt-8 bg-muted/30 p-4 rounded-md border border-muted">
          <p className="text-sm text-muted-foreground">
            <strong>Preview Mode</strong> - This is a preview of how your survey will appear to respondents.
            Publish your survey to start collecting responses.
          </p>
        </div>
      )}
    </div>
  );
}

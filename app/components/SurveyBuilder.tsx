
import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Question, QuestionType } from '../types/survey';
import { createEmptySurvey, createQuestion, duplicateQuestion, getDefaultPersonalizationTokens } from '../utils/survey-utils';
import { PersonalizationPanel } from './PersonalizationPanel';
import { QuestionPalette } from './QuestionPalette';
import { SurveyPreview } from './SurveyPreview';
import { DroppableQuestion } from './DroppableQuestion';
import { DragDropContainer } from './DragDropContainer';
import { PlusSquare, ListTodo, Users, Share2, Layout, Eye, ArrowUpToLine, Save, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useDroppable } from '@dnd-kit/core';

export const SurveyBuilder = () => {
  const [survey, setSurvey] = useState(createEmptySurvey());
  const [activeTab, setActiveTab] = useState('add-fields');
  const [personalizationOpen, setPersonalizationOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [personalizationFields, setPersonalizationFields] = useState(getDefaultPersonalizationTokens());
  const [surveyTitle, setSurveyTitle] = useState('Untitled Survey');
  const [surveyDescription, setSurveyDescription] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const activeEditorRef = useRef<HTMLElement | null>(null);
  
  // Find the currently selected question
  const selectedQuestion = survey.questions.find(q => q.id === selectedQuestionId);
  
  // Droppable container for the entire question list
  const { setNodeRef: setQuestionContainerRef } = useDroppable({
    id: 'question-container',
    data: {
      type: 'questionContainer'
    }
  });

  // Droppable area for bottom of question list
  const { setNodeRef: setListBottomRef } = useDroppable({
    id: 'question-list-bottom',
    data: {
      type: 'questionListBottom'
    }
  });
  
  // Track changes for autosave
  useEffect(() => {
    if (isDirty) {
      const timer = setTimeout(() => {
        handleSave();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [survey, isDirty]);
  
  const handleQuestionChange = (updatedQuestion: Question) => {
    setSurvey({
      ...survey,
      questions: survey.questions.map(q => 
        q.id === updatedQuestion.id ? updatedQuestion : q
      )
    });
    setIsDirty(true);
  };

  const handleDeleteQuestion = (id: string) => {
    setSurvey({
      ...survey,
      questions: survey.questions.filter(q => q.id !== id)
    });
    setSelectedQuestionId(null);
    setIsDirty(true);
  };

  const handleDuplicateQuestion = (id: string) => {
    const questionToDuplicate = survey.questions.find(q => q.id === id);
    if (questionToDuplicate) {
      const duplicatedQuestion = duplicateQuestion(questionToDuplicate);
      setSurvey({
        ...survey,
        questions: [...survey.questions, duplicatedQuestion]
      });
      setSelectedQuestionId(duplicatedQuestion.id);
      setIsDirty(true);
    }
  };

  const handleAddQuestion = (type: QuestionType) => {
    const newQuestion = createQuestion(type);
    setSurvey({
      ...survey,
      questions: [...survey.questions, newQuestion]
    });
    setSelectedQuestionId(newQuestion.id);
    setIsDirty(true);
  };
  
  const handleUpdateQuestions = (questions: Question[]) => {
    setSurvey({
      ...survey,
      questions
    });
    setIsDirty(true);
  };

  const handleAddToken = (token: string) => {
    // Add personalization token to current editor
    if (activeEditorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const textNode = document.createTextNode(token);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
        
        // Trigger input event to update state
        const inputEvent = new Event('input', { bubbles: true });
        activeEditorRef.current.dispatchEvent(inputEvent);
      }
    }
    setPersonalizationOpen(false);
  };
  
  const handleSave = () => {
    // In a real app, this would save the survey to a database
    toast.success('Survey saved successfully!');
    setIsDirty(false);
  };
  
  const handlePublish = () => {
    // In a real application, this would send the form to a server
    toast.success('Survey published successfully!');
    setSurvey({
      ...survey,
      isPublished: true
    });
    setIsDirty(false);
  };
  
  const handlePreview = () => {
    // Toggle preview
    setShowPreview(prev => !prev);
    toast.info(showPreview ? 'Preview hidden' : 'Preview shown');
  };

  const handleClearSurvey = () => {
    const newSurvey = createEmptySurvey();
    // Empty survey already has no questions (modified in survey-utils)
    setSurvey(newSurvey);
    setSelectedQuestionId(null);
    setIsDirty(true);
    toast.success('Survey cleared successfully!');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Top Navigation */}
      <div className="border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center border-b">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="audience" className="data-[state=active]:border-b-2 data-[state=active]:border-black">
                <Users className="mr-2 h-4 w-4" />
                Select audience
              </TabsTrigger>
              <TabsTrigger value="add-fields" className="data-[state=active]:border-b-2 data-[state=active]:border-black">
                <Layout className="mr-2 h-4 w-4" />
                Add fields
              </TabsTrigger>
              <TabsTrigger value="view-responses" className="data-[state=active]:border-b-2 data-[state=active]:border-black">
                <ListTodo className="mr-2 h-4 w-4" />
                View responses
              </TabsTrigger>
              <TabsTrigger value="collaborators" className="data-[state=active]:border-b-2 data-[state=active]:border-black">
                <Share2 className="mr-2 h-4 w-4" />
                Add collaborators
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1 overflow-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className={`py-1 px-2 rounded-sm text-sm ${survey.isPublished ? 'bg-green-100 text-green-800' : 'bg-gray-300 text-black'}`}>
                  {survey.isPublished ? 'Published' : 'Unpublished'}
                </span>
                {isDirty && <span className="text-sm text-orange-500">Unsaved changes</span>}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  onClick={handleSave}
                  className="border border-black rounded-sm"
                >
                  <Save className="mr-2 h-4 w-4" /> 
                  Save
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handlePreview}
                  className="border border-black rounded-sm"
                >
                  <Eye className="mr-2 h-4 w-4" /> 
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </Button>
                
                <Button 
                  onClick={handlePublish}
                  className="bg-[#263238] hover:bg-[#1e272c] text-white rounded-sm"
                >
                  <ArrowUpToLine className="mr-2 h-4 w-4" /> 
                  Publish & Share
                </Button>
              </div>
            </div>
            
            <div className="mb-6">
              <Input
                value={surveyTitle}
                onChange={(e) => {
                  setSurveyTitle(e.target.value);
                  setIsDirty(true);
                }}
                className="text-2xl font-bold border-none p-0 focus:ring-0 focus:border-none mb-2"
              />
              <Input
                value={surveyDescription}
                onChange={(e) => {
                  setSurveyDescription(e.target.value);
                  setIsDirty(true);
                }}
                placeholder="Add a description (optional)"
                className="border-none p-0 focus:ring-0 focus:border-none text-muted-foreground"
              />
            </div>
            
            <TabsContent value="add-fields" className="mt-0">
              <div className={`grid gap-6 ${showPreview ? 'grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]' : 'grid-cols-1'}`}>
                {/* Left Column - Question Editor */}
                <div className="flex flex-col h-full gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Questions</h3>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="h-8">
                          <Plus className="h-4 w-4 mr-1" /> Add Question
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Add Question</DialogTitle>
                          <DialogDescription>
                            Select a question type to add to your survey.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <Button 
                            variant="outline"
                            className="flex flex-col gap-2 h-auto p-4"
                            onClick={() => {
                              handleAddQuestion('multiple-choice');
                              (document.querySelector('[role="dialog"]')?.closest('div')?.querySelector('button[data-state="closed"]') as HTMLButtonElement)?.click();
                            }}
                          >
                            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                              <div className="w-4 h-4 rounded-full bg-primary"></div>
                            </div>
                            <span>Multiple Choice</span>
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex flex-col gap-2 h-auto p-4"
                            onClick={() => {
                              handleAddQuestion('multiple-response');
                              (document.querySelector('[role="dialog"]')?.closest('div')?.querySelector('button[data-state="closed"]') as HTMLButtonElement)?.click();
                            }}
                          >
                            <div className="w-8 h-8 rounded border-2 border-primary flex items-center justify-center">
                              <div className="w-4 h-4 bg-primary"></div>
                            </div>
                            <span>Multiple Response</span>
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex flex-col gap-2 h-auto p-4"
                            onClick={() => {
                              handleAddQuestion('ranking');
                              (document.querySelector('[role="dialog"]')?.closest('div')?.querySelector('button[data-state="closed"]') as HTMLButtonElement)?.click();
                            }}
                          >
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-1">
                                <span>1</span>
                                <div className="w-16 h-1 bg-primary"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span>2</span>
                                <div className="w-12 h-1 bg-primary"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span>3</span>
                                <div className="w-8 h-1 bg-primary"></div>
                              </div>
                            </div>
                            <span>Ranking</span>
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex flex-col gap-2 h-auto p-4"
                            onClick={() => {
                              handleAddQuestion('dropdown');
                              (document.querySelector('[role="dialog"]')?.closest('div')?.querySelector('button[data-state="closed"]') as HTMLButtonElement)?.click();
                            }}
                          >
                            <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                              <ArrowUpToLine className="rotate-180 h-4 w-4" />
                            </div>
                            <span>Dropdown</span>
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex flex-col gap-2 h-auto p-4"
                            onClick={() => {
                              handleAddQuestion('image-upload');
                              (document.querySelector('[role="dialog"]')?.closest('div')?.querySelector('button[data-state="closed"]') as HTMLButtonElement)?.click();
                            }}
                          >
                            <div className="w-8 h-8 border-2 border-dashed border-primary flex items-center justify-center">
                              <PlusSquare size={16} />
                            </div>
                            <span>Image Upload</span>
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex flex-col gap-2 h-auto p-4"
                            onClick={() => {
                              handleAddQuestion('section');
                              (document.querySelector('[role="dialog"]')?.closest('div')?.querySelector('button[data-state="closed"]') as HTMLButtonElement)?.click();
                            }}
                          >
                            <div className="w-16 h-0.5 bg-primary"></div>
                            <span>Section</span>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <DragDropContainer 
                    questions={survey.questions}
                    onQuestionsChange={handleUpdateQuestions}
                    onQuestionSelect={setSelectedQuestionId}
                  >
                    <div 
                      ref={setQuestionContainerRef} 
                      className="bg-[#f8f8f8] border rounded-lg p-4 min-h-[300px] flex-grow overflow-y-auto"
                    >
                      {survey.questions.length > 0 ? (
                        <div className="space-y-1">
                          {survey.questions.map((question, index) => (
                            <DroppableQuestion
                              key={question.id}
                              question={question}
                              index={index}
                              selectedQuestionId={selectedQuestionId}
                              onSelectQuestion={setSelectedQuestionId}
                              onQuestionChange={handleQuestionChange}
                              onDeleteQuestion={handleDeleteQuestion}
                              onDuplicateQuestion={handleDuplicateQuestion}
                              onOpenPersonalization={() => {
                                setPersonalizationOpen(true);
                                // Store reference to current editor element
                                activeEditorRef.current = document.activeElement as HTMLElement;
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 text-muted-foreground">
                            <path d="M12 1.5V4.5M12 19.5V22.5M4.5 12H1.5M22.5 12H19.5M18.879 5.121L16.757 7.243M7.243 16.757L5.121 18.879M18.879 18.879L16.757 16.757M7.243 7.243L5.121 5.121M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <h3 className="text-lg">Your survey is empty</h3>
                          <p className="text-muted-foreground">Click the Add Question button to get started</p>
                        </div>
                      )}
                      
                      <div ref={setListBottomRef} className="h-24 border-2 border-dashed border-muted rounded-md mt-4 flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Drop questions here to reorder</p>
                      </div>
                    </div>
                  </DragDropContainer>

                  {/* Question Settings */}
                  {selectedQuestion && (
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Question Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm mb-1">Question Type</h4>
                          <div className="p-2 bg-muted rounded text-sm">{selectedQuestion.type}</div>
                        </div>
                        
                        <div>
                          <div className="flex items-center mb-1">
                            <input 
                              type="checkbox" 
                              id="required"
                              checked={selectedQuestion.required}
                              onChange={(e) => {
                                handleQuestionChange({
                                  ...selectedQuestion,
                                  required: e.target.checked
                                });
                              }}
                              className="mr-2"
                            />
                            <label htmlFor="required" className="text-sm">Required question</label>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline"
                          onClick={() => setPersonalizationOpen(true)}
                          className="w-full"
                        >
                          Personalization Options
                        </Button>
                      </div>
                    </div>
                  )}

                  {survey.questions.length > 0 && (
                    <div className="flex justify-end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="text-destructive hover:bg-destructive/10 hover:text-destructive">
                            Clear Survey
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Clear Survey</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to clear all questions from this survey? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button variant="destructive" onClick={handleClearSurvey}>Clear Survey</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>

                {/* Right Column - Preview */}
                {showPreview && (
                  <div className="border rounded-lg p-4 relative">
                    <div className="sticky top-0 bg-card mb-3 pb-2 flex justify-between items-center">
                      <h3 className="font-medium">Preview</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-7 px-2"
                        onClick={() => setShowPreview(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                      </Button>
                    </div>
                    <div className="overflow-auto h-[calc(100vh-300px)]">
                      <SurveyPreview
                        title={surveyTitle}
                        description={surveyDescription}
                        questions={survey.questions}
                        isPublished={survey.isPublished}
                      />
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="audience" className="mt-0">
              <div className="bg-white p-6 border rounded-md">
                <h2 className="text-xl font-semibold mb-4">Select Your Audience</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="students" 
                      name="audience" 
                      value="students" 
                      checked={survey.audience === 'students'}
                      onChange={() => {
                        setSurvey({...survey, audience: 'students'});
                        setIsDirty(true);
                      }}
                    />
                    <label htmlFor="students">Students</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="teachers" 
                      name="audience" 
                      value="teachers"
                      checked={survey.audience === 'teachers'}
                      onChange={() => {
                        setSurvey({...survey, audience: 'teachers'});
                        setIsDirty(true);
                      }}
                    />
                    <label htmlFor="teachers">Teachers</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="public" 
                      name="audience" 
                      value="public"
                      checked={survey.audience === 'public'}
                      onChange={() => {
                        setSurvey({...survey, audience: 'public'});
                        setIsDirty(true);
                      }}
                    />
                    <label htmlFor="public">Public</label>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button onClick={handleSave} className="bg-black text-white hover:bg-black/80">
                    Save Audience Selection
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="view-responses" className="mt-0">
              <div className="bg-white p-6 border rounded-md">
                <h2 className="text-xl font-semibold mb-4">Survey Responses</h2>
                {survey.isPublished ? (
                  <>
                    <div className="mb-6">
                      <div className="bg-green-100 border-green-400 border p-3 rounded mb-4">
                        <p>Your survey is published and collecting responses.</p>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <h3>Response Summary</h3>
                        <Button variant="outline">Export Data</Button>
                      </div>
                      
                      <div className="border rounded p-6 flex items-center justify-center">
                        <p className="text-center text-muted-foreground">
                          No responses yet. Responses will appear here once people start responding.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>No responses yet. Responses will appear here once your survey is published and people start responding.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="collaborators" className="mt-0">
              <div className="bg-white p-6 border rounded-md">
                <h2 className="text-xl font-semibold mb-4">Add Collaborators</h2>
                <div className="flex mb-4">
                  <Input placeholder="Enter email address" className="mr-2" />
                  <Button>Add Collaborator</Button>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Current Collaborators</h3>
                  <p className="text-gray-500">No collaborators added yet.</p>
                </div>
                
                <div className="mt-8 border-t pt-4">
                  <h3 className="font-semibold mb-2">Permissions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="editPermission" className="mt-1" />
                      <label htmlFor="editPermission" className="block">
                        <div className="font-medium">Can edit</div>
                        <div className="text-sm text-muted-foreground">Collaborators can make changes to the survey</div>
                      </label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="viewPermission" className="mt-1" defaultChecked />
                      <label htmlFor="viewPermission" className="block">
                        <div className="font-medium">Can view</div>
                        <div className="text-sm text-muted-foreground">Collaborators can view the survey and responses</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      {/* Personalization Panel */}
      <Sheet open={personalizationOpen} onOpenChange={setPersonalizationOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Personalization</SheetTitle>
            <SheetDescription>
              Add personalization tokens to make your questions dynamic.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <PersonalizationPanel
              personalizationFields={personalizationFields}
              onAddToken={handleAddToken}
              onUpdateFields={setPersonalizationFields}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

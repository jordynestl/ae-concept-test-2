
import { v4 as uuidv4 } from 'uuid';
import {
  Question,
  QuestionType,
  MultipleChoiceQuestion,
  MultipleResponseQuestion,
  RankingQuestion,
  ImageUploadQuestion,
  SectionQuestion,
  DropdownQuestion,
  PersonalizationFields
} from '../types/survey';

export const createQuestion = (type: QuestionType, text: string = ''): Question => {
  const baseQuestion = {
    id: uuidv4(),
    text,
    required: false,
    visible: true
  };

  switch (type) {
    case 'multiple-choice':
      return {
        ...baseQuestion,
        type: 'multiple-choice',
        options: [
          { id: uuidv4(), text: 'Yes' },
          { id: uuidv4(), text: 'No' }
        ],
        allowOther: false
      } as MultipleChoiceQuestion;

    case 'multiple-response':
      return {
        ...baseQuestion,
        type: 'multiple-response',
        options: [
          { id: uuidv4(), text: 'Option 1' },
          { id: uuidv4(), text: 'Option 2' }
        ],
        allowOther: false
      } as MultipleResponseQuestion;

    case 'ranking':
      return {
        ...baseQuestion,
        type: 'ranking',
        options: [
          { id: uuidv4(), text: 'Item 1' },
          { id: uuidv4(), text: 'Item 2' },
          { id: uuidv4(), text: 'Item 3' }
        ]
      } as RankingQuestion;

    case 'image-upload':
      return {
        ...baseQuestion,
        type: 'image-upload',
        maxSize: 5, // 5MB default
        allowMultiple: false
      } as ImageUploadQuestion;

    case 'section':
      return {
        ...baseQuestion,
        type: 'section',
        description: ''
      } as SectionQuestion;

    case 'dropdown':
      return {
        ...baseQuestion,
        type: 'dropdown',
        options: [
          { id: uuidv4(), text: 'Option 1' },
          { id: uuidv4(), text: 'Option 2' },
          { id: uuidv4(), text: 'Option 3' }
        ]
      } as DropdownQuestion;

    default:
      throw new Error(`Invalid question type: ${type}`);
  }
};

export const createEmptySurvey = (): {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  audience: 'students' | 'teachers' | 'public' | 'custom';
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
} => {
  const now = new Date().toISOString();
  
  return {
    id: uuidv4(),
    title: 'Untitled Survey',
    description: '',
    questions: [], // Start with no questions by default
    audience: 'students',
    isPublished: false,
    createdAt: now,
    updatedAt: now
  };
};

export const duplicateQuestion = (question: Question): Question => {
  return {
    ...question,
    id: uuidv4()
  };
};

export const addOptionToQuestion = (
  question: MultipleChoiceQuestion | MultipleResponseQuestion | RankingQuestion | DropdownQuestion,
  optionText: string = ''
): MultipleChoiceQuestion | MultipleResponseQuestion | RankingQuestion | DropdownQuestion => {
  return {
    ...question,
    options: [
      ...question.options,
      { id: uuidv4(), text: optionText || `Option ${question.options.length + 1}` }
    ]
  };
};

export const removeOptionFromQuestion = (
  question: MultipleChoiceQuestion | MultipleResponseQuestion | RankingQuestion | DropdownQuestion,
  optionId: string
): MultipleChoiceQuestion | MultipleResponseQuestion | RankingQuestion | DropdownQuestion => {
  return {
    ...question,
    options: question.options.filter(option => option.id !== optionId)
  };
};

export const updateOptionInQuestion = (
  question: MultipleChoiceQuestion | MultipleResponseQuestion | RankingQuestion | DropdownQuestion,
  optionId: string,
  newText: string
): MultipleChoiceQuestion | MultipleResponseQuestion | RankingQuestion | DropdownQuestion => {
  return {
    ...question,
    options: question.options.map(option =>
      option.id === optionId ? { ...option, text: newText } : option
    )
  };
};

// Helper to extract tokens from text with {{token}} format
export const extractPersonalizationTokens = (text: string): string[] => {
  const tokenRegex = /\{\{([^}]+)\}\}/g;
  const matches = text.match(tokenRegex) || [];
  return matches.map(match => match.substring(2, match.length - 2));
};

// Apply personalization tokens to text
export const applyPersonalization = (text: string, data: Record<string, any>): string => {
  let result = text;
  const tokens = extractPersonalizationTokens(text);
  
  tokens.forEach(token => {
    const parts = token.split('.');
    let value: any = data;
    
    // Handle nested tokens like "user.firstName"
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        value = null;
        break;
      }
    }
    
    if (value !== null && value !== undefined) {
      result = result.replace(`{{${token}}}`, value.toString());
    }
  });
  
  return result;
};

export const getDefaultPersonalizationTokens = (): PersonalizationFields => {
  return {
    'Student': ['firstName', 'lastName', 'email', 'grade', 'classId'],
    'Teacher': ['firstName', 'lastName', 'email', 'department', 'subject'],
    'School': ['name', 'district', 'principal', 'address'],
    'Course': ['name', 'section', 'period', 'room'],
    'Date': ['today', 'semester', 'academicYear']
  };
};

export const findQuestionById = (questions: Question[], id: string): Question | undefined => {
  return questions.find(q => q.id === id);
};

// Format validation for various question types
export const validateQuestion = (question: Question): string[] => {
  const errors: string[] = [];

  if (!question.text.trim()) {
    errors.push('Question text is required');
  }

  switch (question.type) {
    case 'multiple-choice':
    case 'multiple-response':
    case 'ranking':
    case 'dropdown':
      if (question.options.length < 1) {
        errors.push('At least one option is required');
      }
      if (question.options.some(option => !option.text.trim())) {
        errors.push('All options must have text');
      }
      break;
  }

  return errors;
};

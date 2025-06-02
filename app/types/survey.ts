
export type QuestionType =
  | 'multiple-choice'
  | 'multiple-response'
  | 'ranking'
  | 'image-upload'
  | 'section'
  | 'dropdown';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  visible: boolean;
  displayConditions?: DisplayCondition[];
}

export interface DisplayCondition {
  questionId: string;
  operator: 'equals' | 'not-equals' | 'contains' | 'not-contains';
  value: string | string[];
}

export interface ChoiceOption {
  id: string;
  text: string;
  personalizationToken?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: ChoiceOption[];
  allowOther: boolean;
}

export interface MultipleResponseQuestion extends BaseQuestion {
  type: 'multiple-response';
  options: ChoiceOption[];
  allowOther: boolean;
}

export interface RankingQuestion extends BaseQuestion {
  type: 'ranking';
  options: ChoiceOption[];
}

export interface ImageUploadQuestion extends BaseQuestion {
  type: 'image-upload';
  maxSize?: number; // in MB
  allowMultiple: boolean;
}

export interface SectionQuestion extends BaseQuestion {
  type: 'section';
  description?: string;
}

export interface DropdownQuestion extends BaseQuestion {
  type: 'dropdown';
  options: ChoiceOption[];
}

export type Question =
  | MultipleChoiceQuestion
  | MultipleResponseQuestion
  | RankingQuestion
  | ImageUploadQuestion
  | SectionQuestion
  | DropdownQuestion;

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  audience: 'students' | 'teachers' | 'public' | 'custom';
  customAudience?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PersonalizationField {
  category: string;
  fields: string[];
}

export type PersonalizationFields = Record<string, string[]>;

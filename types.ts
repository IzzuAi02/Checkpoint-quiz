
export interface Option {
  id: string; // A, B, C, D
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string | string[]; // Single string for single choice, array for multiple choice
  explanation: string;
  reference?: string;
  imageUrl?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<number, string | string[]>;
  isSubmitted: boolean;
  isReviewMode: boolean;
  timeStarted: number;
  bookmarkedQuestions: number[];
  checkedQuestions: number[]; // Track which questions have been revealed
}

export enum QuizView {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  SUMMARY = 'SUMMARY',
  REVIEW = 'REVIEW'
}

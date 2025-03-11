
export interface Option {
  id: string;
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Result {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
}

export interface QuizData {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  results: Result[];
}

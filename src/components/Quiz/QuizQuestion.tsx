
import React from 'react';
import { Question } from '@/types/quiz';
import { Button } from '@/components/ui/button';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onSelectOption: (optionId: string, points: number) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  questionNumber,
  totalQuestions,
  onSelectOption 
}) => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <div className="text-sm text-warm-gray-600 mb-2">
          Question {questionNumber} of {totalQuestions}
        </div>
        <h3 className="text-xl font-medium mb-6">{question.text}</h3>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              className="w-full justify-start text-left h-auto py-4 px-4 border border-border hover:bg-accent transition-colors"
              onClick={() => onSelectOption(option.id, option.points)}
            >
              <span>{option.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};


import React from 'react';

interface QuizProgressBarProps {
  progress: number;
}

export const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

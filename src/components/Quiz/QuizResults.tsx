
import React from 'react';
import { Result } from '@/types/quiz';
import { Button } from '@/components/ui/button';
import { Trophy, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface QuizResultsProps {
  results: Result[];
  score: number;
  onReset: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ results, score, onReset }) => {
  // Find the appropriate result based on the score
  const result = results.find(
    (r) => score >= r.minScore && score <= r.maxScore
  ) || results[0];

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-center">
        <div className="bg-primary/10 rounded-full p-4">
          <Trophy className="h-12 w-12 text-primary" />
        </div>
      </div>
      
      <h2 className="text-2xl font-serif font-medium mb-3">Your Score: {score} points</h2>
      <h3 className="text-xl font-medium mb-4">{result.title}</h3>
      
      <div className="text-left">
        <div className="prose prose-sm max-w-none" style={{ whiteSpace: 'pre-line' }}>
          <ReactMarkdown>
            {result.description}
          </ReactMarkdown>
        </div>
      </div>
      
      <Button 
        onClick={onReset}
        className="mx-auto mt-8"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Take Quiz Again
      </Button>
    </div>
  );
};

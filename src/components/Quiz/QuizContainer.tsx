
import React, { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { QuizProgressBar } from './QuizProgressBar';
import { QuizData } from '@/types/quiz';

interface QuizContainerProps {
  quizData: QuizData;
}

export const QuizContainer: React.FC<QuizContainerProps> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [points, setPoints] = useState<number>(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (optionId: string, optionPoints: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionId;
    setAnswers(newAnswers);
    setPoints(points + optionPoints);

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setPoints(0);
    setIsComplete(false);
  };

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizData.questions.length) * 100;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      {!isComplete ? (
        <div className="p-6">
          <h2 className="text-2xl font-serif font-medium mb-2">{quizData.title}</h2>
          <p className="text-warm-gray-600 mb-6">{quizData.description}</p>
          
          <QuizProgressBar progress={progress} />
          
          <div className="mt-6">
            <QuizQuestion 
              question={currentQuestion} 
              onSelectOption={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={quizData.questions.length}
            />
          </div>
        </div>
      ) : (
        <QuizResults 
          results={quizData.results} 
          score={points} 
          onReset={resetQuiz}
        />
      )}
    </div>
  );
};

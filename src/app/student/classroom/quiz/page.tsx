'use client';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Q1: What is the main benefit of using digital tools in research?',
      options: [
        'Faster funding',
        'Improved collaboration',
        'Better typing',
        'Less paperwork'
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: 'Q2: Which of the following is a key component of data analysis?',
      options: [
        'Data visualization',
        'Data collection',
        'Data storage',
        'Data entry'
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: 'Q3: What is the primary purpose of exploratory data analysis?',
      options: [
        'To clean data',
        'To understand data patterns',
        'To store data',
        'To share data'
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: 'Q4: Which tool is commonly used for statistical analysis?',
      options: [
        'Microsoft Word',
        'Adobe Photoshop',
        'R or Python',
        'PowerPoint'
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: 'Q5: What is the main benefit of using digital tools in research?',
      options: [
        'Faster funding',
        'Improved collaboration',
        'Better typing',
        'Less paperwork'
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const passed = score >= 3; // 60% pass rate

  if (showReview) {
    return (
      <div className="h-full flex flex-col">
        {/* Back Button */}
        <div className="mb-6">
          <button 
            onClick={() => setShowReview(false)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back to Module</span>
          </button>
        </div>



        {/* Review Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Quiz Review</h2>
          
          {questions.map((question, index) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-4">{question.question}</h3>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div 
                    key={optionIndex}
                    className={`flex items-center p-3 rounded ${
                      optionIndex === question.correctAnswer
                        ? 'bg-green-50 border border-green-200'
                        : selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer
                        ? 'bg-red-50 border border-red-200'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      optionIndex === question.correctAnswer
                        ? 'border-green-500 bg-green-500'
                        : selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300'
                    }`}></div>
                    <label className="text-gray-700">{option}</label>
                    {optionIndex === question.correctAnswer && (
                      <span className="ml-auto text-green-600 text-sm font-medium">Correct</span>
                    )}
                    {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && (
                      <span className="ml-auto text-red-600 text-sm font-medium">Your answer</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="h-full flex flex-col">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/student/classroom/overview"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back to Module</span>
          </Link>
        </div>



        {/* Completion Screen */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
          {/* Trophy Icon */}
          <div className="w-32 h-32 relative">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <div className="text-6xl">🏆</div>
            </div>
            {/* Confetti elements */}
            <div className="absolute -top-4 -left-4 text-green-500 text-2xl animate-bounce">🎉</div>
            <div className="absolute -top-4 -right-4 text-pink-500 text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>🎊</div>
            <div className="absolute -bottom-4 -left-4 text-blue-500 text-2xl animate-bounce" style={{animationDelay: '0.4s'}}>✨</div>
            <div className="absolute -bottom-4 -right-4 text-purple-500 text-2xl animate-bounce" style={{animationDelay: '0.6s'}}>🎈</div>
          </div>

          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-2">
              Congratulations! You passed the quiz!
            </h1>
            <p className="text-xl text-gray-600">Your Score: {score}/{questions.length}</p>
          </div>

          <div className="flex flex-col space-y-4">
            <button className="px-12 py-3 bg-[#800080] text-white rounded-lg font-medium text-lg hover:bg-[#660066]">
              Go to Next Module
            </button>
            <button 
              onClick={() => setShowReview(true)}
              className="px-12 py-3 border-2 border-[#800080] text-[#800080] rounded-lg font-medium text-lg hover:bg-[#FBF2FF]"
            >
              Review Answers
            </button>
          </div>

          <Link 
            href="/student/classroom/overview"
            className="flex items-center space-x-2 text-[#800080] hover:text-[#660066] mt-8"
          >
            <ArrowLeft size={20} />
            <span className="text-lg">Back to module</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/student/classroom/overview"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} />
          <span>Back to Module</span>
        </Link>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-12">
          <span className="px-1 border-b-2 border-[#800080] text-[#800080] font-medium text-sm">
            Quiz
          </span>
        </nav>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h1>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="quiz-option"
                    value={index}
                    checked={selectedAnswers[currentQuestion] === index}
                    onChange={() => handleAnswerSelect(index)}
                    className="w-5 h-5 text-[#800080] border-2 border-[#800080] focus:ring-[#800080] focus:ring-2"
                  />
                  <label 
                    htmlFor={`option-${index}`}
                    className="ml-3 text-gray-700 text-lg cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-[#800080] pt-4 mt-8">
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            
            <div className="flex space-x-3">
              {currentQuestion > 0 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-2 border-2 border-[#800080] text-[#800080] rounded font-medium hover:bg-[#FBF2FF]"
                >
                  Back
                </button>
              )}
              
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-[#800080] text-white rounded font-medium hover:bg-[#660066]"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-[#800080] text-white rounded font-medium hover:bg-[#660066]"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
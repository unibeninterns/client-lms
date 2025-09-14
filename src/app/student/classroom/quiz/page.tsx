'use client';
import { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <div className={`h-full flex flex-col ${isMobile ? 'p-4' : ''}`}>
        {/* Back Button */}
        <div className="mb-6">
          <button 
            onClick={() => setShowReview(false)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Quizzes</span>
          </button>
        </div>

        {/* Review Content */}
        <div className="flex-1 space-y-6">
          <h2 className={`font-semibold text-gray-900 ${isMobile ? 'text-xl' : 'text-2xl'}`}>Quiz Review</h2>
          
          {questions.map((question, index) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4 lg:p-6">
              <h3 className={`font-medium text-gray-900 mb-4 ${isMobile ? 'text-sm' : ''}`}>{question.question}</h3>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div 
                    key={optionIndex}
                    className={`flex items-center p-3 rounded text-sm ${
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
                    <label className="text-gray-700 flex-1">{option}</label>
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
      <div className={`h-full flex flex-col ${isMobile ? 'p-4' : ''}`}>
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/student/classroom"
            onClick={() => localStorage.removeItem('lastClassroomTab')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back to Module</span>
          </Link>
        </div>

        {/* Completion Screen */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8">
          {/* Trophy Icon */}
          <div className={`relative ${isMobile ? 'w-20 h-20' : 'w-32 h-32'}`}>
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <div className={isMobile ? 'text-4xl' : 'text-6xl'}>🏆</div>
            </div>
            {/* Confetti elements */}
            <div className={`absolute -top-2 -left-2 text-green-500 animate-bounce ${isMobile ? 'text-lg' : 'text-2xl'}`}>🎉</div>
            <div className={`absolute -top-2 -right-2 text-pink-500 animate-bounce ${isMobile ? 'text-lg' : 'text-2xl'}`} style={{animationDelay: '0.2s'}}>🎊</div>
            <div className={`absolute -bottom-2 -left-2 text-blue-500 animate-bounce ${isMobile ? 'text-lg' : 'text-2xl'}`} style={{animationDelay: '0.4s'}}>✨</div>
            <div className={`absolute -bottom-2 -right-2 text-purple-500 animate-bounce ${isMobile ? 'text-lg' : 'text-2xl'}`} style={{animationDelay: '0.6s'}}>🎈</div>
          </div>

          <div>
            <h1 className={`font-semibold text-gray-900 mb-2 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
              Congratulations! You passed the quiz!
            </h1>
            <p className={`text-gray-600 ${isMobile ? 'text-lg' : 'text-xl'}`}>Your Score: {score}/{questions.length}</p>
          </div>

          <div className="flex flex-col space-y-4 w-full max-w-sm">
            <button className={`px-8 py-3 bg-[#800080] text-white rounded-lg font-medium hover:bg-[#660066] ${isMobile ? 'text-base' : 'text-lg'}`}>
              Go to Next Module
            </button>
            <button 
              onClick={() => setShowReview(true)}
              className={`px-8 py-3 border-2 border-[#800080] text-[#800080] rounded-lg font-medium hover:bg-[#FBF2FF] ${isMobile ? 'text-base' : 'text-lg'}`}
            >
              Review Answers
            </button>
          </div>

          <Link 
            href="/student/classroom"
            onClick={() => localStorage.removeItem('lastClassroomTab')}
            className={`flex items-center space-x-2 text-[#800080] hover:text-[#660066] mt-6 ${isMobile ? 'text-base' : 'text-lg'}`}
          >
            <ArrowLeft size={20} />
            <span>Back to module</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col ${isMobile ? 'p-4' : ''}`}>
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/student/classroom"
          onClick={() => localStorage.removeItem('lastClassroomTab')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} />
          <span>Quizzes</span>
        </Link>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <div className={isMobile ? '' : 'max-w-3xl'}>
            <h1 className={`font-semibold text-gray-900 mb-6 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
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
                    className={`ml-3 text-gray-700 cursor-pointer ${isMobile ? 'text-base' : 'text-lg'}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`border-t border-[#800080] pt-4 mt-8 ${isMobile ? 'mt-6' : ''}`}>
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            
            <div className="flex space-x-3">
              {currentQuestion > 0 && (
                <button
                  onClick={handleBack}
                  className={`px-4 py-2 border-2 border-[#800080] text-[#800080] rounded font-medium hover:bg-[#FBF2FF] ${isMobile ? 'text-sm' : ''}`}
                >
                  Back
                </button>
              )}
              
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className={`px-4 py-2 bg-[#800080] text-white rounded font-medium hover:bg-[#660066] ${isMobile ? 'text-sm' : ''}`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`px-4 py-2 bg-[#800080] text-white rounded font-medium hover:bg-[#660066] ${isMobile ? 'text-sm' : ''}`}
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
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
    answer: 2,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2,
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: 2,
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: 0,
  },
  {
    question: "What is the full form of CSS?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: 0,
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 0,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"],
    answer: 1,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "def myFunction()"],
    answer: 0,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    options: ["<!--comment-->", "//comment", "/*comment*/", "Both B and C"],
    answer: 3,
  },
];

export default function QuizPage({ params }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(Array(questions.length).fill(false));
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowResult(true);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    const newAnswered = [...answered];
    newAnswered[current] = true;
    setAnswered(newAnswered);

    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrent(index);
    setSelected(null);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      {/* Top Navigation Bar */}
      <nav className="bg-[#0537E7] text-white rounded-xl shadow-lg mb-8 p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">{params?.course || "Professional"} Certification</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>

            <div className="hidden md:block bg-white/20 px-4 py-2 rounded-lg">
              <span className="font-medium">Question: {current + 1}/{questions.length}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Question Navigator */}
          <div className="lg:w-1/4">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-[#0537E7] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Question Navigator
              </h3>

              <div className="grid grid-cols-5 gap-2 mb-6">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionSelect(index)}
                    className={`w-full aspect-square rounded-lg flex items-center justify-center font-medium transition-all ${current === index
                        ? "bg-[#0537E7] text-white shadow-md"
                        : answered[index]
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 text-[#0537E7] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Your Progress
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Correct Answers</span>
                    <span className="font-medium text-green-600">{score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Incorrect Answers</span>
                    <span className="font-medium text-red-600">{answered.filter(Boolean).length - score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Unanswered</span>
                    <span className="font-medium text-yellow-600">{questions.length - answered.filter(Boolean).length}</span>
                  </div>
                </div>

                <div className="mt-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{Math.round((answered.filter(Boolean).length / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#0537E7] h-2 rounded-full"
                      style={{ width: `${(answered.filter(Boolean).length / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Question Header */}
              <div className="bg-[#0537E7] bg-opacity-5 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#0537E7] bg-[#0537E7] bg-opacity-10 px-3 py-1 rounded-full">
                    Question {current + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-white font-semibold">
                    {Math.round(((current + 1) / questions.length) * 100)}% complete
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {questions[current].question}
                </h2>
              </div>

              {/* Options */}
              <div className="p-6">
                <div className="space-y-4">
                  {questions[current].options.map((option, i) => (
                    <button
                      key={i}
                      className={`w-full text-left p-5 rounded-lg border transition-all duration-200 flex items-start ${selected === i
                          ? "border-[#0537E7] bg-[#0537E7] bg-opacity-5 shadow-inner"
                          : "border-gray-200 hover:bg-gray-50"
                        }`}
                      onClick={() => setSelected(i)}
                    >
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-4 mt-0.5 flex-shrink-0 border ${selected === i
                          ? "bg-[#0537E7] border-[#0537E7] text-white"
                          : "border-gray-300 text-gray-600"
                        }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-gray-700">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-3">
                <button
                  onClick={handlePrevious}
                  disabled={current === 0}
                  className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center ${current === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={selected === null}
                  className={`px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center ${selected === null
                      ? "bg-[#0537E7] bg-opacity-50 cursor-not-allowed"
                      : "bg-[#0537E7] hover:bg-[#042EB5] shadow-md"
                    }`}
                >
                  {current < questions.length - 1 ? (
                    <>
                      <span>Next Question</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  ) : (
                    "Submit Quiz"
                  )}
                </button>
              </div>
            </div>

            {/* Quiz Help Card */}
            <div className="mt-6 bg-[#0537E7] bg-opacity-5 border border-[#0537E7] border-opacity-20 rounded-xl p-5">
              <h4 className="font-medium text-[#ffff] mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quiz Guidelines
              </h4>
              <ul className="text-sm text-[#ffff] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#ffff] mr-2">•</span>
                  <span>Select only one answer for each question</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffff]  mr-2">•</span>
                  <span>You can change your answer before submitting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffff] mr-2">•</span>
                  <span>Answered questions are marked green in the navigator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ffff] mr-2">•</span>
                  <span>The timer will automatically submit your quiz when time expires</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#0537E7] p-6 text-center text-white">
              <div className="w-20 h-20 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Assessment Complete</h2>
              <p className="opacity-90">Your results are ready</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                    <div className="text-3xl font-bold text-[#0537E7]">{calculatePercentage()}%</div>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-[#0537E7] border-t-transparent border-r-transparent transform -rotate-45"
                    style={{ clipPath: `circle(50% at 50% 50%)` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Score Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="text-green-700 font-bold text-xl">{score}</div>
                    <div className="text-green-600 text-sm">Correct</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <div className="text-red-700 font-bold text-xl">{questions.length - score}</div>
                    <div className="text-red-600 text-sm">Incorrect</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="w-full bg-[#0537E7] text-white py-3 rounded-lg font-medium hover:bg-[#042EB5] transition flex items-center justify-center"
                  onClick={() => {
                    setShowResult(false);
                    setCurrent(0);
                    setSelected(null);
                    setScore(0);
                    setTimeLeft(15 * 60);
                    setAnswered(Array(questions.length).fill(false));
                  }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Retake Assessment
                </button>

                <button
                  className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center"
                  onClick={() => router.push("/")}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
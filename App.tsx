
import React, { useState, useMemo } from 'react';
import { questions } from './data';
import { QuizView, QuizState } from './types';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Bookmark, 
  Info, 
  Layout, 
  Trophy,
  RotateCcw,
  Eye,
  AlertCircle,
  Infinity as InfinityIcon,
  Check
} from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<QuizView>(QuizView.WELCOME);
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: {},
    isSubmitted: false,
    isReviewMode: false,
    timeStarted: Date.now(),
    bookmarkedQuestions: [],
    checkedQuestions: []
  });

  const currentQuestion = questions[state.currentQuestionIndex];
  const isMultiple = Array.isArray(currentQuestion.correctAnswer);
  const isChecked = state.checkedQuestions.includes(currentQuestion.id) || state.isReviewMode;
  const hasSelectedAny = !!state.userAnswers[currentQuestion.id] && (
    !isMultiple || (state.userAnswers[currentQuestion.id] as string[]).length > 0
  );

  const handleAnswer = (optionId: string) => {
    if (state.isSubmitted || isChecked) return;

    setState(prev => {
      const currentAnswer = prev.userAnswers[currentQuestion.id];
      let newAnswer: string | string[];
      let newChecked = prev.checkedQuestions;

      if (isMultiple) {
        const existingArr = Array.isArray(currentAnswer) ? currentAnswer : [];
        if (existingArr.includes(optionId)) {
          newAnswer = existingArr.filter(id => id !== optionId);
        } else {
          newAnswer = [...existingArr, optionId].sort();
        }
      } else {
        newAnswer = optionId;
        // For single choice, reveal immediately
        if (!newChecked.includes(currentQuestion.id)) {
          newChecked = [...newChecked, currentQuestion.id];
        }
      }

      return {
        ...prev,
        userAnswers: { ...prev.userAnswers, [currentQuestion.id]: newAnswer },
        checkedQuestions: newChecked
      };
    });
  };

  const checkMultipleChoice = () => {
    if (!isMultiple || isChecked) return;
    setState(prev => ({
      ...prev,
      checkedQuestions: [...prev.checkedQuestions, currentQuestion.id]
    }));
  };

  const toggleBookmark = (id: number) => {
    setState(prev => ({
      ...prev,
      bookmarkedQuestions: prev.bookmarkedQuestions.includes(id)
        ? prev.bookmarkedQuestions.filter(qid => qid !== id)
        : [...prev.bookmarkedQuestions, id]
    }));
  };

  const calculateScore = useMemo(() => {
    let correct = 0;
    questions.forEach(q => {
      const userAnswer = state.userAnswers[q.id];
      if (Array.isArray(q.correctAnswer)) {
        const isCorrect = Array.isArray(userAnswer) && 
          userAnswer.length === q.correctAnswer.length &&
          userAnswer.every(val => (q.correctAnswer as string[]).includes(val));
        if (isCorrect) correct++;
      } else {
        if (userAnswer === q.correctAnswer) correct++;
      }
    });
    return correct;
  }, [state.userAnswers]);

  const progress = useMemo(() => {
    return (Object.keys(state.userAnswers).length / questions.length) * 100;
  }, [state.userAnswers]);

  const startQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      userAnswers: {},
      isSubmitted: false,
      isReviewMode: false,
      timeStarted: Date.now(),
      bookmarkedQuestions: [],
      checkedQuestions: []
    });
    setView(QuizView.QUIZ);
  };

  if (view === QuizView.WELCOME) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#5c7081] p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">CCSA R81 Practice</h1>
            <p className="opacity-90">Instant Feedback Mode • 101 Questions</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <Layout className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900">Immediate Results</h3>
                  <p className="text-sm text-blue-700">See correct answers instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                <InfinityIcon className="w-6 h-6 text-green-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900">Study Mode</h3>
                  <p className="text-sm text-green-700">Detailed technical explanations</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <button 
                onClick={startQuiz}
                className="w-full py-4 bg-[#7a378b] hover:bg-[#612c6e] text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Practice Session
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === QuizView.SUMMARY || (view === QuizView.QUIZ && state.isSubmitted && !state.isReviewMode)) {
    const score = calculateScore;
    const percentage = Math.round((score / questions.length) * 100);
    const isPass = percentage >= 70;

    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 text-center">
          <div className={`inline-flex p-4 rounded-full mb-6 ${isPass ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            <Trophy className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-2">{isPass ? 'Great Job!' : 'Keep Studying'}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8 mt-6">
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <span className="block text-4xl font-black text-gray-800">{score}/{questions.length}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Correct</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <span className={`block text-4xl font-black ${isPass ? 'text-green-600' : 'text-orange-600'}`}>{percentage}%</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Grade</span>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => { setState(prev => ({ ...prev, isReviewMode: true })); setView(QuizView.QUIZ); }}
              className="w-full py-4 bg-gray-800 hover:bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Eye className="w-5 h-5" /> Detailed Review
            </button>
            <button 
              onClick={startQuiz}
              className="w-full py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f9fa]">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col shrink-0 h-screen sticky top-0 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-[#5c7081] text-white">
          <h2 className="font-bold text-lg mb-1">Navigation</h2>
          <div className="flex items-center gap-2 opacity-80 text-xs font-bold uppercase tracking-wider">
            <InfinityIcon className="w-4 h-4" />
            <span>Practice Mode</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const isCurrent = state.currentQuestionIndex === idx;
              const hasAnswer = !!state.userAnswers[q.id];
              const isQuestionChecked = state.checkedQuestions.includes(q.id) || state.isReviewMode;
              const isBookmarked = state.bookmarkedQuestions.includes(q.id);
              
              const isCorrect = isQuestionChecked && (
                Array.isArray(q.correctAnswer) 
                  ? (Array.isArray(state.userAnswers[q.id]) && (state.userAnswers[q.id] as string[]).length === q.correctAnswer.length && (state.userAnswers[q.id] as string[]).every(v => (q.correctAnswer as string[]).includes(v)))
                  : state.userAnswers[q.id] === q.correctAnswer
              );

              let bgColor = 'bg-white border-gray-200 text-gray-400';
              if (isCurrent) bgColor = 'bg-white border-blue-600 ring-2 ring-blue-100 text-blue-600';
              else if (isQuestionChecked) {
                bgColor = isCorrect ? 'bg-green-500 border-green-500 text-white' : 'bg-red-500 border-red-500 text-white';
              }
              else if (hasAnswer) bgColor = 'bg-gray-700 border-gray-700 text-white';

              return (
                <button
                  key={q.id}
                  onClick={() => setState(prev => ({ ...prev, currentQuestionIndex: idx }))}
                  className={`relative h-10 w-full rounded-md border text-sm font-semibold transition-all flex items-center justify-center ${bgColor}`}
                >
                  {q.id}
                  {isBookmarked && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400 rounded-full border-2 border-white" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 space-y-3 bg-white">
          <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
            <span>Completion</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          {!state.isSubmitted && (
            <button 
              onClick={() => setState(prev => ({ ...prev, isSubmitted: true }))}
              className="w-full mt-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold text-sm transition-colors shadow-sm"
            >
              Finish Attempt
            </button>
          )}
          {state.isReviewMode && (
            <button 
              onClick={() => setView(QuizView.SUMMARY)}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold text-sm"
            >
              Return to Summary
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="max-w-4xl mx-auto p-6 md:p-12 pb-32">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 bg-white shadow-sm border border-gray-200 rounded-2xl flex items-center justify-center text-2xl font-black text-gray-700">
                {currentQuestion.id}
               </div>
               <div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-1">
                   Question Details
                 </span>
                 <h2 className="text-sm font-bold text-gray-600 flex items-center gap-2">
                   {isChecked ? (
                     <span className="flex items-center gap-1 text-blue-600"><CheckCircle2 className="w-4 h-4"/> Feedback Revealed</span>
                   ) : hasSelectedAny ? (
                     <span className="text-orange-500">Awaiting Confirmation</span>
                   ) : (
                     <span className="text-gray-400">Not Answered Yet</span>
                   )}
                 </h2>
               </div>
            </div>
            <button 
              onClick={() => toggleBookmark(currentQuestion.id)}
              className={`p-3 rounded-xl transition-all border ${state.bookmarkedQuestions.includes(currentQuestion.id) ? 'bg-orange-50 border-orange-200 text-orange-500' : 'bg-white border-gray-200 text-gray-400 hover:text-gray-600'}`}
            >
              <Bookmark className="w-6 h-6" fill={state.bookmarkedQuestions.includes(currentQuestion.id) ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Question Body */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-8 md:p-10 border-b border-gray-100">
              <h3 className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-800">
                {currentQuestion.text}
              </h3>
              {isMultiple && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-100">
                  Select all that apply
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = Array.isArray(state.userAnswers[currentQuestion.id]) 
                  ? (state.userAnswers[currentQuestion.id] as string[]).includes(option.id)
                  : state.userAnswers[currentQuestion.id] === option.id;

                const isCorrect = Array.isArray(currentQuestion.correctAnswer)
                  ? (currentQuestion.correctAnswer as string[]).includes(option.id)
                  : currentQuestion.correctAnswer === option.id;

                let styles = 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30';
                if (isSelected) styles = 'border-blue-500 bg-blue-50 ring-2 ring-blue-100';
                
                if (isChecked) {
                  if (isCorrect) styles = 'border-green-500 bg-green-50/50 ring-2 ring-green-100 cursor-default';
                  else if (isSelected) styles = 'border-red-500 bg-red-50/50 ring-2 ring-red-100 cursor-default';
                  else styles = 'border-gray-100 opacity-40 cursor-default';
                }

                return (
                  <button
                    key={option.id}
                    disabled={isChecked}
                    onClick={() => handleAnswer(option.id)}
                    className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${styles}`}
                  >
                    <span className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 font-bold border text-sm transition-all ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                      {option.id}
                    </span>
                    <span className="flex-1 text-gray-700 font-semibold pt-0.5">{option.text}</span>
                    {isChecked && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />}
                    {isChecked && isSelected && !isCorrect && <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />}
                  </button>
                );
              })}

              {isMultiple && !isChecked && (
                <div className="pt-6">
                  <button
                    disabled={!hasSelectedAny}
                    onClick={checkMultipleChoice}
                    className="w-full py-4 bg-gray-900 hover:bg-black disabled:opacity-30 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-gray-200"
                  >
                    <Check className="w-5 h-5" /> Check Answer
                  </button>
                </div>
              )}
            </div>

            {isChecked && (
              <div className="bg-blue-600 p-8 md:p-10 text-white animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] mb-4 opacity-80">
                  <Info className="w-4 h-4" />
                  <h4>Technical Analysis</h4>
                </div>
                <p className="text-lg font-medium leading-relaxed mb-6">
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.reference && (
                  <div className="text-[10px] font-black uppercase tracking-widest pt-6 border-t border-white/20 opacity-60">
                    Source: {currentQuestion.reference}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 w-[calc(100%-3rem)] max-w-4xl flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-2xl z-20">
            <button 
              disabled={state.currentQuestionIndex === 0}
              onClick={() => setState(prev => ({ ...prev, currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1) }))}
              className="flex items-center gap-2 px-6 py-3 font-bold text-gray-500 hover:text-gray-900 disabled:opacity-20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>
            
            <div className="hidden sm:flex items-center gap-1 font-black text-[10px] text-gray-400 uppercase tracking-[0.2em]">
              Question {state.currentQuestionIndex + 1} <span className="opacity-30">/</span> {questions.length}
            </div>

            <button 
              disabled={state.currentQuestionIndex === questions.length - 1}
              onClick={() => setState(prev => ({ ...prev, currentQuestionIndex: Math.min(questions.length - 1, prev.currentQuestionIndex + 1) }))}
              className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black text-sm transition-all ${isChecked ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 ring-4 ring-blue-50' : 'text-blue-600 hover:bg-blue-50'}`}
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

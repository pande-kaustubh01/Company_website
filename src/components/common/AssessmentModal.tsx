import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  BarChart3,
  Calendar,
  RotateCcw,
  Download,
  Share2
} from 'lucide-react';
import { assessmentQuestions, calculateAssessmentResult } from '../../data/assessmentData';
import { AssessmentResult } from '../../types';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  if (!isOpen) return null;

  const currentQuestion = assessmentQuestions[currentStep];
  const isLastQuestion = currentStep === assessmentQuestions.length - 1;
  const selectedOptionScore = answers[currentQuestion?.id];

  const handleSelectOption = (score: number) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(updatedAnswers);

    if (isLastQuestion) {
      const computedResult = calculateAssessmentResult(updatedAnswers);
      setResult(computedResult);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-[#101012] border border-white/15 rounded-sm shadow-2xl shadow-black/90 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-[#0A0A0B]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-blue-600/15 text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2 border border-blue-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Diagnostic Assessment</span>
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-tight">
              Cloud & AI Readiness Assessment
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Evaluate your current cloud maturity, GenAI posture, and platform automation to identify high-ROI transformation opportunities.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 bg-[#0A0A0B]">
          {result ? (
            /* Results View */
            <div className="space-y-6 animate-in fade-in-50 duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-sm bg-[#121214] border border-white/10">
                <div className="space-y-2 text-center sm:text-left">
                  <div className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold font-mono">
                    Architecture Maturity Assessment
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase flex items-center justify-center sm:justify-start gap-2">
                    <span>Maturity Tier:</span>
                    <span className="text-blue-400 underline decoration-blue-500/40">{result.maturityLevel}</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed font-normal">
                    {result.summary}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-sm bg-[#0A0A0B] border border-blue-500/30 w-36 h-36 shrink-0 shadow-lg shadow-blue-500/10">
                  <div className="text-4xl font-black text-blue-400 font-mono">
                    {result.score}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1 font-mono">
                    Score / 100
                  </div>
                  <div className="w-full bg-[#18181B] h-1.5 rounded-none mt-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-none"
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Strengths & Gaps Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#121214] border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Identified Strengths</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.keyStrengths.map((st, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-sm bg-[#121214] border border-amber-500/20 space-y-2">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Priority Architecture Gaps</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.priorityGaps.map((gp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{gp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Action Plan */}
              <div className="p-5 rounded-sm bg-[#121214] border border-white/10 space-y-3">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Strategic Engineering Roadmap Recommendations</span>
                </div>
                <div className="space-y-2">
                  {result.recommendedActions.map((action, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-sm bg-[#0A0A0B] border border-white/5 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-sm bg-blue-600/20 text-blue-300 font-bold flex items-center justify-center shrink-0 font-mono text-[11px]">
                        0{idx + 1}
                      </span>
                      <span className="pt-0.5">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-4 py-3 rounded-sm border border-white/20 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-white hover:bg-blue-600 text-black hover:text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Review Findings in Consultation</span>
                </button>
              </div>
            </div>
          ) : (
            /* Question Flow View */
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="font-bold text-blue-400 uppercase tracking-wider">
                    Question 0{currentStep + 1} / 0{assessmentQuestions.length}
                  </span>
                  <span className="uppercase">{currentQuestion.category}</span>
                </div>
                <div className="w-full bg-[#18181B] h-1.5 rounded-none overflow-hidden border border-white/10">
                  <div
                    className="bg-blue-500 h-full rounded-none transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Details */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {currentQuestion.description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 rounded-sm border border-white/10 bg-[#121214] hover:bg-[#18181B] hover:border-blue-500 transition-all group flex items-start gap-4"
                  >
                    <span className="w-6 h-6 rounded-sm bg-[#0A0A0B] border border-white/10 group-hover:bg-blue-600 group-hover:text-white text-slate-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="space-y-1">
                      <div className="text-sm font-bold uppercase tracking-wide text-slate-200 group-hover:text-white">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300">
                        {opt.insight}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation footer */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Question</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

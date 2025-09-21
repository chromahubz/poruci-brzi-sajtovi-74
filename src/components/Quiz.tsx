import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

const Quiz = ({ title, description, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newUserAnswers);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setShowConfetti(false);
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;
  const isPerfectScore = score === questions.length;

  // Pokreni konfeti animaciju za savršen rezultat
  useEffect(() => {
    if (isQuizComplete && isPerfectScore) {
      setShowConfetti(true);
      // Zaustavi animaciju posle 4 sekunde
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isQuizComplete, isPerfectScore]);

  // Konfeti komponenta
  const ConfettiAnimation = () => {
    if (!showConfetti) return null;

    return (
      <>
        <style>{`
          @keyframes confetti-burst {
            0% {
              opacity: 1;
              transform: scale(0) rotate(0deg) translateX(0) translateY(0);
            }
            10% {
              opacity: 1;
              transform: scale(1) rotate(36deg) translateX(20px) translateY(-20px);
            }
            100% {
              opacity: 0;
              transform: scale(1) rotate(360deg) translateX(var(--x)) translateY(var(--y));
            }
          }

          @keyframes confetti-fall-burst {
            0% {
              opacity: 1;
              transform: scale(0) translateX(0) translateY(0) rotate(0deg);
            }
            15% {
              opacity: 1;
              transform: scale(1.2) translateX(var(--burst-x)) translateY(var(--burst-y)) rotate(180deg);
            }
            100% {
              opacity: 0;
              transform: scale(0.8) translateX(var(--final-x)) translateY(calc(var(--final-y) + 150px)) rotate(720deg);
            }
          }

          .confetti-piece {
            position: fixed;
            width: 12px;
            height: 12px;
            pointer-events: none;
            z-index: 9999;
            border-radius: 2px;
            top: 50%;
            left: 50%;
            animation: confetti-burst 2.5s ease-out forwards;
          }

          .confetti-piece-fall {
            position: fixed;
            width: 8px;
            height: 8px;
            pointer-events: none;
            z-index: 9999;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            animation: confetti-fall-burst 3s ease-out forwards;
          }

          .confetti-piece:nth-child(odd) {
            border-radius: 50%;
          }

          .confetti-piece:nth-child(3n) {
            width: 6px;
            height: 16px;
            border-radius: 3px;
          }

          .confetti-piece:nth-child(4n) {
            width: 14px;
            height: 6px;
            border-radius: 3px;
          }
        `}</style>
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Glavni burst konfeti */}
          {[...Array(80)].map((_, i) => {
            const angle = (i / 80) * 360;
            const velocity = 50 + Math.random() * 200;
            const x = Math.cos((angle * Math.PI) / 180) * velocity;
            const y = Math.sin((angle * Math.PI) / 180) * velocity;

            return (
              <div
                key={`burst-${i}`}
                className="confetti-piece"
                style={{
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 75%, 65%)`,
                }}
              />
            );
          })}

          {/* Dodatni falling konfeti za više efekta */}
          {[...Array(60)].map((_, i) => {
            const burstX = (Math.random() - 0.5) * 100;
            const burstY = (Math.random() - 0.5) * 80;
            const finalX = (Math.random() - 0.5) * 400;
            const finalY = 100 + Math.random() * 200;

            return (
              <div
                key={`fall-${i}`}
                className="confetti-piece-fall"
                style={{
                  '--burst-x': `${burstX}px`,
                  '--burst-y': `${burstY}px`,
                  '--final-x': `${finalX}px`,
                  '--final-y': `${finalY}px`,
                  animationDelay: `${0.3 + Math.random() * 1}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 80%, 70%)`,
                }}
              />
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <ConfettiAnimation />
      <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Pitanje {currentQuestion + 1} od {questions.length}</span>
          <span>Rezultat: {score}/{questions.length}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isQuizComplete ? (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${
                      selectedAnswer === null
                        ? "hover:bg-secondary cursor-pointer"
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? "bg-green-100 border-green-500 text-green-800"
                          : "bg-red-100 border-red-500 text-red-800"
                        : index === questions[currentQuestion].correctAnswer
                        ? "bg-green-100 border-green-500 text-green-800"
                        : "bg-gray-50 text-gray-500"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {selectedAnswer !== null && (
                        <>
                          {index === questions[currentQuestion].correctAnswer ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="w-5 h-5 text-red-600" />
                          ) : (
                            <div className="w-5 h-5" />
                          )}
                        </>
                      )}
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="space-y-3">
                  <div className={`p-4 rounded-lg ${
                    selectedAnswer === questions[currentQuestion].correctAnswer
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}>
                    <p className="font-medium mb-2">
                      {selectedAnswer === questions[currentQuestion].correctAnswer ? "Tačno!" : "Netačno!"}
                    </p>
                    <p className="text-sm">{questions[currentQuestion].explanation}</p>
                  </div>

                  {currentQuestion < questions.length - 1 && (
                    <Button onClick={handleNextQuestion} className="w-full">
                      Sledeće pitanje
                    </Button>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Kviz završen!</h3>
              <p className="text-lg">
                Vaš rezultat: <span className="font-bold text-primary">{score}/{questions.length}</span>
              </p>
              <p className="text-muted-foreground">
                {score === questions.length
                  ? "Savršeno! Odlično poznajete materiju!"
                  : score >= questions.length * 0.7
                  ? "Vrlo dobro! Imate solidno znanje!"
                  : score >= questions.length * 0.5
                  ? "Dobro! Još malo učenja i bićete stručnjaci!"
                  : "Ne odustajte! Prođite ponovo kroz članak i pokušajte ponovo!"}
              </p>
            </div>

            <Button onClick={resetQuiz} variant="outline" className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4" />
              <span>Pokušaj ponovo</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
    </>
  );
};

export default Quiz;
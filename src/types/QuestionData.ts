interface QuestionData {
  number: number;
  question: string;
  qtype: string;
  theme: string;
  response: {
    answers: Array<string>;
    validAnswers: Array<string>;
  };
  rewards: number;
  timing: number;
  logo: string;
  challenge: boolean | null;
  visited: boolean;
}

export default QuestionData;

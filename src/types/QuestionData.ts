interface QuestionData {
  number: number;
  question: string;
  type: string;
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

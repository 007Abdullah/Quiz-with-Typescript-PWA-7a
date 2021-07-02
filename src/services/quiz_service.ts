import { Quiz, QuestionType } from '../types/type';
export enum Choice {
    EASY = "easy",
    MEDIUM = "MEDIUM",
    HARD = "hard"
}

const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export default async function getQuizdata(numQues: number, Choice: Choice) {
    let res = await fetch(`https://opentdb.com/api.php?amount=${numQues}&difficulty=${Choice}&type=multiple`);
    let { results } = await res?.json();
    let quiz: Quiz[] = results?.map((questionObj: QuestionType, index: number) => {
        return {
            question: questionObj?.question,
            answer: questionObj?.correct_answer,
            option: shuffleArray(questionObj?.incorrect_answers.concat(questionObj?.correct_answer)),
        }
    })
    return quiz;

}
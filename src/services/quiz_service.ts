import React from 'react';
import { Quiz, QuestionType } from '../types/type';
export enum Choice {
    EASY = "easy",
    MEDIUM = "MEDIUM",
    HARD = "hard"
}

const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export default async function getQuizdata(numQues: number, level: Choice) {
    let res = await fetch(`https://opentdb.com/api.php?amount=${numQues}&difficulty=${level}&type=multiple`);
    let { result } = await res?.json();
    let quiz: Quiz[] = result?.map((questionObj: QuestionType, index: number) => {
        return {
            question: questionObj?.question,
            answer: questionObj?.correct_answer,
            option: shuffleArray(questionObj?.incorrect_answers.concat(questionObj?.correct_answer)),
        }
    })
    return quiz;

}
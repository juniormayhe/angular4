import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() { 
/*
    this.questions = [
      { text: 'What is your name?', answer: 'My name is Junior', hide: true},
      { text: 'What is your favorite color?', answer: 'My favorite color is blue', hide: true},
      { text: 'What is your favorite language?', answer: 'My favorite language is Català', hide: true},
    ];
    */
  }

  getQuestions(){
    if (localStorage.getItem('QUESTIONS')==null){
      this.questions=[];
    }
    else{
      this.questions = JSON.parse(localStorage.getItem('QUESTIONS'));
    }
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);

    let mQuestions=[];
    if (localStorage.getItem('QUESTIONS')==null){
      mQuestions.unshift(question);
      
    }
    else{
      
      mQuestions = JSON.parse(localStorage.getItem('QUESTIONS'));
      mQuestions.unshift(question);
    }
    
    localStorage.setItem('QUESTIONS', JSON.stringify(mQuestions));
    
  }

  removeQuestion(question:Question){
    for (let i=0; i< this.questions.length;i++){
      if (this.questions[i] == question){
        this.questions.splice(i, 1);
        localStorage.setItem('QUESTIONS', JSON.stringify(this.questions));
      }
    }
  }

}

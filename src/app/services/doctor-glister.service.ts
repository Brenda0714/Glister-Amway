import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorGlisterService {
  public questions: Array<any> = [];

  constructor() { }

  setQuestions(questions: Array<any>) {
    this.questions = questions;
  }
}

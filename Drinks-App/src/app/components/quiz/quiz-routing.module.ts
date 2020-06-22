import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
  },
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'quiz/results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

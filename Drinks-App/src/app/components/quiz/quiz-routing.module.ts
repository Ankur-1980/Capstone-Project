import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { QuizComponent } from './quiz.component';
import { AuthGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
  },
  {
    path: 'quiz/question',
    component: QuestionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quiz/results',
    component: ResultsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LevelComponent } from './level/level.component';
import { ResultComponent } from './result/result.component';
import { ScoreComponent } from './score/score.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { StartExamComponent } from './start-exam/start-exam.component';


const routes: Routes = [
  {path:'select-exam',component:SelectExamComponent},
  {path:'start-exam',component:StartExamComponent},
  {path:'level',component:LevelComponent},
  {path:'result', component:ResultComponent},
  {path:'score-card',component:ScoreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

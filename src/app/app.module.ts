import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { LevelComponent } from './level/level.component';
import { ResultComponent } from './result/result.component';
import { ScoreComponent } from './score/score.component';

//added
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SelectExamComponent,
    StartExamComponent,
    LevelComponent,
    ResultComponent,
    ScoreComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

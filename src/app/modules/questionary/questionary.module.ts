import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionaryComponent } from './questionary.component';
import { QuestionaryRoutingModule } from './questionaryRouting.module';



@NgModule({
  declarations: [
    QuestionaryComponent
  ],
  imports: [
    CommonModule,
    QuestionaryRoutingModule
  ]
})
export class QuestionaryModule { }

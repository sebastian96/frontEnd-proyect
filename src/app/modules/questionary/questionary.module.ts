import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionaryComponent } from './questionary.component';
import { QuestionaryRoutingModule } from './questionaryRouting.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    QuestionaryComponent
  ],
  imports: [
    CommonModule,
    QuestionaryRoutingModule,
    MaterialModule,
  ],
})
export class QuestionaryModule { }

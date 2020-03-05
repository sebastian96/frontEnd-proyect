import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionaryComponent } from './questionary.component';
import { QuestionaryRoutingModule } from './questionaryRouting.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestionaryComponent
  ],
  imports: [
    CommonModule,
    QuestionaryRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class QuestionaryModule { }

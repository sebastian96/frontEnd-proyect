import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Questions } from '../../models/questions-interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent {
  
  containerQuestions: NodeListOf<any>;
  questions: Questions[] = [];
  idRestaurant: number;
  titleRestaurtant: string;
  indexQuestion: number = 0;
  textButton: string = 'Siguiente';

  form: FormGroup;

  constructor( private Api: ApiService ) { 
    this.Api.getQuestions('1').subscribe(
      res => {
        this.titleRestaurtant = res['restaurant_name'];
        this.idRestaurant = res['id_restaurant'];
        this.questions = res['questions'];
      },
      err => {
        console.error(err); 
      }
    );
  }

  nextQuestion() {
    this.containerQuestions = document.querySelectorAll('.js-ask');
    this.containerQuestions.forEach((element)=> {
      if(element.classList.contains('is-active')) {
        element.classList.remove('is-active');
        this.indexQuestion++;
      }
    });

    if(this.indexQuestion < this.containerQuestions.length) {
      const missing = this.questions.length - this.indexQuestion;
      if(missing === 1) {
        this.textButton = 'Enviar';
      }
      this.containerQuestions[this.indexQuestion].classList.add('is-active');
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {
  isLinear: true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private Api: ApiService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.Api.getQuestions('1').subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    );
  }

}

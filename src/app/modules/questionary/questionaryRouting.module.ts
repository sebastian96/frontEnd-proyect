import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionaryComponent } from './questionary.component';

const routes: Routes = [
    {
        path: '',
        component: QuestionaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionaryRoutingModule {}
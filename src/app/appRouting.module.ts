import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/questionary/questionary.module').then(m => m.QuestionaryModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/administrator/administrator.module').then(m => m.AdministratorModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
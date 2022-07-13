import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchprocessComponent } from './pages/searchprocess/searchprocess.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchprocessComponent,
    pathMatch: 'full'
  }            
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowRoutingModule { }

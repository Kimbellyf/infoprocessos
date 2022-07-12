import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './pages-auth/service/auth/authguard.service';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('./pages-auth/pages-auth.module').then(m => m.PagesAuthModule)
  },
  {
    path: 'flow',
    loadChildren: () => import('./flow/flow.module').then(m => m.FlowModule),
    //canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

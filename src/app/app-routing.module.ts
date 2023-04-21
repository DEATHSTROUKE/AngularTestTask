import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'register', component: AuthComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main',
    canActivate: [AuthGuard],
    component: MainComponent,
    loadChildren: () => import('./components/main/main.module').then(m => m.MainModule),
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

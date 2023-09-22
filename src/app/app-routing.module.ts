import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlowerComponent } from './flower/flower.component';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'flower',
    component: FlowerComponent
  },
  {
    path: 'console',
    component: ConsoleComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

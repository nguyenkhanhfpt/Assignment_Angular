import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TestComponent } from './pages/test/test.component';
import { ResultComponent } from './pages/result/result.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coures', component: CoursesComponent},
  {path: 'test/:id', component: TestComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

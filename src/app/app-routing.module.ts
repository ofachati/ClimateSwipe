import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AnalyticComponent } from './components/analytic/analytic.component';
import { AiComponent } from './components/ai/ai.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'analytic', component: AnalyticComponent, data: { title: 'Analytics' } },
  { path: 'ai', component: AiComponent, data: { title: 'Ai' } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

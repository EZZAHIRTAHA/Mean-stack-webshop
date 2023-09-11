import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: 'test' , component: TestComponent},
  // {
  //   path: 'draft',
  //   loadChildren : 
  //   () => import('./components/draft/draft.module')
  //   .then((m)=>m.DraftModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

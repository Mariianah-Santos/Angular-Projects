import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListCreateComponent } from './components/pages/to-do-list-create/to-do-list-create.component';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
{
  path: '', component: HomeComponent

}, {
  path: 'listCreate', component: ToDoListCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

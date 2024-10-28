import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListCreateComponent } from './components/pages/to-do-list-create/to-do-list-create.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ToDoListEditComponent } from './components/pages/to-do-list-edit/to-do-list-edit.component';


const routes: Routes = [
{
  path: '', component: HomeComponent

}, {
  path: 'listCreate', component: ToDoListCreateComponent
}, {
  path: 'listEdit/:id', component: ToDoListEditComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

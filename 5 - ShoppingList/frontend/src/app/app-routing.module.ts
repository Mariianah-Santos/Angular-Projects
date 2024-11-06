import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ListCreateComponent } from './components/pages/list-create/list-create.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'listCreate', component: ListCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

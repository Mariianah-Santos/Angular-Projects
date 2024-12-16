import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AddContactComponent } from './components/pages/add-contact/add-contact.component';
import { EditContactComponent } from './components/pages/edit-contact/edit-contact.component';
import { DeletContactComponent } from './components/pages/delet-contact/delet-contact.component';


export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'addContact', component: AddContactComponent },
    { path: 'editContact/:id', component: EditContactComponent },
    { path: 'deletContact/:id', component: DeletContactComponent }
];


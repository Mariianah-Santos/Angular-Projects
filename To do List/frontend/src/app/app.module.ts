import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToDoListCrudComponent } from './components/pages/to-do-list-crud/to-do-list-crud.component';
import { ToDoListCreateComponent } from './components/pages/to-do-list-create/to-do-list-create.component';
import { ToDoListReadComponent } from './components/pages/to-do-list-read/to-do-list-read.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDoListCrudComponent,
    ToDoListCreateComponent,
    ToDoListReadComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

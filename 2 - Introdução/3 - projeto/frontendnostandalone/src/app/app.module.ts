import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente01Component } from './components/componente01/componente01.component';
import { Componente02Component } from './components/componente02/componente02.component';
import { HttpClientModule } from '@angular/common/http';
import { Componente03Component } from './components/componente03/componente03.component';
import { Componente04Component } from './components/componente04/componente04.component';
import { Componente04InputsComponent } from './components/componente04-inputs/componente04-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    Componente02Component,
    Componente03Component,
    Componente04Component,
    Componente04InputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

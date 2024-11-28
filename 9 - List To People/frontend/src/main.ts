import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ListPeopleService } from './app/services/list-people.service';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, { 
  ...appConfig,
  providers: [importProvidersFrom(HttpClientModule), ListPeopleService]
})
  .catch((err) => console.error(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http'
import { ConnectUrlService } from './services/connect-url.service';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationFormComponent } from './components/publication-form/publication-form.component';
import { LoginComponent } from './components/login/login.component'; 

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PublicationComponent,
    PublicationFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-8qz2id5u.us.auth0.com',
      clientId: 'hL33CD4IxfZiIJqD7xTcj3KLPWixzYsz'
    }),

    
  ],
  providers: [
    ConnectUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

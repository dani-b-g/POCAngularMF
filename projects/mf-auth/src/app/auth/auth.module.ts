import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { environment } from '@env';
import { OAuthModule } from 'angular-oauth2-oidc';



@NgModule({
  imports: [
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.API_URL],
        sendAccessToken: true
      }
    }),
  
  ],
  
})
export class AuthModule { }

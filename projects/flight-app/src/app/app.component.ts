import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loggerService: LoggerService, private oauthService: OAuthService) {
    this.loggerService.log('log');
    this.loggerService.debug('debug');

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  
    this.oauthService.setupAutomaticSilentRefresh();
  }
}


import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'auth.config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loggerService: LoggerService, private oauthService: OAuthService, private translate: TranslateService) {
    this.loggerService.log('log');
    this.loggerService.debug('debug');

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.setupAutomaticSilentRefresh();

    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}


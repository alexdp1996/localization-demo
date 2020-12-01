import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-translate';
  currentLanguage: string = "";

  constructor(private translate: TranslateService) {
    translate.addLangs(['en','ru']);
    translate.setDefaultLang('en');
    this.translate.get('currentLanguage').subscribe(str => this.currentLanguage = str);
  }

  switch(val: string) {
    this.translate.use(val);
    this.currentLanguage = this.translate.instant('currentLanguage');
  }
}

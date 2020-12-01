import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'build-in';

  genLocalizationFile = "ng xi18n --output-path src/locale --ivy";

  serveCommand = "ng serve --configuration=lang --open";

  sampleString = $localize `random text`;
}

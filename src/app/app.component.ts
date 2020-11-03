import { Component } from '@angular/core';
import { PushnotificationserviceService } from './services/pushnotificationservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirebaseCloudMessanging';

  message;

  constructor(
    private pushMessaging: PushnotificationserviceService ){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit()
  {
    //console.log('meenal');
    this.pushMessaging.requestPermission();
    this.pushMessaging.receiveMessage();
    this.message = this.pushMessaging.currentMessage;
  }
}

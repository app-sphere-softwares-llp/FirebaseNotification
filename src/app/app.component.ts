import { Component } from '@angular/core';
import { PushnotificationserviceService } from './services/pushnotificationservice.service';
import { AngularFireMessaging } from '@angular/fire/messaging';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirebaseCloudMessanging';

  message;

  constructor(
    private pushMessaging: PushnotificationserviceService,
    private afMessaging: AngularFireMessaging ){}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit()
  {
    // console.log('meenal');
    this.pushMessaging.requestPermission();
    this.pushMessaging.receiveMessage();
    this.message = this.pushMessaging.currentMessage;
    // this.afMessaging.messages
    //   .subscribe((message) => { console.log(message); });
  }

  // listen() {
  //   this.afMessaging.messages
  //     .subscribe((message) => { console.log(message); });
  // }
}

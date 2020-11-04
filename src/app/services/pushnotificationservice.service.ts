import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushnotificationserviceService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      // tslint:disable-next-line: variable-name
      (_messaging) => {
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      });
    }


  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
    (token) => {
    console.log(token);
    },
    (err) => {
    console.error('Unable to get permission to notify.', err);
    }
    );
  }

    receiveMessage() {
      this.angularFireMessaging.messages.subscribe(
      (payload) => {
      // tslint:disable-next-line: quotemark
      console.log("new message received. ", payload);
      this.currentMessage.next(payload);
      this.showCustomNotification(payload);
      });
      }

      showCustomNotification(payload: any){
        // tslint:disable-next-line: variable-name
        const notify_data = payload.notification;
        const title = notify_data.title;
        // tslint:disable-next-line: prefer-const
        let options = {
          body : notify_data.body,
        };
        console.log('new message arrived', notify_data);
        const notify: Notification = new Notification(title, options);

        notify.onclick = event => {
          event.preventDefault();
          window.location.href = 'http://www.google.com';
        };

      }

}

import { Component } from '@angular/core';
import { NotificheService } from '../notifiche.service';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.css']
})
export class NotificheComponent {
  constructor(public notificheService: NotificheService) {

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificheService {

  notifiche: string[] = [];

  constructor() { }

  aggiungi(notifica: string) {
    this.notifiche.push(notifica);
  }

  svuota() {
    this.notifiche = [];
  }
}

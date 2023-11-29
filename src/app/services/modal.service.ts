import { Injectable } from '@angular/core';
import {InmateDetailsModalComponent} from '../components/inmate-details-modal/inmate-details-modal.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: InmateDetailsModalComponent[] = [];

  constructor() { }

  add(modal: InmateDetailsModalComponent) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(modal: InmateDetailsModalComponent) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x === modal);
  }
}

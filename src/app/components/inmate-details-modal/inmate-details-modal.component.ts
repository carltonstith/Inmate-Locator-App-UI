import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-inmate-details-modal',
  templateUrl: './inmate-details-modal.component.html',
  styleUrls: ['./inmate-details-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InmateDetailsModalComponent implements OnInit, OnDestroy {
  @Input() id?: string;
  isOpened: boolean = false;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.modalService.add(this);

    document.body.appendChild(this.element);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this);
    this.element.remove();
  }

}

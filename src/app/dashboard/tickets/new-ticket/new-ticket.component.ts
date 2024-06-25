import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  private form = viewChild<ElementRef<HTMLFormElement>>('form');        // v17.3+
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{title: string; text: string}>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit() {
    console.log(this.form()?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText});

    this.form()?.nativeElement.reset();
  }

}
